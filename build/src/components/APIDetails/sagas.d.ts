import { CreateAPIAction, GetAPIAction, UpdateAPIDetailsAction, DeleteAPIAction, AddAPIVersionAction } from './types';
export declare function createAPISaga(action: CreateAPIAction): unknown;
export declare function updateAPISaga(action: UpdateAPIDetailsAction): unknown;
export declare function getAPISaga(action: GetAPIAction): unknown;
export declare function deleteAPISaga(action: DeleteAPIAction): unknown;
export declare function createNewAPIVersionSaga(action: AddAPIVersionAction): unknown;
declare function rootSaga(): unknown;
export default rootSaga;
