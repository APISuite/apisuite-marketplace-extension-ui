import { Reducer, AnyAction } from 'redux';
import { SubscriptionsStore, ApiResponse, GetApisAction, GetApisSuccessAction, GetApisErrorAction } from './types';
/** Reducer */
declare const reducer: Reducer<SubscriptionsStore, AnyAction>;
/** Action builders */
export declare const getApis: () => GetApisAction;
export declare const getApisSuccess: (apis: ApiResponse[]) => GetApisSuccessAction;
export declare const getApisError: () => GetApisErrorAction;
export default reducer;
