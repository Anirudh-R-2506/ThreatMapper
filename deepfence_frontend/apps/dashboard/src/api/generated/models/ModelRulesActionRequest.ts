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
 * @interface ModelRulesActionRequest
 */
export interface ModelRulesActionRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelRulesActionRequest
     */
    rule_ids: Array<string> | null;
}

/**
 * Check if a given object implements the ModelRulesActionRequest interface.
 */
export function instanceOfModelRulesActionRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "rule_ids" in value;

    return isInstance;
}

export function ModelRulesActionRequestFromJSON(json: any): ModelRulesActionRequest {
    return ModelRulesActionRequestFromJSONTyped(json, false);
}

export function ModelRulesActionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelRulesActionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'rule_ids': json['rule_ids'],
    };
}

export function ModelRulesActionRequestToJSON(value?: ModelRulesActionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'rule_ids': value.rule_ids,
    };
}

