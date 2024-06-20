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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ModelCloudNodeControlReq
 */
export interface ModelCloudNodeControlReq {
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeControlReq
     */
    cloud_provider: ModelCloudNodeControlReqCloudProviderEnum;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeControlReq
     */
    compliance_type: ModelCloudNodeControlReqComplianceTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeControlReq
     */
    node_id?: string;
}


/**
 * @export
 */
export const ModelCloudNodeControlReqCloudProviderEnum = {
    Aws: 'aws',
    Gcp: 'gcp',
    Azure: 'azure',
    Linux: 'linux',
    Kubernetes: 'kubernetes'
} as const;
export type ModelCloudNodeControlReqCloudProviderEnum = typeof ModelCloudNodeControlReqCloudProviderEnum[keyof typeof ModelCloudNodeControlReqCloudProviderEnum];

/**
 * @export
 */
export const ModelCloudNodeControlReqComplianceTypeEnum = {
    Hipaa: 'hipaa',
    Gdpr: 'gdpr',
    Pci: 'pci',
    Nist: 'nist',
    Cis: 'cis',
    Soc2: 'soc_2',
    NsaCisa: 'nsa-cisa',
    AwsFoundationalSecurity: 'aws_foundational_security'
} as const;
export type ModelCloudNodeControlReqComplianceTypeEnum = typeof ModelCloudNodeControlReqComplianceTypeEnum[keyof typeof ModelCloudNodeControlReqComplianceTypeEnum];


/**
 * Check if a given object implements the ModelCloudNodeControlReq interface.
 */
export function instanceOfModelCloudNodeControlReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cloud_provider" in value;
    isInstance = isInstance && "compliance_type" in value;

    return isInstance;
}

export function ModelCloudNodeControlReqFromJSON(json: any): ModelCloudNodeControlReq {
    return ModelCloudNodeControlReqFromJSONTyped(json, false);
}

export function ModelCloudNodeControlReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelCloudNodeControlReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cloud_provider': json['cloud_provider'],
        'compliance_type': json['compliance_type'],
        'node_id': !exists(json, 'node_id') ? undefined : json['node_id'],
    };
}

export function ModelCloudNodeControlReqToJSON(value?: ModelCloudNodeControlReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cloud_provider': value.cloud_provider,
        'compliance_type': value.compliance_type,
        'node_id': value.node_id,
    };
}

