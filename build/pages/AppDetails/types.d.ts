import { AppDetails, UserProfile } from '../Marketplace/types';
export interface AppDetailsProps {
    allSubbedMarketplaceApps: AppDetails[];
    getAllSubbedMarketplaceAppsAction: (userID: number) => void;
    getAppDetailsAction: (appID: string) => void;
    retrievedSelectedAppDetails: boolean;
    selectedAppDetails: AppDetails;
    subscribeToMarketplaceAppAction: (userID: number, appID: number) => void;
    unsubscribeToMarketplaceAppAction: (userID: number, appID: number) => void;
    userProfile: UserProfile;
}
