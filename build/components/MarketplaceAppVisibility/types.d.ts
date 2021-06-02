export declare type MarketplaceAppVisibilityProps = {
    formState: FormState;
    handleAppVisibility: (selectedAppVisibility: string) => void;
    handleChange: (changeEvent: any) => void;
    userRole: string;
};
export interface FormState {
    values: {
        appAvatarURL: string;
        appClientID: string;
        appClientSecret: string;
        appFullDescription: string;
        appLabels: string;
        appName: string;
        appPrivacyURL: string;
        appRedirectURI: string;
        appShortDescription: string;
        appSupportURL: string;
        appTermsURL: string;
        appVisibility: string;
        appWebsiteURL: string;
        appYouTubeURL: string;
    };
}
