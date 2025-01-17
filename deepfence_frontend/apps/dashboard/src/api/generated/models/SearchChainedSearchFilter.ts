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
import type { SearchSearchFilter } from './SearchSearchFilter';
import {
    SearchSearchFilterFromJSON,
    SearchSearchFilterFromJSONTyped,
    SearchSearchFilterToJSON,
} from './SearchSearchFilter';

/**
 * 
 * @export
 * @interface SearchChainedSearchFilter
 */
export interface SearchChainedSearchFilter {
    /**
     * 
     * @type {SearchChainedSearchFilter}
     * @memberof SearchChainedSearchFilter
     */
    next_filter?: SearchChainedSearchFilter;
    /**
     * 
     * @type {SearchSearchFilter}
     * @memberof SearchChainedSearchFilter
     */
    node_filter: SearchSearchFilter;
    /**
     * 
     * @type {string}
     * @memberof SearchChainedSearchFilter
     */
    relation_ship: string;
}

/**
 * Check if a given object implements the SearchChainedSearchFilter interface.
 */
export function instanceOfSearchChainedSearchFilter(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "node_filter" in value;
    isInstance = isInstance && "relation_ship" in value;

    return isInstance;
}

export function SearchChainedSearchFilterFromJSON(json: any): SearchChainedSearchFilter {
    return SearchChainedSearchFilterFromJSONTyped(json, false);
}

export function SearchChainedSearchFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchChainedSearchFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'next_filter': !exists(json, 'next_filter') ? undefined : SearchChainedSearchFilterFromJSON(json['next_filter']),
        'node_filter': SearchSearchFilterFromJSON(json['node_filter']),
        'relation_ship': json['relation_ship'],
    };
}

export function SearchChainedSearchFilterToJSON(value?: SearchChainedSearchFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'next_filter': SearchChainedSearchFilterToJSON(value.next_filter),
        'node_filter': SearchSearchFilterToJSON(value.node_filter),
        'relation_ship': value.relation_ship,
    };
}

