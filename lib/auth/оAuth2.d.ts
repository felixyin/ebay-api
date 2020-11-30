import { eBayConfig, Scope } from '../types/apiTypes';
import { ILimitedRequest } from '../utils/request';
export declare type Token = {
    access_token: string;
    expires_in: number;
    token_type: string;
};
export declare type UserAccessToken = Token & {
    refresh_token: string;
    refresh_token_expires_in: number;
};
export default class OAuth2 {
    static readonly IDENTITY_ENDPOINT: any;
    static readonly AUTHORIZE_ENDPOINT: any;
    static readonly defaultScopes: Scope;
    static generateAuthUrl(sandbox: boolean, appId: string, ruName: string, scope: string[], state?: string): string;
    readonly eBayConfig: eBayConfig;
    readonly req: ILimitedRequest;
    private scope;
    private _clientToken?;
    private _userAccessToken?;
    private readonly endpoint;
    private readonly emitter;
    constructor(config: eBayConfig, req?: ILimitedRequest);
    on(name: string, callBack: (arg: any) => any): () => void;
    /**
     * Return the access token.
     */
    getAccessToken(): Promise<string>;
    get accessToken(): string | null;
    getClientAccessToken(): Promise<string>;
    setClientToken(clientToken?: Token): void;
    setScope(scope: Scope): void;
    getScope(): string[];
    refreshClientToken(): Promise<Token>;
    /**
     * Generates URL for consent page landing.
     *
     * @param ruName RuName
     * @param scope the scopes
     * @param state state parameter returned in the redirect URL
     */
    generateAuthUrl(ruName?: string, scope?: string[], state?: string): string;
    /**
     * Gets the access token for the given code.
     *
     * @param code the code
     * @param ruName the redirectUri
     */
    getToken(code: string, ruName?: string | undefined): Promise<any>;
    getCredentials(): UserAccessToken | null;
    setCredentials(userAccessToken: UserAccessToken): void;
    refreshAuthToken(): Promise<Token>;
    refreshToken(): Promise<Token>;
}
