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
import type { ModelBenchmarkType } from './ModelBenchmarkType';
import {
    ModelBenchmarkTypeFromJSON,
    ModelBenchmarkTypeFromJSONTyped,
    ModelBenchmarkTypeToJSON,
} from './ModelBenchmarkType';
import type { ModelNodeIdentifier } from './ModelNodeIdentifier';
import {
    ModelNodeIdentifierFromJSON,
    ModelNodeIdentifierFromJSONTyped,
    ModelNodeIdentifierToJSON,
} from './ModelNodeIdentifier';
import type { ModelScanFilter } from './ModelScanFilter';
import {
    ModelScanFilterFromJSON,
    ModelScanFilterFromJSONTyped,
    ModelScanFilterToJSON,
} from './ModelScanFilter';

/**
 * 
 * @export
 * @interface ModelComplianceScanTriggerReq
 */
export interface ModelComplianceScanTriggerReq {
    /**
     * 
     * @type {Array<ModelBenchmarkType>}
     * @memberof ModelComplianceScanTriggerReq
     */
    benchmark_types: Array<ModelBenchmarkType> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ModelComplianceScanTriggerReq
     */
    deepfence_system_scan?: boolean;
    /**
     * 
     * @type {ModelScanFilter}
     * @memberof ModelComplianceScanTriggerReq
     */
    filters: ModelScanFilter;
    /**
     * 
     * @type {boolean}
     * @memberof ModelComplianceScanTriggerReq
     */
    is_priority?: boolean;
    /**
     * 
     * @type {Array<ModelNodeIdentifier>}
     * @memberof ModelComplianceScanTriggerReq
     */
    node_ids: Array<ModelNodeIdentifier> | null;
}


/**
 * @export
 */
export const ModelComplianceScanTriggerReqBenchmarkTypesEnum = {
} as const;
export type ModelComplianceScanTriggerReqBenchmarkTypesEnum = typeof ModelComplianceScanTriggerReqBenchmarkTypesEnum[keyof typeof ModelComplianceScanTriggerReqBenchmarkTypesEnum];


/**
 * Check if a given object implements the ModelComplianceScanTriggerReq interface.
 */
export function instanceOfModelComplianceScanTriggerReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "benchmark_types" in value;
    isInstance = isInstance && "filters" in value;
    isInstance = isInstance && "node_ids" in value;

    return isInstance;
}

export function ModelComplianceScanTriggerReqFromJSON(json: any): ModelComplianceScanTriggerReq {
    return ModelComplianceScanTriggerReqFromJSONTyped(json, false);
}

export function ModelComplianceScanTriggerReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelComplianceScanTriggerReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'benchmark_types': (json['benchmark_types'] === null ? null : (json['benchmark_types'] as Array<any>).map(ModelBenchmarkTypeFromJSON)),
        'deepfence_system_scan': !exists(json, 'deepfence_system_scan') ? undefined : json['deepfence_system_scan'],
        'filters': ModelScanFilterFromJSON(json['filters']),
        'is_priority': !exists(json, 'is_priority') ? undefined : json['is_priority'],
        'node_ids': (json['node_ids'] === null ? null : (json['node_ids'] as Array<any>).map(ModelNodeIdentifierFromJSON)),
    };
}

export function ModelComplianceScanTriggerReqToJSON(value?: ModelComplianceScanTriggerReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'benchmark_types': (value.benchmark_types === null ? null : (value.benchmark_types as Array<any>).map(ModelBenchmarkTypeToJSON)),
        'deepfence_system_scan': value.deepfence_system_scan,
        'filters': ModelScanFilterToJSON(value.filters),
        'is_priority': value.is_priority,
        'node_ids': (value.node_ids === null ? null : (value.node_ids as Array<any>).map(ModelNodeIdentifierToJSON)),
    };
}

