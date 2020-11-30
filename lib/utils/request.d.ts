import { AxiosRequestConfig } from 'axios';
import { Interceptors, RequestConfig } from '../types/apiTypes';
export interface ILimitedRequest {
    get<R = any, C = any>(url: string, config?: C): Promise<R>;
    delete<R = any, C = any>(url: string, config?: C): Promise<R>;
    post<R = any, C = any>(url: string, data?: any, config?: C): Promise<R>;
    postForm<R = any, C = any>(url: string, data?: any, config?: C): Promise<R>;
    put<R = any, C = any>(url: string, data?: any, config?: C): Promise<R>;
}
export declare class LimitedAxiosRequest implements ILimitedRequest {
    private req;
    constructor(interceptors?: Interceptors, maxRequests?: number);
    get<R = any>(url: string, config?: AxiosRequestConfig): Promise<R>;
    post<R = any>(url: string, payload?: any, config?: AxiosRequestConfig): Promise<R>;
    delete<R = any>(url: string, config?: AxiosRequestConfig): Promise<R>;
    put<R = any>(url: string, payload?: any, config?: AxiosRequestConfig): Promise<R>;
    postForm<R = any>(url: string, payload?: any, config?: AxiosRequestConfig): Promise<R>;
}
export declare const createRequest: ({ interceptors, maxRequests }?: RequestConfig) => ILimitedRequest;
