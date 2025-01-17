/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: v2.5.2
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelGenerativeAiIntegrationCloudPostureRequest
 */
export interface ModelGenerativeAiIntegrationCloudPostureRequest {
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationCloudPostureRequest
     */
    cloud_provider: string;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationCloudPostureRequest
     */
    compliance_check_type: string;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationCloudPostureRequest
     */
    group?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelGenerativeAiIntegrationCloudPostureRequest
     */
    integration_id?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationCloudPostureRequest
     */
    query_type: ModelGenerativeAiIntegrationCloudPostureRequestQueryTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationCloudPostureRequest
     */
    remediation_format: ModelGenerativeAiIntegrationCloudPostureRequestRemediationFormatEnum;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationCloudPostureRequest
     */
    service?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerativeAiIntegrationCloudPostureRequest
     */
    title: string;
}


/**
 * @export
 */
export const ModelGenerativeAiIntegrationCloudPostureRequestQueryTypeEnum = {
    Remediation: 'remediation'
} as const;
export type ModelGenerativeAiIntegrationCloudPostureRequestQueryTypeEnum = typeof ModelGenerativeAiIntegrationCloudPostureRequestQueryTypeEnum[keyof typeof ModelGenerativeAiIntegrationCloudPostureRequestQueryTypeEnum];

/**
 * @export
 */
export const ModelGenerativeAiIntegrationCloudPostureRequestRemediationFormatEnum = {
    All: 'all',
    Cli: 'cli',
    Pulumi: 'pulumi',
    Terraform: 'terraform'
} as const;
export type ModelGenerativeAiIntegrationCloudPostureRequestRemediationFormatEnum = typeof ModelGenerativeAiIntegrationCloudPostureRequestRemediationFormatEnum[keyof typeof ModelGenerativeAiIntegrationCloudPostureRequestRemediationFormatEnum];


/**
 * Check if a given object implements the ModelGenerativeAiIntegrationCloudPostureRequest interface.
 */
export function instanceOfModelGenerativeAiIntegrationCloudPostureRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cloud_provider" in value;
    isInstance = isInstance && "compliance_check_type" in value;
    isInstance = isInstance && "query_type" in value;
    isInstance = isInstance && "remediation_format" in value;
    isInstance = isInstance && "title" in value;

    return isInstance;
}

export function ModelGenerativeAiIntegrationCloudPostureRequestFromJSON(json: any): ModelGenerativeAiIntegrationCloudPostureRequest {
    return ModelGenerativeAiIntegrationCloudPostureRequestFromJSONTyped(json, false);
}

export function ModelGenerativeAiIntegrationCloudPostureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelGenerativeAiIntegrationCloudPostureRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cloud_provider': json['cloud_provider'],
        'compliance_check_type': json['compliance_check_type'],
        'group': !exists(json, 'group') ? undefined : json['group'],
        'integration_id': !exists(json, 'integration_id') ? undefined : json['integration_id'],
        'query_type': json['query_type'],
        'remediation_format': json['remediation_format'],
        'service': !exists(json, 'service') ? undefined : json['service'],
        'title': json['title'],
    };
}

export function ModelGenerativeAiIntegrationCloudPostureRequestToJSON(value?: ModelGenerativeAiIntegrationCloudPostureRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cloud_provider': value.cloud_provider,
        'compliance_check_type': value.compliance_check_type,
        'group': value.group,
        'integration_id': value.integration_id,
        'query_type': value.query_type,
        'remediation_format': value.remediation_format,
        'service': value.service,
        'title': value.title,
    };
}

