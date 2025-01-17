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
import type { ModelHost } from './ModelHost';
import {
    ModelHostFromJSON,
    ModelHostFromJSONTyped,
    ModelHostToJSON,
} from './ModelHost';

/**
 * 
 * @export
 * @interface ModelKubernetesCluster
 */
export interface ModelKubernetesCluster {
    /**
     * 
     * @type {boolean}
     * @memberof ModelKubernetesCluster
     */
    agent_running: boolean;
    /**
     * 
     * @type {Array<ModelHost>}
     * @memberof ModelKubernetesCluster
     */
    hosts: Array<ModelHost> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelKubernetesCluster
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelKubernetesCluster
     */
    node_name: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelKubernetesCluster
     */
    tags: Array<string> | null;
}

/**
 * Check if a given object implements the ModelKubernetesCluster interface.
 */
export function instanceOfModelKubernetesCluster(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "agent_running" in value;
    isInstance = isInstance && "hosts" in value;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "node_name" in value;
    isInstance = isInstance && "tags" in value;

    return isInstance;
}

export function ModelKubernetesClusterFromJSON(json: any): ModelKubernetesCluster {
    return ModelKubernetesClusterFromJSONTyped(json, false);
}

export function ModelKubernetesClusterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelKubernetesCluster {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agent_running': json['agent_running'],
        'hosts': (json['hosts'] === null ? null : (json['hosts'] as Array<any>).map(ModelHostFromJSON)),
        'node_id': json['node_id'],
        'node_name': json['node_name'],
        'tags': json['tags'],
    };
}

export function ModelKubernetesClusterToJSON(value?: ModelKubernetesCluster | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'agent_running': value.agent_running,
        'hosts': (value.hosts === null ? null : (value.hosts as Array<any>).map(ModelHostToJSON)),
        'node_id': value.node_id,
        'node_name': value.node_name,
        'tags': value.tags,
    };
}

