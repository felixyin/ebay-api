import { Buy } from './api/restful/buy';
import { Commerce } from './api/restful/commerce';
import { Developer } from './api/restful/developer';
import { PostOrder } from './api/restful/postOrder';
import { Sell } from './api/restful/sell';
import { ClientAlerts, Finding, Shopping, Trading } from './types/traditonalTypes';
import Auth from './auth';
import AuthNAuth from './auth/authNAuth';
import OAuth2 from './auth/оAuth2';
import { MarketplaceId, SiteId } from './enums';
import { AppConfig } from './types/apiTypes';
import { ILimitedRequest } from './utils/request';
declare class eBayApi {
    static SiteId: typeof SiteId;
    static MarketplaceId: typeof MarketplaceId;
    /**
     * Loads settings from `process.env`
     *
     * @return {eBayApi} a new eBayApi instance
     * @param {request} req request
     * @throws {EnvError}
     */
    static fromEnv(req?: ILimitedRequest): eBayApi;
    readonly auth: Auth;
    readonly authNAuth: AuthNAuth;
    readonly oAuth2: OAuth2;
    readonly appConfig: AppConfig;
    readonly req: ILimitedRequest;
    private readonly factory;
    private _buy?;
    private _commerce?;
    private _developer?;
    private _postOrder?;
    private _sell?;
    private _trading?;
    private _finding?;
    private _shopping?;
    private _clientAlerts?;
    /**
     * @param {AppConfig} config the app config
     * @param {ILimitedRequest} req the request
     */
    constructor(config: AppConfig, req?: ILimitedRequest);
    get buy(): Buy;
    get commerce(): Commerce;
    get developer(): Developer;
    get postOrder(): PostOrder;
    get sell(): Sell;
    get trading(): Trading;
    get finding(): Finding;
    get shopping(): Shopping;
    get clientAlerts(): ClientAlerts;
}
export = eBayApi;
