import { Reducer, AnyAction } from 'redux';
import { DeleteInstanceAction, SettingsData, SettingsStore, UpdateSettingsAction, UpdateSettingsSuccessAction } from './types';
/** Reducer */
declare const reducer: Reducer<SettingsStore, AnyAction>;
/** Action builders */
export declare function updateSettingsAction(payload: unknown): UpdateSettingsAction;
export declare function updateSettingsSuccessAction(payload: SettingsData): UpdateSettingsSuccessAction;
export declare function deleteInstanceAction(): DeleteInstanceAction;
export default reducer;
