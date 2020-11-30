import { eBayConfig } from '../types/apiTypes';
import { ILimitedRequest } from '../utils/request';
import AuthNAuth from './authNAuth';
import OAuth2 from './оAuth2';
/**
 * Container with Auth'N'Auth and OAuth2.
 */
export default class Auth {
    readonly eBayConfig: eBayConfig;
    readonly req: ILimitedRequest;
    readonly authNAuth: AuthNAuth;
    readonly oAuth2: OAuth2;
    constructor(config: eBayConfig, req?: ILimitedRequest);
    getHeaderAuthorization(useIaf: boolean): Promise<string>;
}
