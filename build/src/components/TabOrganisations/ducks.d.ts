import { Reducer, AnyAction } from 'redux';
import { OrganisationsStore, OrganisationResponse, GetOrganisationsAction, GetOrganisationsSuccessAction, GetOrganisationsErrorAction } from './types';
/** Reducer */
declare const reducer: Reducer<OrganisationsStore, AnyAction>;
/** Action builders */
export declare const getOrganisations: () => GetOrganisationsAction;
export declare const getOrganisationsSuccess: (organisations: OrganisationResponse[]) => GetOrganisationsSuccessAction;
export declare const getOrganisationsError: () => GetOrganisationsErrorAction;
export default reducer;
