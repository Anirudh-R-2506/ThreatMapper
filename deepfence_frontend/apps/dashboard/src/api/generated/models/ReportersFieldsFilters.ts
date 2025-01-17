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
import type { ReportersCompareFilter } from './ReportersCompareFilter';
import {
    ReportersCompareFilterFromJSON,
    ReportersCompareFilterFromJSONTyped,
    ReportersCompareFilterToJSON,
} from './ReportersCompareFilter';
import type { ReportersContainsFilter } from './ReportersContainsFilter';
import {
    ReportersContainsFilterFromJSON,
    ReportersContainsFilterFromJSONTyped,
    ReportersContainsFilterToJSON,
} from './ReportersContainsFilter';
import type { ReportersMatchFilter } from './ReportersMatchFilter';
import {
    ReportersMatchFilterFromJSON,
    ReportersMatchFilterFromJSONTyped,
    ReportersMatchFilterToJSON,
} from './ReportersMatchFilter';
import type { ReportersOrderFilter } from './ReportersOrderFilter';
import {
    ReportersOrderFilterFromJSON,
    ReportersOrderFilterFromJSONTyped,
    ReportersOrderFilterToJSON,
} from './ReportersOrderFilter';

/**
 * 
 * @export
 * @interface ReportersFieldsFilters
 */
export interface ReportersFieldsFilters {
    /**
     * 
     * @type {Array<ReportersCompareFilter>}
     * @memberof ReportersFieldsFilters
     */
    compare_filter: Array<ReportersCompareFilter> | null;
    /**
     * 
     * @type {ReportersContainsFilter}
     * @memberof ReportersFieldsFilters
     */
    contains_filter: ReportersContainsFilter;
    /**
     * 
     * @type {ReportersContainsFilter}
     * @memberof ReportersFieldsFilters
     */
    contains_in_array_filter?: ReportersContainsFilter;
    /**
     * 
     * @type {ReportersMatchFilter}
     * @memberof ReportersFieldsFilters
     */
    match_filter: ReportersMatchFilter;
    /**
     * 
     * @type {ReportersMatchFilter}
     * @memberof ReportersFieldsFilters
     */
    match_in_array_filter?: ReportersMatchFilter;
    /**
     * 
     * @type {ReportersContainsFilter}
     * @memberof ReportersFieldsFilters
     */
    not_contains_filter?: ReportersContainsFilter;
    /**
     * 
     * @type {ReportersOrderFilter}
     * @memberof ReportersFieldsFilters
     */
    order_filter: ReportersOrderFilter;
}

/**
 * Check if a given object implements the ReportersFieldsFilters interface.
 */
export function instanceOfReportersFieldsFilters(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "compare_filter" in value;
    isInstance = isInstance && "contains_filter" in value;
    isInstance = isInstance && "match_filter" in value;
    isInstance = isInstance && "order_filter" in value;

    return isInstance;
}

export function ReportersFieldsFiltersFromJSON(json: any): ReportersFieldsFilters {
    return ReportersFieldsFiltersFromJSONTyped(json, false);
}

export function ReportersFieldsFiltersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportersFieldsFilters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'compare_filter': (json['compare_filter'] === null ? null : (json['compare_filter'] as Array<any>).map(ReportersCompareFilterFromJSON)),
        'contains_filter': ReportersContainsFilterFromJSON(json['contains_filter']),
        'contains_in_array_filter': !exists(json, 'contains_in_array_filter') ? undefined : ReportersContainsFilterFromJSON(json['contains_in_array_filter']),
        'match_filter': ReportersMatchFilterFromJSON(json['match_filter']),
        'match_in_array_filter': !exists(json, 'match_in_array_filter') ? undefined : ReportersMatchFilterFromJSON(json['match_in_array_filter']),
        'not_contains_filter': !exists(json, 'not_contains_filter') ? undefined : ReportersContainsFilterFromJSON(json['not_contains_filter']),
        'order_filter': ReportersOrderFilterFromJSON(json['order_filter']),
    };
}

export function ReportersFieldsFiltersToJSON(value?: ReportersFieldsFilters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'compare_filter': (value.compare_filter === null ? null : (value.compare_filter as Array<any>).map(ReportersCompareFilterToJSON)),
        'contains_filter': ReportersContainsFilterToJSON(value.contains_filter),
        'contains_in_array_filter': ReportersContainsFilterToJSON(value.contains_in_array_filter),
        'match_filter': ReportersMatchFilterToJSON(value.match_filter),
        'match_in_array_filter': ReportersMatchFilterToJSON(value.match_in_array_filter),
        'not_contains_filter': ReportersContainsFilterToJSON(value.not_contains_filter),
        'order_filter': ReportersOrderFilterToJSON(value.order_filter),
    };
}

