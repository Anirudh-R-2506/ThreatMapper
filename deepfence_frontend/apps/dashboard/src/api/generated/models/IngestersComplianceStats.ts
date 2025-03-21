/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: v2.5.3
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
 * @interface IngestersComplianceStats
 */
export interface IngestersComplianceStats {
    /**
     * 
     * @type {number}
     * @memberof IngestersComplianceStats
     */
    alarm?: number;
    /**
     * 
     * @type {number}
     * @memberof IngestersComplianceStats
     */
    compliance_percentage?: number;
    /**
     * 
     * @type {number}
     * @memberof IngestersComplianceStats
     */
    error?: number;
    /**
     * 
     * @type {number}
     * @memberof IngestersComplianceStats
     */
    info?: number;
    /**
     * 
     * @type {number}
     * @memberof IngestersComplianceStats
     */
    ok?: number;
    /**
     * 
     * @type {number}
     * @memberof IngestersComplianceStats
     */
    skip?: number;
}

/**
 * Check if a given object implements the IngestersComplianceStats interface.
 */
export function instanceOfIngestersComplianceStats(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IngestersComplianceStatsFromJSON(json: any): IngestersComplianceStats {
    return IngestersComplianceStatsFromJSONTyped(json, false);
}

export function IngestersComplianceStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): IngestersComplianceStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alarm': !exists(json, 'alarm') ? undefined : json['alarm'],
        'compliance_percentage': !exists(json, 'compliance_percentage') ? undefined : json['compliance_percentage'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'info': !exists(json, 'info') ? undefined : json['info'],
        'ok': !exists(json, 'ok') ? undefined : json['ok'],
        'skip': !exists(json, 'skip') ? undefined : json['skip'],
    };
}

export function IngestersComplianceStatsToJSON(value?: IngestersComplianceStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alarm': value.alarm,
        'compliance_percentage': value.compliance_percentage,
        'error': value.error,
        'info': value.info,
        'ok': value.ok,
        'skip': value.skip,
    };
}

