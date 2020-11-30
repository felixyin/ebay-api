/**
 * Error object for ease of capturing if some service depends on .toJSON() method to log something
 *
 * @ignore
 */
declare abstract class EBayError extends Error {
    meta: any;
    /**
     * returns a JSON representation of the Error
     *
     * @return     {Object}  json representation of the Error
     */
    toJSON(): {
        message: string;
        stack: string | undefined;
        type: string;
        meta: any;
    };
}
/**
 * thrown when Request.prototype.run() is called without an oAuth2
 *
 * @class      No_Auth_Token (name)
 */
export declare class NoAuthTokenError extends EBayError {
    constructor(msg?: string);
}
/**
 * thrown when Request.prototype.run() is called without having defined an eBay API call
 */
export declare class NoCallError extends EBayError {
    constructor(msg?: string);
}
/**
 * thrown when attempting to load environment variables that don't exist
 */
export declare class EnvError extends EBayError {
    constructor(key: any);
}
/**
 * Thrown when an Error occurs on eBay's side.
 */
export declare class EbayApiError extends EBayError {
    constructor(err: any, name?: string);
}
export declare class EBayAccessDenied extends EBayError {
    constructor(err: any);
}
export declare class EBayNotFound extends EBayError {
    constructor(err: any);
}
export declare class EBayUnauthorizedAfterRefresh extends EBayError {
    constructor(err: any);
}
export declare class EBayIAFTokenExpired extends EbayApiError {
    static code: number;
    constructor(err: any);
}
export declare class EBayTokenRequired extends EbayApiError {
    static code: number;
    constructor(err: any);
}
export declare class EBayInvalidScope extends EBayError {
    constructor(err: any);
}
export declare const getEBayError: (e: any) => any;
export {};
