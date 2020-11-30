import { MarketplaceId } from '../enums';
export declare type Scope = string[];
export declare type Interceptors = {
    request?: (value: any) => any;
    response?: (value: any) => any;
};
export declare type Keyset = {
    appId: string;
    certId: string;
    devId?: string;
};
export declare type eBayConfig = Keyset & {
    sandbox: boolean;
    siteId?: number;
    ruName?: string;
    scope?: Scope;
    authToken?: string;
    marketplaceId?: MarketplaceId;
    endUserCtx?: string;
    contentLanguage?: string;
    acceptLanguage?: string;
};
export declare type RequestConfig = {
    interceptors?: Interceptors;
    maxRequests?: number;
};
/**
 * Not eBay Config.
 */
export declare type AppConfig = eBayConfig & RequestConfig;
export declare type AuthToken = {
    eBayAuthToken: string;
    Timestamp?: string;
    HardExpirationTime?: string;
};
