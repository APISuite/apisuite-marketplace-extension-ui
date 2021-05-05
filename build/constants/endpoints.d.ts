/** Endpoints constants */
export declare const IS_CLOUD: boolean;
/**
 * For when running in the cloud environment.
 * Given the current Portal hostname, get the corresponding domain for another
 * service running in a given subdomain prefix.
 * Ex: ${client}.cloud.apisuite.io -> ${client}-${subdomainSuffx}.cloud.apisuite.io
 *
 * @param subdomainSuffix
 */
export declare function getCloudUrlForSubdomainSuffix(subdomainSuffix: string): string;
export declare const API_URL: string;
export declare const INFORM_URL: string;
