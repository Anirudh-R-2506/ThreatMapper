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
 * @interface ModelScanStatusReq
 */
export interface ModelScanStatusReq {
    /**
     * 
     * @type {string}
     * @memberof ModelScanStatusReq
     */
    bulk_scan_id: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelScanStatusReq
     */
    scan_ids: Array<string> | null;
}

/**
 * Check if a given object implements the ModelScanStatusReq interface.
 */
export function instanceOfModelScanStatusReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bulk_scan_id" in value;
    isInstance = isInstance && "scan_ids" in value;

    return isInstance;
}

export function ModelScanStatusReqFromJSON(json: any): ModelScanStatusReq {
    return ModelScanStatusReqFromJSONTyped(json, false);
}

export function ModelScanStatusReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelScanStatusReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bulk_scan_id': json['bulk_scan_id'],
        'scan_ids': json['scan_ids'],
    };
}

export function ModelScanStatusReqToJSON(value?: ModelScanStatusReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bulk_scan_id': value.bulk_scan_id,
        'scan_ids': value.scan_ids,
    };
}

