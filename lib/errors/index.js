"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEBayError = exports.EBayInvalidScope = exports.EBayTokenRequired = exports.EBayIAFTokenExpired = exports.EBayUnauthorizedAfterRefresh = exports.EBayNotFound = exports.EBayAccessDenied = exports.EbayApiError = exports.EnvError = exports.NoCallError = exports.NoAuthTokenError = void 0;
// tslint:disable:max-classes-per-file
/**
 * Error object for ease of capturing if some service depends on .toJSON() method to log something
 *
 * @ignore
 */
var EBayError = /** @class */ (function (_super) {
    __extends(EBayError, _super);
    function EBayError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.meta = null;
        return _this;
    }
    /**
     * returns a JSON representation of the Error
     *
     * @return     {Object}  json representation of the Error
     */
    EBayError.prototype.toJSON = function () {
        return {
            message: this.message,
            stack: this.stack,
            type: this.constructor.name,
            meta: this.meta || null
        };
    };
    return EBayError;
}(Error));
/**
 * thrown when Request.prototype.run() is called without an oAuth2
 *
 * @class      No_Auth_Token (name)
 */
var NoAuthTokenError = /** @class */ (function (_super) {
    __extends(NoAuthTokenError, _super);
    function NoAuthTokenError(msg) {
        if (msg === void 0) { msg = 'no oAuth2 present.  Please invoke `Ebay.prototype.oAuth2(<Token>)`.'; }
        return _super.call(this, msg) || this;
    }
    return NoAuthTokenError;
}(EBayError));
exports.NoAuthTokenError = NoAuthTokenError;
/**
 * thrown when Request.prototype.run() is called without having defined an eBay API call
 */
var NoCallError = /** @class */ (function (_super) {
    __extends(NoCallError, _super);
    function NoCallError(msg) {
        if (msg === void 0) { msg = 'no eBay API call defined, please invoke one.'; }
        return _super.call(this, msg) || this;
    }
    return NoCallError;
}(EBayError));
exports.NoCallError = NoCallError;
/**
 * thrown when attempting to load environment variables that don't exist
 */
var EnvError = /** @class */ (function (_super) {
    __extends(EnvError, _super);
    function EnvError(key) {
        return _super.call(this, "could not find " + key + " in process.env") || this;
    }
    return EnvError;
}(EBayError));
exports.EnvError = EnvError;
/**
 * Thrown when an Error occurs on eBay's side.
 */
var EbayApiError = /** @class */ (function (_super) {
    __extends(EbayApiError, _super);
    function EbayApiError(err, name) {
        if (name === void 0) { name = 'EbayApiError'; }
        var _this = this;
        var message = '';
        var resError = exports.getEBayError(err);
        if (resError) {
            message = resError.message;
        }
        else if (err.errorMessage) {
            message = err.errorMessage.error.message;
        }
        else {
            message = err.LongMessage || err.ShortMessage;
        }
        _this = _super.call(this, message) || this;
        _this.meta = err;
        _this.name = name;
        return _this;
    }
    return EbayApiError;
}(EBayError));
exports.EbayApiError = EbayApiError;
var EBayAccessDenied = /** @class */ (function (_super) {
    __extends(EBayAccessDenied, _super);
    function EBayAccessDenied(err) {
        var _this = _super.call(this, 'Access denied') || this;
        _this.meta = err.response.data;
        _this.name = 'EBayAccessDenied';
        return _this;
    }
    return EBayAccessDenied;
}(EBayError));
exports.EBayAccessDenied = EBayAccessDenied;
var EBayNotFound = /** @class */ (function (_super) {
    __extends(EBayNotFound, _super);
    function EBayNotFound(err) {
        var _this = _super.call(this, err.message) || this;
        _this.meta = err.response.data;
        _this.name = 'EBayEBayNotFound';
        return _this;
    }
    return EBayNotFound;
}(EBayError));
exports.EBayNotFound = EBayNotFound;
var EBayUnauthorizedAfterRefresh = /** @class */ (function (_super) {
    __extends(EBayUnauthorizedAfterRefresh, _super);
    function EBayUnauthorizedAfterRefresh(err) {
        var _this = _super.call(this, 'Unauthorized after refreshing token.') || this;
        _this.meta = err.response.data;
        _this.name = 'EBayUnauthorized';
        return _this;
    }
    return EBayUnauthorizedAfterRefresh;
}(EBayError));
exports.EBayUnauthorizedAfterRefresh = EBayUnauthorizedAfterRefresh;
var EBayIAFTokenExpired = /** @class */ (function (_super) {
    __extends(EBayIAFTokenExpired, _super);
    function EBayIAFTokenExpired(err) {
        return _super.call(this, err, 'EBayIAFTokenExpired') || this;
    }
    EBayIAFTokenExpired.code = 21917053;
    return EBayIAFTokenExpired;
}(EbayApiError));
exports.EBayIAFTokenExpired = EBayIAFTokenExpired;
var EBayTokenRequired = /** @class */ (function (_super) {
    __extends(EBayTokenRequired, _super);
    function EBayTokenRequired(err) {
        return _super.call(this, err, 'EBayTokenRequired') || this;
    }
    EBayTokenRequired.code = 930;
    return EBayTokenRequired;
}(EbayApiError));
exports.EBayTokenRequired = EBayTokenRequired;
var EBayInvalidScope = /** @class */ (function (_super) {
    __extends(EBayInvalidScope, _super);
    function EBayInvalidScope(err) {
        var _this = _super.call(this, err.response.data.error_description) || this;
        _this.meta = err.response.data;
        _this.name = 'EBayInvalidScope';
        return _this;
    }
    return EBayInvalidScope;
}(EBayError));
exports.EBayInvalidScope = EBayInvalidScope;
var getEBayError = function (e) {
    if (e.response && e.response.data) {
        var data = e.response.data;
        if (data.error) {
            return {
                message: data.error,
                description: data.error_description
            };
        }
        return data.errors && data.errors[0] ? data.errors[0] : null;
    }
    return null;
};
exports.getEBayError = getEBayError;
//# sourceMappingURL=index.js.map