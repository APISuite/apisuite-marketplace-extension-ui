import { AppDetails } from '../pages/Marketplace/types';
export default function appDetailsMapping(appDetails: AppDetails): {
    description: string;
    id: number;
    labels: string[];
    logo: string;
    name: string;
    publisher: string;
    updatedAt: string;
};
