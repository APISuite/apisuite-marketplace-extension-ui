import { AppDetails, Filters, UserProfile, View } from '../Marketplace/types';
export interface AppDetailsProps {
    allSubbedMarketplaceApps: AppDetails[];
    filteredMarketplaceApps: AppDetails[];
    getAllSubbedMarketplaceAppsAction: (userID: number) => void;
    getAppDetailsAction: (appID: string) => void;
    getFilteredMarketplaceAppsAction: (filters: Filters, view: View) => void;
    retrievedPublisherApps: boolean;
    retrievedSelectedAppDetails: boolean;
    selectedAppDetails: AppDetails;
    subscribeToMarketplaceAppAction: (userID: number, appID: number) => void;
    unsubscribeToMarketplaceAppAction: (userID: number, appID: number) => void;
    userProfile: UserProfile;
}
