import axios, { AxiosRequestConfig } from 'axios';
export interface ErrorReason {
    /** response status */
    status: number;
    /** response status text */
    statusText: string;
    /** response message */
    message: string;
}
export declare type RequestStatus = {
    isRequesting: boolean;
    error: string;
};
export { axios };
export default function request(init: AxiosRequestConfig): Promise<any>;
export declare function requestInform(init: AxiosRequestConfig): Promise<any>;
export declare function apiRequest(init: AxiosRequestConfig): Promise<any>;
export declare function apiRequestInform(init: AxiosRequestConfig): Promise<any>;
