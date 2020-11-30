import Auth from '../../auth';
import { ILimitedRequest } from '../../utils/request';
import { ClientAlerts, Finding, Shopping, Trading } from '../../types/traditonalTypes';
/**
 * Traditional eBay API.
 */
export default class Traditional {
    readonly auth: Auth;
    readonly req: ILimitedRequest;
    constructor(auth: Auth, req?: ILimitedRequest);
    createTradingApi(): Trading;
    createShoppingApi(): Shopping;
    createFindingApi(): Finding;
    createClientAlertsApi(): ClientAlerts;
    createBusinessPolicyManagementApi(): {
        headers: (_: string, accessToken?: string | undefined) => {};
    };
    private createXMLRequest;
    private getConfig;
    private createTraditionalXMLApi;
}
