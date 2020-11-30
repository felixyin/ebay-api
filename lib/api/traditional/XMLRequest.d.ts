import { ILimitedRequest } from '../../utils/request';
import { Fields } from './fields';
export declare type Options = {
    raw?: boolean;
    cleanup?: boolean;
    parseOptions?: object;
    useIaf?: boolean;
};
declare type Headers = {
    [key: string]: string | number | undefined;
};
export declare type Config = {
    headers: Headers;
    endpoint: string;
    xmlns: string;
    eBayAuthToken?: string | null;
};
export declare const defaultOptions: Required<Options>;
/**
 * XML request for making eBay API call.
 */
export default class XMLRequest {
    private readonly callname;
    private readonly fields;
    private readonly config;
    private readonly req;
    private readonly defaultHeaders;
    /**
     * Creates the new Request object
     *
     * @private
     * @param      {string}  callname the callname
     * @param      {Object}  fields the fields
     * @param      {Object} req the request
     * @param      {Config}  config
     */
    constructor(callname: string, fields: Fields, config: Config, req?: ILimitedRequest);
    /**
     * returns the expected name of XML node of a Request
     *
     * @private
     * @return     {String}  { description_of_the_return_value }
     */
    private get responseWrapper();
    /**
     * returns the XML structure for the SOAP auth
     *
     * @private
     * @return     {Object}  the SOAP
     */
    private get credentials();
    /**
     * returns the XML document for the request
     *
     * @private
     * @param      {Fields}  fields  the fields
     * @return     {String}           The XML string of the Request
     */
    toXML(fields: Fields): string;
    /**
     * runs the HTTP Post to eBay
     *
     * @private
     * @param      {Options}   options  The options
     * @return     {Promise}           resolves to the response
     *
     */
    fetch(options?: Options): Promise<any>;
    private handleEBayJsonError;
    private handleEBayResponseError;
}
export {};
