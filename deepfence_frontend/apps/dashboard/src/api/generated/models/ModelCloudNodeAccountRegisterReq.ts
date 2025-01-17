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
import type { ModelCloudNodeMonitoredAccount } from './ModelCloudNodeMonitoredAccount';
import {
    ModelCloudNodeMonitoredAccountFromJSON,
    ModelCloudNodeMonitoredAccountFromJSONTyped,
    ModelCloudNodeMonitoredAccountToJSON,
} from './ModelCloudNodeMonitoredAccount';

/**
 * 
 * @export
 * @interface ModelCloudNodeAccountRegisterReq
 */
export interface ModelCloudNodeAccountRegisterReq {
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    account_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    account_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    cloud_provider: ModelCloudNodeAccountRegisterReqCloudProviderEnum;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    host_node_id: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    initial_request?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    installation_id: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    is_organization_deployment?: boolean;
    /**
     * 
     * @type {Array<ModelCloudNodeMonitoredAccount>}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    monitored_accounts?: Array<ModelCloudNodeMonitoredAccount> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    node_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    organization_account_id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    persistent_volume_supported?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ModelCloudNodeAccountRegisterReq
     */
    version: string;
}


/**
 * @export
 */
export const ModelCloudNodeAccountRegisterReqCloudProviderEnum = {
    Aws: 'aws',
    Gcp: 'gcp',
    Azure: 'azure'
} as const;
export type ModelCloudNodeAccountRegisterReqCloudProviderEnum = typeof ModelCloudNodeAccountRegisterReqCloudProviderEnum[keyof typeof ModelCloudNodeAccountRegisterReqCloudProviderEnum];


/**
 * Check if a given object implements the ModelCloudNodeAccountRegisterReq interface.
 */
export function instanceOfModelCloudNodeAccountRegisterReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "account_id" in value;
    isInstance = isInstance && "cloud_provider" in value;
    isInstance = isInstance && "host_node_id" in value;
    isInstance = isInstance && "installation_id" in value;
    isInstance = isInstance && "node_id" in value;
    isInstance = isInstance && "version" in value;

    return isInstance;
}

export function ModelCloudNodeAccountRegisterReqFromJSON(json: any): ModelCloudNodeAccountRegisterReq {
    return ModelCloudNodeAccountRegisterReqFromJSONTyped(json, false);
}

export function ModelCloudNodeAccountRegisterReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelCloudNodeAccountRegisterReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account_id': json['account_id'],
        'account_name': !exists(json, 'account_name') ? undefined : json['account_name'],
        'cloud_provider': json['cloud_provider'],
        'host_node_id': json['host_node_id'],
        'initial_request': !exists(json, 'initial_request') ? undefined : json['initial_request'],
        'installation_id': json['installation_id'],
        'is_organization_deployment': !exists(json, 'is_organization_deployment') ? undefined : json['is_organization_deployment'],
        'monitored_accounts': !exists(json, 'monitored_accounts') ? undefined : (json['monitored_accounts'] === null ? null : (json['monitored_accounts'] as Array<any>).map(ModelCloudNodeMonitoredAccountFromJSON)),
        'node_id': json['node_id'],
        'organization_account_id': !exists(json, 'organization_account_id') ? undefined : json['organization_account_id'],
        'persistent_volume_supported': !exists(json, 'persistent_volume_supported') ? undefined : json['persistent_volume_supported'],
        'version': json['version'],
    };
}

export function ModelCloudNodeAccountRegisterReqToJSON(value?: ModelCloudNodeAccountRegisterReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.account_id,
        'account_name': value.account_name,
        'cloud_provider': value.cloud_provider,
        'host_node_id': value.host_node_id,
        'initial_request': value.initial_request,
        'installation_id': value.installation_id,
        'is_organization_deployment': value.is_organization_deployment,
        'monitored_accounts': value.monitored_accounts === undefined ? undefined : (value.monitored_accounts === null ? null : (value.monitored_accounts as Array<any>).map(ModelCloudNodeMonitoredAccountToJSON)),
        'node_id': value.node_id,
        'organization_account_id': value.organization_account_id,
        'persistent_volume_supported': value.persistent_volume_supported,
        'version': value.version,
    };
}

