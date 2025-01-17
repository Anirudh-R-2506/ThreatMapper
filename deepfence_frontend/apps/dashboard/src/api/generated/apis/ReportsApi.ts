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
  ModelBulkDeleteReportReq,
  ModelExportReport,
  ModelGenerateReportReq,
  ModelGenerateReportResp,
} from '../models';
import {
    ApiDocsBadRequestResponseFromJSON,
    ApiDocsBadRequestResponseToJSON,
    ApiDocsFailureResponseFromJSON,
    ApiDocsFailureResponseToJSON,
    ModelBulkDeleteReportReqFromJSON,
    ModelBulkDeleteReportReqToJSON,
    ModelExportReportFromJSON,
    ModelExportReportToJSON,
    ModelGenerateReportReqFromJSON,
    ModelGenerateReportReqToJSON,
    ModelGenerateReportRespFromJSON,
    ModelGenerateReportRespToJSON,
} from '../models';

export interface BulkDeleteReportsRequest {
    modelBulkDeleteReportReq?: ModelBulkDeleteReportReq;
}

export interface DeleteReportRequest {
    reportId: string;
}

export interface GenerateReportRequest {
    modelGenerateReportReq?: ModelGenerateReportReq;
}

export interface GetReportRequest {
    reportId: string;
}

/**
 * ReportsApi - interface
 * 
 * @export
 * @interface ReportsApiInterface
 */
export interface ReportsApiInterface {
    /**
     * Bulk Delete reports
     * @summary Bulk Delete Reports
     * @param {ModelBulkDeleteReportReq} [modelBulkDeleteReportReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApiInterface
     */
    bulkDeleteReportsRaw(requestParameters: BulkDeleteReportsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Bulk Delete reports
     * Bulk Delete Reports
     */
    bulkDeleteReports(requestParameters: BulkDeleteReportsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * delete report for given report_id
     * @summary Delete Report
     * @param {string} reportId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApiInterface
     */
    deleteReportRaw(requestParameters: DeleteReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * delete report for given report_id
     * Delete Report
     */
    deleteReport(requestParameters: DeleteReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * generate report for given type and filters
     * @summary Generate Report
     * @param {ModelGenerateReportReq} [modelGenerateReportReq] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApiInterface
     */
    generateReportRaw(requestParameters: GenerateReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelGenerateReportResp>>;

    /**
     * generate report for given type and filters
     * Generate Report
     */
    generateReport(requestParameters: GenerateReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelGenerateReportResp>;

    /**
     * get report by report_id
     * @summary Get Report
     * @param {string} reportId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApiInterface
     */
    getReportRaw(requestParameters: GetReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelExportReport>>;

    /**
     * get report by report_id
     * Get Report
     */
    getReport(requestParameters: GetReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelExportReport>;

    /**
     * List all the available reports
     * @summary List Reports
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportsApiInterface
     */
    listReportsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelExportReport>>>;

    /**
     * List all the available reports
     * List Reports
     */
    listReports(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelExportReport>>;

}

/**
 * 
 */
export class ReportsApi extends runtime.BaseAPI implements ReportsApiInterface {

    /**
     * Bulk Delete reports
     * Bulk Delete Reports
     */
    async bulkDeleteReportsRaw(requestParameters: BulkDeleteReportsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/deepfence/reports/delete`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ModelBulkDeleteReportReqToJSON(requestParameters.modelBulkDeleteReportReq),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Bulk Delete reports
     * Bulk Delete Reports
     */
    async bulkDeleteReports(requestParameters: BulkDeleteReportsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.bulkDeleteReportsRaw(requestParameters, initOverrides);
    }

    /**
     * delete report for given report_id
     * Delete Report
     */
    async deleteReportRaw(requestParameters: DeleteReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.reportId === null || requestParameters.reportId === undefined) {
            throw new runtime.RequiredError('reportId','Required parameter requestParameters.reportId was null or undefined when calling deleteReport.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/reports/{report_id}`.replace(`{${"report_id"}}`, encodeURIComponent(String(requestParameters.reportId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * delete report for given report_id
     * Delete Report
     */
    async deleteReport(requestParameters: DeleteReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteReportRaw(requestParameters, initOverrides);
    }

    /**
     * generate report for given type and filters
     * Generate Report
     */
    async generateReportRaw(requestParameters: GenerateReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelGenerateReportResp>> {
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
            path: `/deepfence/reports`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ModelGenerateReportReqToJSON(requestParameters.modelGenerateReportReq),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelGenerateReportRespFromJSON(jsonValue));
    }

    /**
     * generate report for given type and filters
     * Generate Report
     */
    async generateReport(requestParameters: GenerateReportRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelGenerateReportResp> {
        const response = await this.generateReportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * get report by report_id
     * Get Report
     */
    async getReportRaw(requestParameters: GetReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ModelExportReport>> {
        if (requestParameters.reportId === null || requestParameters.reportId === undefined) {
            throw new runtime.RequiredError('reportId','Required parameter requestParameters.reportId was null or undefined when calling getReport.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/reports/{report_id}`.replace(`{${"report_id"}}`, encodeURIComponent(String(requestParameters.reportId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ModelExportReportFromJSON(jsonValue));
    }

    /**
     * get report by report_id
     * Get Report
     */
    async getReport(requestParameters: GetReportRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ModelExportReport> {
        const response = await this.getReportRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all the available reports
     * List Reports
     */
    async listReportsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ModelExportReport>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer_token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/deepfence/reports`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ModelExportReportFromJSON));
    }

    /**
     * List all the available reports
     * List Reports
     */
    async listReports(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ModelExportReport>> {
        const response = await this.listReportsRaw(initOverrides);
        return await response.value();
    }

}
