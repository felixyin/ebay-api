import Auth from '../auth';
import { ILimitedRequest } from '../utils/request';
import { Buy } from './restful/buy';
import { Commerce } from './restful/commerce';
import { Developer } from './restful/developer';
import { PostOrder } from './restful/postOrder';
import { Sell } from './restful/sell';
import Traditional from './traditional';
import { ClientAlerts, Finding, Shopping, Trading } from '../types/traditonalTypes';
/**
 * Factory class to create RESTFul API or Traditional API.
 */
export default class Factory {
    readonly auth: Auth;
    readonly req: ILimitedRequest;
    private _traditional?;
    private _restful;
    constructor(auth: Auth, req?: ILimitedRequest);
    createBuyApi(): Buy;
    createCommerceApi(): Commerce;
    createDeveloperApi(): Developer;
    createPostOrderApi(): PostOrder;
    createSellApi(): Sell;
    get traditional(): Traditional;
    createTradingApi(): Trading;
    createShoppingApi(): Shopping;
    createFindingApi(): Finding;
    createClientAlertsApi(): ClientAlerts;
    private createRestfulApi;
}
