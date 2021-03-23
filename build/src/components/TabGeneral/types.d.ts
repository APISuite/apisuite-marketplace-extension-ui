import { Action } from 'redux';
/** Action types */
export declare const UPDATE_SETTINGS = "Settings/UPDATE_SETTINGS";
export declare const UPDATE_SETTINGS_SUCCESS = "Settings/UPDATE_SETTINGS_SUCCESS";
export declare const DELETE_INSTANCE = "Instance/DELETE_INSTANCE";
export interface TabGeneralProps {
    settings: SettingsStore;
    updateSettings: (values: any) => UpdateSettingsAction;
    deleteInstance: () => DeleteInstanceAction;
}
export declare type SettingsStore = SettingsData;
export interface SettingsData {
    portalName: string;
    clientName: string;
    supportURL: string;
    documentationURL: string;
    socialURLs: SocialUrl[];
}
export interface SocialUrl {
    name: string;
    url: string;
}
export interface UpdateSettingsAction extends Action {
    type: typeof UPDATE_SETTINGS;
    payload: Partial<SettingsData>;
}
export interface UpdateSettingsSuccessAction extends Action {
    type: typeof UPDATE_SETTINGS_SUCCESS;
    payload: Partial<SettingsData>;
}
export declare type SettingsActions = UpdateSettingsAction | UpdateSettingsSuccessAction;
export interface DeleteInstanceAction extends Action {
    type: typeof DELETE_INSTANCE;
}
