import Auth from '../../auth/index';
import { ILimitedRequest } from '../../utils/request';
export default abstract class Api {
    readonly auth: Auth;
    readonly req: ILimitedRequest;
    constructor(auth: Auth, req?: ILimitedRequest);
    /**
     * Control to use IAF or not.
     */
    useIaf(): boolean;
    enrichConfig(config: any): Promise<any>;
    abstract get basePath(): string;
    get serverUrl(): string;
    get apiVersionPath(): string;
    get baseUrl(): string;
    get(url: string, config?: any): Promise<any>;
    delete(url: string, config?: any): Promise<any>;
    post(url: string, data?: any, config?: any): Promise<any>;
    put(url: string, data?: any, config?: any): Promise<any>;
    private doRequest;
    private getArgs;
    private handleEBayError;
}
