import { AppDetails } from 'pages/Marketplace/types';
export interface AppDetailsProps {
    getAppDetailsAction: (appID: string) => void;
    retrievedSelectedAppDetails: boolean;
    selectedAppDetails: AppDetails;
}
