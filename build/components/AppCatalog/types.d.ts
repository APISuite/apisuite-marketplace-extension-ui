export declare type AppCatalogProps = {
    appsToDisplay: AppDetails[];
    catalogMode?: 'marketplace' | 'publisher';
};
export declare type AppDetails = {
    summary: string;
    id: number;
    labels: string[];
    logo: string;
    name: string;
    publisher: string;
};
