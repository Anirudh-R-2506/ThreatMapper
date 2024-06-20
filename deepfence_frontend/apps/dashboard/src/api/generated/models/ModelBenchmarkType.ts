/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: v2.2.1
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const ModelBenchmarkType = {
    Hipaa: 'hipaa',
    Gdpr: 'gdpr',
    Pci: 'pci',
    Nist: 'nist',
    Cis: 'cis',
    Soc2: 'soc_2',
    NsaCisa: 'nsa-cisa',
    AwsFoundationalSecurity: 'aws_foundational_security'
} as const;
export type ModelBenchmarkType = typeof ModelBenchmarkType[keyof typeof ModelBenchmarkType];


export function ModelBenchmarkTypeFromJSON(json: any): ModelBenchmarkType {
    return ModelBenchmarkTypeFromJSONTyped(json, false);
}

export function ModelBenchmarkTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelBenchmarkType {
    return json as ModelBenchmarkType;
}

export function ModelBenchmarkTypeToJSON(value?: ModelBenchmarkType | null): any {
    return value as any;
}

