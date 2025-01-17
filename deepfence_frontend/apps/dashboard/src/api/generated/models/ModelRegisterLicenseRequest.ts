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
 * @interface ModelRegisterLicenseRequest
 */
export interface ModelRegisterLicenseRequest {
    /**
     * 
     * @type {string}
     * @memberof ModelRegisterLicenseRequest
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelRegisterLicenseRequest
     */
    license_key: string;
}

/**
 * Check if a given object implements the ModelRegisterLicenseRequest interface.
 */
export function instanceOfModelRegisterLicenseRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "license_key" in value;

    return isInstance;
}

export function ModelRegisterLicenseRequestFromJSON(json: any): ModelRegisterLicenseRequest {
    return ModelRegisterLicenseRequestFromJSONTyped(json, false);
}

export function ModelRegisterLicenseRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelRegisterLicenseRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
        'license_key': json['license_key'],
    };
}

export function ModelRegisterLicenseRequestToJSON(value?: ModelRegisterLicenseRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'license_key': value.license_key,
    };
}

