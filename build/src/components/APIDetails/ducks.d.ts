import { Reducer, AnyAction } from 'redux';
import { APIDetailsData, APIDetailsStore, CreateAPIAction, CreateAPIActionSuccess, DeleteAPIAction, GetAPIAction, GetAPISuccessAction, GetAPIErrorAction, UpdateAPIDetailsAction, UpdateAPIDetailsSuccessAction, NewAPIVersion, APIVersion, AddAPIVersionAction, AddAPIVersionSuccessAction, AddAPIVersionErrorAction } from './types';
/** Reducer */
declare const reducer: Reducer<APIDetailsStore, AnyAction>;
/** Action builders */
export declare function addAPIAction(payload: unknown): CreateAPIAction;
export declare function addAPISuccessAction(payload: APIDetailsData): CreateAPIActionSuccess;
export declare function getAPIAction(payload: string): GetAPIAction;
export declare function getAPISuccessAction(payload: APIDetailsData): GetAPISuccessAction;
export declare function getAPIErrorAction(error: unknown): GetAPIErrorAction;
export declare function deleteAPIAction(payload: string): DeleteAPIAction;
export declare function updateAPIDetailsAction(payload: unknown): UpdateAPIDetailsAction;
export declare function updateAPIDetailsSuccessAction(payload: APIDetailsData): UpdateAPIDetailsSuccessAction;
export declare function addAPIVersionAction(payload: NewAPIVersion): AddAPIVersionAction;
export declare function addAPIVersionSuccessAction(payload: APIVersion): AddAPIVersionSuccessAction;
export declare function addAPIVersionErrorAction(error: unknown): AddAPIVersionErrorAction;
export default reducer;
