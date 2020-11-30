import { AuthToken, eBayConfig } from '../types/apiTypes';
import { ILimitedRequest } from '../utils/request';
export default class AuthNAuth {
    static readonly SIGNIN_ENDPOINT: {
        sandbox: string;
        production: string;
    };
    static readonly API_ENDPOINT: {
        production: string;
        sandbox: string;
    };
    static generateAuthUrl(sandbox: boolean, ruName: string, sessionId: string, prompt?: boolean): string;
    readonly eBayConfig: eBayConfig;
    readonly req: ILimitedRequest;
    private authToken?;
    constructor(config: eBayConfig, req?: ILimitedRequest);
    /**
     * Generates URL for consent page landing.
     *
     * @param ruName RuName
     */
    getSessionIdAndAuthUrl(ruName?: string): Promise<{
        sessionId: any;
        url: string;
    }>;
    fetchAuthToken(sessionId: string): Promise<any>;
    setAuthToken(authToken: AuthToken | string): void;
    getAuthToken(): AuthToken | undefined;
    get eBayAuthToken(): string | null;
    getRequestConfig(callname: string): {
        xmlns: string;
        endpoint: string;
        headers: {
            'X-EBAY-API-CALL-NAME': string;
            'X-EBAY-API-CERT-NAME': string;
            'X-EBAY-API-APP-NAME': string;
            'X-EBAY-API-DEV-NAME': string | undefined;
            'X-EBAY-API-SITEID': number;
            'X-EBAY-API-COMPATIBILITY-LEVEL': number;
        };
    };
}
