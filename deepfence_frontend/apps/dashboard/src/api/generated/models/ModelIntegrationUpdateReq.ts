/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ModelIntegrationFilters } from './ModelIntegrationFilters';
import {
    ModelIntegrationFiltersFromJSON,
    ModelIntegrationFiltersFromJSONTyped,
    ModelIntegrationFiltersToJSON,
} from './ModelIntegrationFilters';

/**
 * 
 * @export
 * @interface ModelIntegrationUpdateReq
 */
export interface ModelIntegrationUpdateReq {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof ModelIntegrationUpdateReq
     */
    config?: { [key: string]: any; } | null;
    /**
     * 
     * @type {ModelIntegrationFilters}
     * @memberof ModelIntegrationUpdateReq
     */
    filters?: ModelIntegrationFilters;
    /**
     * 
     * @type {number}
     * @memberof ModelIntegrationUpdateReq
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelIntegrationUpdateReq
     */
    integration_type?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelIntegrationUpdateReq
     */
    notification_type?: string;
}

/**
 * Check if a given object implements the ModelIntegrationUpdateReq interface.
 */
export function instanceOfModelIntegrationUpdateReq(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ModelIntegrationUpdateReqFromJSON(json: any): ModelIntegrationUpdateReq {
    return ModelIntegrationUpdateReqFromJSONTyped(json, false);
}

export function ModelIntegrationUpdateReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelIntegrationUpdateReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'config': !exists(json, 'config') ? undefined : json['config'],
        'filters': !exists(json, 'filters') ? undefined : ModelIntegrationFiltersFromJSON(json['filters']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'integration_type': !exists(json, 'integration_type') ? undefined : json['integration_type'],
        'notification_type': !exists(json, 'notification_type') ? undefined : json['notification_type'],
    };
}

export function ModelIntegrationUpdateReqToJSON(value?: ModelIntegrationUpdateReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'config': value.config,
        'filters': ModelIntegrationFiltersToJSON(value.filters),
        'id': value.id,
        'integration_type': value.integration_type,
        'notification_type': value.notification_type,
    };
}

