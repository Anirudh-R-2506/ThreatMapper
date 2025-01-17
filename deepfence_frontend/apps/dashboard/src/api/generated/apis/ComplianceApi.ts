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


import * as runtime from '../runtime';
import type {
  ApiDocsBadRequestResponse,
  ApiDocsFailureResponse,
  ModelComplianceScanResult,
  ModelComplianceScanResultsGroupResp,
  ModelComplianceScanTriggerReq,
  ModelComplinaceScanResultsGroupReq,
  ModelScanListReq,
  ModelScanListResp,
  ModelScanResultsReq,
  ModelScanStatusReq,
  ModelScanStatusResp,
  ModelScanTriggerResp,
  ModelStopScanRequest,
  SearchSearchCountResp,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    ModelComplianceScanResultFromJSON,
    ModelComplianceScanResultToJSON,
    ModelComplianceScanResultsGroupRespFromJSON,
    ModelComplianceScanResultsGroupRespToJSON,
    ModelComplianceScanTriggerReqFromJSON,
    ModelComplianceScanTriggerReqToJSON,
    ModelComplinaceScanResultsGroupReqFromJSON,
    ModelComplinaceScanResultsGroupReqToJSON,
    ModelScanListReqFromJSON,
    ModelScanListReqToJSON,
    ModelScanListRespFromJSON,
    ModelScanListRespToJSON,
    ModelScanResultsReqFromJSON,
    ModelScanResultsReqToJSON,
    ModelScanStatusReqFromJSON,
    ModelScanStatusReqToJSON,
    ModelScanStatusRespFromJSON,
    ModelScanStatusRespToJSON,
    ModelScanTriggerRespFromJSON,
    ModelScanTriggerRespToJSON,
    ModelStopScanRequestFromJSON,
    ModelStopScanRequestToJSON,
    SearchSearchCountRespFromJSON,
    SearchSearchCountRespToJSON,
} from '../models';

export interface CountResultsComplianceScanRequest {
    modelScanResultsReq?: ModelScanResultsReq;
}

export interface GroupResultsCloudComplianceRequest {
    modelComplinaceScanResultsGroupReq?: ModelComplinaceScanResultsGroupReq;
}

export interface GroupResultsComplianceRequest {
    modelComplinaceScanResultsGroupReq?: ModelComplinaceScanResultsGroupReq;
}

export interface ListComplianceScanRequest {
    modelScanListReq?: ModelScanListReq;
}

export interface ResultsComplianceScanRequest {
    modelScanResultsReq?: ModelScanResultsReq;
}

export interface StartComplianceScanRequest {
    modelComplianceScanTriggerReq?: ModelComplianceScanTriggerReq;
}

export interface StatusComplianceScanRequest {
    modelScanStatusReq?: ModelScanStatusReq;
}

export interface StopComplianceScanRequest {
    modelStopScanRequest?: ModelStopScanRequest;
}

/**
 * ComplianceApi - interface
 * 
 * @export
 * @interface ComplianceApiInterface
 */
export interface ComplianceApiInterface {
    /**
     * Get Compliance Scans results on agent or registry
     * @summary Get Compliance Scans Results
     * @param {ModelScanResultsReq} [modelScanResultsReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    countResultsComplianceScanRaw(requestParameters: CountResultsComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSearchCountResp>>;

    /**
     * Get Compliance Scans results on agent or registry
     * Get Compliance Scans Results
     */
    countResultsComplianceScan(requestParameters: CountResultsComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSearchCountResp>;

    /**
     * Count Cloud Compliance Results grouped by Control ID
     * @summary Count Cloud Compliance Results by Control ID
     * @param {ModelComplinaceScanResultsGroupReq} [modelComplinaceScanResultsGroupReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    groupResultsCloudComplianceRaw(requestParameters: GroupResultsCloudComplianceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelComplianceScanResultsGroupResp>>;

    /**
     * Count Cloud Compliance Results grouped by Control ID
     * Count Cloud Compliance Results by Control ID
     */
    groupResultsCloudCompliance(requestParameters: GroupResultsCloudComplianceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelComplianceScanResultsGroupResp>;

    /**
     * Count Compliance Results grouped by Control ID
     * @summary Count Compliance Results by Control ID
     * @param {ModelComplinaceScanResultsGroupReq} [modelComplinaceScanResultsGroupReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    groupResultsComplianceRaw(requestParameters: GroupResultsComplianceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelComplianceScanResultsGroupResp>>;

    /**
     * Count Compliance Results grouped by Control ID
     * Count Compliance Results by Control ID
     */
    groupResultsCompliance(requestParameters: GroupResultsComplianceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelComplianceScanResultsGroupResp>;

    /**
     * Get Compliance Scans list on agent or registry
     * @summary Get Compliance Scans List
     * @param {ModelScanListReq} [modelScanListReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    listComplianceScanRaw(requestParameters: ListComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanListResp>>;

    /**
     * Get Compliance Scans list on agent or registry
     * Get Compliance Scans List
     */
    listComplianceScan(requestParameters: ListComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanListResp>;

    /**
     * Get Compliance Scans results on agent or registry
     * @summary Get Compliance Scans Results
     * @param {ModelScanResultsReq} [modelScanResultsReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    resultsComplianceScanRaw(requestParameters: ResultsComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelComplianceScanResult>>;

    /**
     * Get Compliance Scans results on agent or registry
     * Get Compliance Scans Results
     */
    resultsComplianceScan(requestParameters: ResultsComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelComplianceScanResult>;

    /**
     * Start Compliance Scan on agent or registry
     * @summary Start Compliance Scan
     * @param {ModelComplianceScanTriggerReq} [modelComplianceScanTriggerReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    startComplianceScanRaw(requestParameters: StartComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanTriggerResp>>;

    /**
     * Start Compliance Scan on agent or registry
     * Start Compliance Scan
     */
    startComplianceScan(requestParameters: StartComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanTriggerResp>;

    /**
     * Get Compliance Scan Status on agent or registry
     * @summary Get Compliance Scan Status
     * @param {ModelScanStatusReq} [modelScanStatusReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    statusComplianceScanRaw(requestParameters: StatusComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanStatusResp>>;

    /**
     * Get Compliance Scan Status on agent or registry
     * Get Compliance Scan Status
     */
    statusComplianceScan(requestParameters: StatusComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanStatusResp>;

    /**
     * Stop Compliance Scan on agent or registry
     * @summary Stop Compliance Scan
     * @param {ModelStopScanRequest} [modelStopScanRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ComplianceApiInterface
     */
    stopComplianceScanRaw(requestParameters: StopComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Stop Compliance Scan on agent or registry
     * Stop Compliance Scan
     */
    stopComplianceScan(requestParameters: StopComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class ComplianceApi extends runtime.BaseAPI implements ComplianceApiInterface {

    /**
     * Get Compliance Scans results on agent or registry
     * Get Compliance Scans Results
     */
    async countResultsComplianceScanRaw(requestParameters: CountResultsComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SearchSearchCountResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/results/count/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanResultsReqToJSON(requestParameters.modelScanResultsReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchSearchCountRespFromJSON(jsonValue));
    }

    /**
     * Get Compliance Scans results on agent or registry
     * Get Compliance Scans Results
     */
    async countResultsComplianceScan(requestParameters: CountResultsComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SearchSearchCountResp> {
        const response = await this.countResultsComplianceScanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Count Cloud Compliance Results grouped by Control ID
     * Count Cloud Compliance Results by Control ID
     */
    async groupResultsCloudComplianceRaw(requestParameters: GroupResultsCloudComplianceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelComplianceScanResultsGroupResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/results/count/group/cloud-compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelComplinaceScanResultsGroupReqToJSON(requestParameters.modelComplinaceScanResultsGroupReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelComplianceScanResultsGroupRespFromJSON(jsonValue));
    }

    /**
     * Count Cloud Compliance Results grouped by Control ID
     * Count Cloud Compliance Results by Control ID
     */
    async groupResultsCloudCompliance(requestParameters: GroupResultsCloudComplianceRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelComplianceScanResultsGroupResp> {
        const response = await this.groupResultsCloudComplianceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Count Compliance Results grouped by Control ID
     * Count Compliance Results by Control ID
     */
    async groupResultsComplianceRaw(requestParameters: GroupResultsComplianceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelComplianceScanResultsGroupResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/results/count/group/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelComplinaceScanResultsGroupReqToJSON(requestParameters.modelComplinaceScanResultsGroupReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelComplianceScanResultsGroupRespFromJSON(jsonValue));
    }

    /**
     * Count Compliance Results grouped by Control ID
     * Count Compliance Results by Control ID
     */
    async groupResultsCompliance(requestParameters: GroupResultsComplianceRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelComplianceScanResultsGroupResp> {
        const response = await this.groupResultsComplianceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Compliance Scans list on agent or registry
     * Get Compliance Scans List
     */
    async listComplianceScanRaw(requestParameters: ListComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanListResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/list/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanListReqToJSON(requestParameters.modelScanListReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelScanListRespFromJSON(jsonValue));
    }

    /**
     * Get Compliance Scans list on agent or registry
     * Get Compliance Scans List
     */
    async listComplianceScan(requestParameters: ListComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanListResp> {
        const response = await this.listComplianceScanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Compliance Scans results on agent or registry
     * Get Compliance Scans Results
     */
    async resultsComplianceScanRaw(requestParameters: ResultsComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelComplianceScanResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/results/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanResultsReqToJSON(requestParameters.modelScanResultsReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelComplianceScanResultFromJSON(jsonValue));
    }

    /**
     * Get Compliance Scans results on agent or registry
     * Get Compliance Scans Results
     */
    async resultsComplianceScan(requestParameters: ResultsComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelComplianceScanResult> {
        const response = await this.resultsComplianceScanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Start Compliance Scan on agent or registry
     * Start Compliance Scan
     */
    async startComplianceScanRaw(requestParameters: StartComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanTriggerResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/start/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelComplianceScanTriggerReqToJSON(requestParameters.modelComplianceScanTriggerReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelScanTriggerRespFromJSON(jsonValue));
    }

    /**
     * Start Compliance Scan on agent or registry
     * Start Compliance Scan
     */
    async startComplianceScan(requestParameters: StartComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanTriggerResp> {
        const response = await this.startComplianceScanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Compliance Scan Status on agent or registry
     * Get Compliance Scan Status
     */
    async statusComplianceScanRaw(requestParameters: StatusComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelScanStatusResp>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/status/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelScanStatusReqToJSON(requestParameters.modelScanStatusReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelScanStatusRespFromJSON(jsonValue));
    }

    /**
     * Get Compliance Scan Status on agent or registry
     * Get Compliance Scan Status
     */
    async statusComplianceScan(requestParameters: StatusComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelScanStatusResp> {
        const response = await this.statusComplianceScanRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Stop Compliance Scan on agent or registry
     * Stop Compliance Scan
     */
    async stopComplianceScanRaw(requestParameters: StopComplianceScanRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/scan/stop/compliance`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelStopScanRequestToJSON(requestParameters.modelStopScanRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Stop Compliance Scan on agent or registry
     * Stop Compliance Scan
     */
    async stopComplianceScan(requestParameters: StopComplianceScanRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.stopComplianceScanRaw(requestParameters, initOverrides);
    }

}
