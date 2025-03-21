package s3

import (
	"bytes"
	"context"
	"encoding/json"

	"github.com/aws/aws-sdk-go/aws/credentials/stscreds"
	"github.com/deepfence/ThreatMapper/deepfence_utils/log"
	"github.com/deepfence/ThreatMapper/deepfence_utils/telemetry"
	"github.com/deepfence/ThreatMapper/deepfence_utils/utils"
	"github.com/klauspost/compress/gzip"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/s3"
)

func New(ctx context.Context, b []byte) (*S3, error) {
	s := S3{}
	err := json.Unmarshal(b, &s)
	if err != nil {
		return &s, err
	}

	s.Buffer = new(bytes.Buffer)
	return &s, nil
}

func (s S3) SendNotification(ctx context.Context, message []map[string]interface{}, extras map[string]interface{}) error {

	_, span := telemetry.NewSpan(ctx, "integrations", "s3-send-notification")
	defer span.End()

	// Create an AWS session with your credentials and region
	var sess *session.Session
	var err error
	if s.Config.UseIAMRole == trueStr {
		awsConfig := aws.Config{
			Region: aws.String(s.Config.AWSRegion),
		}

		// if targetRoleARN is empty, that means
		// it is not a crossaccount ecr, no need to use stscreds
		if s.Config.TargetAccountRoleARN != "" {
			creds := stscreds.NewCredentials(sess, s.Config.TargetAccountRoleARN)
			awsConfig.Credentials = creds
		}

		sess, err = session.NewSession(&awsConfig)
		if err != nil {
			log.Error().Err(err).Msg("Failed to create AWS session")
			return err
		}

	} else {
		sess, err = session.NewSession(&aws.Config{
			Region:      aws.String(s.Config.AWSRegion),
			Credentials: credentials.NewStaticCredentials(s.Config.AWSAccessKey, s.Config.AWSSecretKey, ""),
		})
		if err != nil {
			log.Error().Err(err).Msg("Failed to create AWS session")
			return err
		}
	}

	// Marshal your JSON data into a byte slice
	payload, err := json.Marshal(message)
	if err != nil {
		log.Error().Err(err).Msg("failed to marshal message")
		return err
	}

	s.Buffer.Reset()
	gzWriter, err := gzip.NewWriterLevel(s.Buffer, gzip.DefaultCompression)
	if err != nil {
		log.Error().Err(err).Msg("Failed to get the gzip writer")
		span.EndWithErr(err)
		return err
	}

	_, _ = gzWriter.Write(payload)
	gzWriter.Close()
	// Upload the JSON data to S3
	svc := s3.New(sess)
	// Default timeout of aws client is 30 sec
	_, err = svc.PutObject(&s3.PutObjectInput{
		Body:            bytes.NewReader(s.Buffer.Bytes()),
		Bucket:          aws.String(s.Config.S3BucketName),
		ContentEncoding: aws.String("gzip"),
		Key:             aws.String(s.Config.S3FolderName + "/" + utils.GetDatetimeNow() + ".json"),
	})
	if err != nil {
		log.Error().Err(err).Msg("Failed to upload JSON data to S3")
		span.EndWithErr(err)
		return err
	}

	log.Info().Msg("JSON data uploaded successfully")
	return nil
}

func (s S3) IsValidCredential(ctx context.Context) (bool, error) {
	var sess *session.Session
	var err error
	if s.Config.UseIAMRole == trueStr {
		awsConfig := aws.Config{
			Region: aws.String(s.Config.AWSRegion),
		}

		sess, err = session.NewSession(&awsConfig)
		if err != nil {
			log.Error().Err(err).Msg("error creating aws session")
			return false, err
		}

		// if targetRoleARN is empty, that means
		// it is not a cross account ecr, no need to use stscreds
		if s.Config.TargetAccountRoleARN != "" {
			creds := stscreds.NewCredentials(sess, s.Config.TargetAccountRoleARN)
			awsConfig.Credentials = creds
		}
	} else {
		sess, err = session.NewSession(&aws.Config{
			Region:      aws.String(s.Config.AWSRegion),
			Credentials: credentials.NewStaticCredentials(s.Config.AWSAccessKey, s.Config.AWSSecretKey, ""),
		})
		if err != nil {
			log.Error().Err(err).Msg("error creating aws session")
			return false, err
		}
	}

	svc := s3.New(sess)

	_, err = svc.ListBuckets(nil)
	if err != nil {
		log.Error().Err(err).Msg("Failed to list buckets")
		return false, err
	}

	return true, nil
}

func (s S3) SendSummaryLink() bool {
	return false
}
