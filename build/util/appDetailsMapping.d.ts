import { AppDetails } from '../pages/Marketplace/types';
export default function appDetailsMapping(appDetails: AppDetails): {
    id: number;
    labels: string[];
    logo: string;
    name: string;
    publisher: string;
    summary: string;
    updatedAt: string;
};
