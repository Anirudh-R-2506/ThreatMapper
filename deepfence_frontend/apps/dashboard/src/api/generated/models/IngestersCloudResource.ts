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
 * @interface IngestersCloudResource
 */
export interface IngestersCloudResource {
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    access_level?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    account_id?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    action?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IngestersCloudResource
     */
    allow_blob_public_access?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    arn?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    attached_policy_arns?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof IngestersCloudResource
     */
    block_public_acls?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IngestersCloudResource
     */
    block_public_policy?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof IngestersCloudResource
     */
    bucket_policy_is_public?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    cidr_ipv4?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    cloud_provider?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    cluster_arn?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    cluster_name?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    connectivity?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    container_definitions?: any | null;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    containers?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    create_date?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    db_cluster_identifier?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    description?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    event_notification_configuration?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    group?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    group_id?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    groups?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    host_name?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    iam_instance_profile_arn?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    iam_instance_profile_id?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    iam_policy?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof IngestersCloudResource
     */
    ignore_public_acls?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    ingress_settings?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    inline_policies?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    instance_id?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    instance_profile_arns?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    instance_type?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    instances?: any | null;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    ip_configuration?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof IngestersCloudResource
     */
    is_egress?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    last_status?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    name?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    network_configuration?: any | null;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    network_interfaces?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    network_mode?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    organization_id?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    organization_master_account_arn?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    organization_master_account_email?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    path?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    policy?: any | null;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    policy_std?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    private_dns_name?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    private_ip_address?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    privilege?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    public_access?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    public_ip_address?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    public_ips?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    public_network_access?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    region?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    resource_group?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    resource_id?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    resource_vpc_config?: any | null;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    resources_vpc_config?: any | null;
    /**
     * 
     * @type {boolean}
     * @memberof IngestersCloudResource
     */
    restrict_public_buckets?: boolean;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    scheme?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    security_groups?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    service_name?: string;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    storage_account_name?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    tags?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    target_group_arn?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    target_health_descriptions?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    task_arn?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    task_definition?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    task_definition_arn?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    user_groups?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    user_id?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    users?: any | null;
    /**
     * 
     * @type {string}
     * @memberof IngestersCloudResource
     */
    vpc_id?: string;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    vpc_options?: any | null;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    vpc_security_group_ids?: any | null;
    /**
     * 
     * @type {any}
     * @memberof IngestersCloudResource
     */
    vpc_security_groups?: any | null;
}

/**
 * Check if a given object implements the IngestersCloudResource interface.
 */
export function instanceOfIngestersCloudResource(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IngestersCloudResourceFromJSON(json: any): IngestersCloudResource {
    return IngestersCloudResourceFromJSONTyped(json, false);
}

export function IngestersCloudResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IngestersCloudResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'access_level': !exists(json, 'access_level') ? undefined : json['access_level'],
        'account_id': !exists(json, 'account_id') ? undefined : json['account_id'],
        'action': !exists(json, 'action') ? undefined : json['action'],
        'allow_blob_public_access': !exists(json, 'allow_blob_public_access') ? undefined : json['allow_blob_public_access'],
        'arn': !exists(json, 'arn') ? undefined : json['arn'],
        'attached_policy_arns': !exists(json, 'attached_policy_arns') ? undefined : json['attached_policy_arns'],
        'block_public_acls': !exists(json, 'block_public_acls') ? undefined : json['block_public_acls'],
        'block_public_policy': !exists(json, 'block_public_policy') ? undefined : json['block_public_policy'],
        'bucket_policy_is_public': !exists(json, 'bucket_policy_is_public') ? undefined : json['bucket_policy_is_public'],
        'cidr_ipv4': !exists(json, 'cidr_ipv4') ? undefined : json['cidr_ipv4'],
        'cloud_provider': !exists(json, 'cloud_provider') ? undefined : json['cloud_provider'],
        'cluster_arn': !exists(json, 'cluster_arn') ? undefined : json['cluster_arn'],
        'cluster_name': !exists(json, 'cluster_name') ? undefined : json['cluster_name'],
        'connectivity': !exists(json, 'connectivity') ? undefined : json['connectivity'],
        'container_definitions': !exists(json, 'container_definitions') ? undefined : json['container_definitions'],
        'containers': !exists(json, 'containers') ? undefined : json['containers'],
        'create_date': !exists(json, 'create_date') ? undefined : json['create_date'],
        'db_cluster_identifier': !exists(json, 'db_cluster_identifier') ? undefined : json['db_cluster_identifier'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'event_notification_configuration': !exists(json, 'event_notification_configuration') ? undefined : json['event_notification_configuration'],
        'group': !exists(json, 'group') ? undefined : json['group'],
        'group_id': !exists(json, 'group_id') ? undefined : json['group_id'],
        'groups': !exists(json, 'groups') ? undefined : json['groups'],
        'host_name': !exists(json, 'host_name') ? undefined : json['host_name'],
        'iam_instance_profile_arn': !exists(json, 'iam_instance_profile_arn') ? undefined : json['iam_instance_profile_arn'],
        'iam_instance_profile_id': !exists(json, 'iam_instance_profile_id') ? undefined : json['iam_instance_profile_id'],
        'iam_policy': !exists(json, 'iam_policy') ? undefined : json['iam_policy'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'ignore_public_acls': !exists(json, 'ignore_public_acls') ? undefined : json['ignore_public_acls'],
        'ingress_settings': !exists(json, 'ingress_settings') ? undefined : json['ingress_settings'],
        'inline_policies': !exists(json, 'inline_policies') ? undefined : json['inline_policies'],
        'instance_id': !exists(json, 'instance_id') ? undefined : json['instance_id'],
        'instance_profile_arns': !exists(json, 'instance_profile_arns') ? undefined : json['instance_profile_arns'],
        'instance_type': !exists(json, 'instance_type') ? undefined : json['instance_type'],
        'instances': !exists(json, 'instances') ? undefined : json['instances'],
        'ip_configuration': !exists(json, 'ip_configuration') ? undefined : json['ip_configuration'],
        'is_egress': !exists(json, 'is_egress') ? undefined : json['is_egress'],
        'last_status': !exists(json, 'last_status') ? undefined : json['last_status'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'network_configuration': !exists(json, 'network_configuration') ? undefined : json['network_configuration'],
        'network_interfaces': !exists(json, 'network_interfaces') ? undefined : json['network_interfaces'],
        'network_mode': !exists(json, 'network_mode') ? undefined : json['network_mode'],
        'organization_id': !exists(json, 'organization_id') ? undefined : json['organization_id'],
        'organization_master_account_arn': !exists(json, 'organization_master_account_arn') ? undefined : json['organization_master_account_arn'],
        'organization_master_account_email': !exists(json, 'organization_master_account_email') ? undefined : json['organization_master_account_email'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'policy': !exists(json, 'policy') ? undefined : json['policy'],
        'policy_std': !exists(json, 'policy_std') ? undefined : json['policy_std'],
        'private_dns_name': !exists(json, 'private_dns_name') ? undefined : json['private_dns_name'],
        'private_ip_address': !exists(json, 'private_ip_address') ? undefined : json['private_ip_address'],
        'privilege': !exists(json, 'privilege') ? undefined : json['privilege'],
        'public_access': !exists(json, 'public_access') ? undefined : json['public_access'],
        'public_ip_address': !exists(json, 'public_ip_address') ? undefined : json['public_ip_address'],
        'public_ips': !exists(json, 'public_ips') ? undefined : json['public_ips'],
        'public_network_access': !exists(json, 'public_network_access') ? undefined : json['public_network_access'],
        'region': !exists(json, 'region') ? undefined : json['region'],
        'resource_group': !exists(json, 'resource_group') ? undefined : json['resource_group'],
        'resource_id': !exists(json, 'resource_id') ? undefined : json['resource_id'],
        'resource_vpc_config': !exists(json, 'resource_vpc_config') ? undefined : json['resource_vpc_config'],
        'resources_vpc_config': !exists(json, 'resources_vpc_config') ? undefined : json['resources_vpc_config'],
        'restrict_public_buckets': !exists(json, 'restrict_public_buckets') ? undefined : json['restrict_public_buckets'],
        'scheme': !exists(json, 'scheme') ? undefined : json['scheme'],
        'security_groups': !exists(json, 'security_groups') ? undefined : json['security_groups'],
        'service_name': !exists(json, 'service_name') ? undefined : json['service_name'],
        'storage_account_name': !exists(json, 'storage_account_name') ? undefined : json['storage_account_name'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'target_group_arn': !exists(json, 'target_group_arn') ? undefined : json['target_group_arn'],
        'target_health_descriptions': !exists(json, 'target_health_descriptions') ? undefined : json['target_health_descriptions'],
        'task_arn': !exists(json, 'task_arn') ? undefined : json['task_arn'],
        'task_definition': !exists(json, 'task_definition') ? undefined : json['task_definition'],
        'task_definition_arn': !exists(json, 'task_definition_arn') ? undefined : json['task_definition_arn'],
        'user_groups': !exists(json, 'user-groups') ? undefined : json['user-groups'],
        'user_id': !exists(json, 'user_id') ? undefined : json['user_id'],
        'users': !exists(json, 'users') ? undefined : json['users'],
        'vpc_id': !exists(json, 'vpc_id') ? undefined : json['vpc_id'],
        'vpc_options': !exists(json, 'vpc_options') ? undefined : json['vpc_options'],
        'vpc_security_group_ids': !exists(json, 'vpc_security_group_ids') ? undefined : json['vpc_security_group_ids'],
        'vpc_security_groups': !exists(json, 'vpc_security_groups') ? undefined : json['vpc_security_groups'],
    };
}

export function IngestersCloudResourceToJSON(value?: IngestersCloudResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_level': value.access_level,
        'account_id': value.account_id,
        'action': value.action,
        'allow_blob_public_access': value.allow_blob_public_access,
        'arn': value.arn,
        'attached_policy_arns': value.attached_policy_arns,
        'block_public_acls': value.block_public_acls,
        'block_public_policy': value.block_public_policy,
        'bucket_policy_is_public': value.bucket_policy_is_public,
        'cidr_ipv4': value.cidr_ipv4,
        'cloud_provider': value.cloud_provider,
        'cluster_arn': value.cluster_arn,
        'cluster_name': value.cluster_name,
        'connectivity': value.connectivity,
        'container_definitions': value.container_definitions,
        'containers': value.containers,
        'create_date': value.create_date,
        'db_cluster_identifier': value.db_cluster_identifier,
        'description': value.description,
        'event_notification_configuration': value.event_notification_configuration,
        'group': value.group,
        'group_id': value.group_id,
        'groups': value.groups,
        'host_name': value.host_name,
        'iam_instance_profile_arn': value.iam_instance_profile_arn,
        'iam_instance_profile_id': value.iam_instance_profile_id,
        'iam_policy': value.iam_policy,
        'id': value.id,
        'ignore_public_acls': value.ignore_public_acls,
        'ingress_settings': value.ingress_settings,
        'inline_policies': value.inline_policies,
        'instance_id': value.instance_id,
        'instance_profile_arns': value.instance_profile_arns,
        'instance_type': value.instance_type,
        'instances': value.instances,
        'ip_configuration': value.ip_configuration,
        'is_egress': value.is_egress,
        'last_status': value.last_status,
        'name': value.name,
        'network_configuration': value.network_configuration,
        'network_interfaces': value.network_interfaces,
        'network_mode': value.network_mode,
        'organization_id': value.organization_id,
        'organization_master_account_arn': value.organization_master_account_arn,
        'organization_master_account_email': value.organization_master_account_email,
        'path': value.path,
        'policy': value.policy,
        'policy_std': value.policy_std,
        'private_dns_name': value.private_dns_name,
        'private_ip_address': value.private_ip_address,
        'privilege': value.privilege,
        'public_access': value.public_access,
        'public_ip_address': value.public_ip_address,
        'public_ips': value.public_ips,
        'public_network_access': value.public_network_access,
        'region': value.region,
        'resource_group': value.resource_group,
        'resource_id': value.resource_id,
        'resource_vpc_config': value.resource_vpc_config,
        'resources_vpc_config': value.resources_vpc_config,
        'restrict_public_buckets': value.restrict_public_buckets,
        'scheme': value.scheme,
        'security_groups': value.security_groups,
        'service_name': value.service_name,
        'storage_account_name': value.storage_account_name,
        'tags': value.tags,
        'target_group_arn': value.target_group_arn,
        'target_health_descriptions': value.target_health_descriptions,
        'task_arn': value.task_arn,
        'task_definition': value.task_definition,
        'task_definition_arn': value.task_definition_arn,
        'user-groups': value.user_groups,
        'user_id': value.user_id,
        'users': value.users,
        'vpc_id': value.vpc_id,
        'vpc_options': value.vpc_options,
        'vpc_security_group_ids': value.vpc_security_group_ids,
        'vpc_security_groups': value.vpc_security_groups,
    };
}

