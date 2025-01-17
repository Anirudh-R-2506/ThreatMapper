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
import type { DiagnosisDiagnosticLogsLink } from './DiagnosisDiagnosticLogsLink';
import {
    DiagnosisDiagnosticLogsLinkFromJSON,
    DiagnosisDiagnosticLogsLinkFromJSONTyped,
    DiagnosisDiagnosticLogsLinkToJSON,
} from './DiagnosisDiagnosticLogsLink';

/**
 * 
 * @export
 * @interface DiagnosisGetDiagnosticLogsResponse
 */
export interface DiagnosisGetDiagnosticLogsResponse {
    /**
     * 
     * @type {Array<DiagnosisDiagnosticLogsLink>}
     * @memberof DiagnosisGetDiagnosticLogsResponse
     */
    agent_logs?: Array<DiagnosisDiagnosticLogsLink> | null;
    /**
     * 
     * @type {Array<DiagnosisDiagnosticLogsLink>}
     * @memberof DiagnosisGetDiagnosticLogsResponse
     */
    console_logs?: Array<DiagnosisDiagnosticLogsLink> | null;
}

/**
 * Check if a given object implements the DiagnosisGetDiagnosticLogsResponse interface.
 */
export function instanceOfDiagnosisGetDiagnosticLogsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DiagnosisGetDiagnosticLogsResponseFromJSON(json: any): DiagnosisGetDiagnosticLogsResponse {
    return DiagnosisGetDiagnosticLogsResponseFromJSONTyped(json, false);
}

export function DiagnosisGetDiagnosticLogsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiagnosisGetDiagnosticLogsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agent_logs': !exists(json, 'agent_logs') ? undefined : (json['agent_logs'] === null ? null : (json['agent_logs'] as Array<any>).map(DiagnosisDiagnosticLogsLinkFromJSON)),
        'console_logs': !exists(json, 'console_logs') ? undefined : (json['console_logs'] === null ? null : (json['console_logs'] as Array<any>).map(DiagnosisDiagnosticLogsLinkFromJSON)),
    };
}

export function DiagnosisGetDiagnosticLogsResponseToJSON(value?: DiagnosisGetDiagnosticLogsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'agent_logs': value.agent_logs === undefined ? undefined : (value.agent_logs === null ? null : (value.agent_logs as Array<any>).map(DiagnosisDiagnosticLogsLinkToJSON)),
        'console_logs': value.console_logs === undefined ? undefined : (value.console_logs === null ? null : (value.console_logs as Array<any>).map(DiagnosisDiagnosticLogsLinkToJSON)),
    };
}

