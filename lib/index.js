"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var factory_1 = __importDefault(require("./api/factory"));
var auth_1 = __importDefault(require("./auth"));
var enums_1 = require("./enums");
var errors_1 = require("./errors");
var request_1 = require("./utils/request");
var defaultConfig = {
    sandbox: false,
    siteId: enums_1.SiteId.EBAY_DE,
    marketplaceId: enums_1.MarketplaceId.EBAY_DE
};
// tslint:disable-next-line:class-name
var eBayApi = /** @class */ (function () {
    /**
     * @param {AppConfig} config the app config
     * @param {ILimitedRequest} req the request
     */
    function eBayApi(config, req) {
        this.appConfig = __assign(__assign({}, defaultConfig), config);
        this.req = req || request_1.createRequest(this.appConfig);
        this.auth = new auth_1.default(this.appConfig, this.req);
        this.authNAuth = this.auth.authNAuth;
        this.oAuth2 = this.auth.oAuth2;
        this.factory = new factory_1.default(this.auth, this.req);
    }
    /**
     * Loads settings from `process.env`
     *
     * @return {eBayApi} a new eBayApi instance
     * @param {request} req request
     * @throws {EnvError}
     */
    eBayApi.fromEnv = function (req) {
        if (req === void 0) { req = request_1.createRequest(); }
        if (!process.env.EBAY_APP_ID) {
            throw new errors_1.EnvError('EBAY_APP_ID');
        }
        if (!process.env.EBAY_CERT_ID) {
            throw new errors_1.EnvError('EBAY_CERT_ID');
        }
        if (!process.env.EBAY_DEV_ID) {
            throw new errors_1.EnvError('EBAY_DEV_ID');
        }
        return new eBayApi({
            appId: process.env.EBAY_APP_ID,
            certId: process.env.EBAY_CERT_ID,
            devId: process.env.EBAY_DEV_ID,
            authToken: process.env.EBAY_AUTH_TOKEN,
            siteId: process.env.EBAY_SITE_ID ? parseInt(process.env.EBAY_SITE_ID, 10) : enums_1.SiteId.EBAY_DE,
            marketplaceId: process.env.EBAY_MARKETPLACE_ID && process.env.EBAY_MARKETPLACE_ID in enums_1.MarketplaceId ?
                enums_1.MarketplaceId[process.env.EBAY_MARKETPLACE_ID] :
                enums_1.MarketplaceId.EBAY_DE,
            ruName: process.env.EBAY_RU_NAME,
            sandbox: (process.env.EBAY_SANDBOX === 'true')
        }, req);
    };
    Object.defineProperty(eBayApi.prototype, "buy", {
        get: function () {
            return this._buy || (this._buy = this.factory.createBuyApi());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(eBayApi.prototype, "commerce", {
        get: function () {
            return this._commerce || (this._commerce = this.factory.createCommerceApi());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(eBayApi.prototype, "developer", {
        get: function () {
            return this._developer || (this._developer = this.factory.createDeveloperApi());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(eBayApi.prototype, "postOrder", {
        get: function () {
            return this._postOrder || (this._postOrder = this.factory.createPostOrderApi());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(eBayApi.prototype, "sell", {
        get: function () {
            return this._sell || (this._sell = this.factory.createSellApi());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(eBayApi.prototype, "trading", {
        // Traditional
        get: function () {
            return this._trading || (this._trading = this.factory.createTradingApi());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(eBayApi.prototype, "finding", {
        get: function () {
            return this._finding || (this._finding = this.factory.createFindingApi());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(eBayApi.prototype, "shopping", {
        get: function () {
            return this._shopping || (this._shopping = this.factory.createShoppingApi());
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(eBayApi.prototype, "clientAlerts", {
        get: function () {
            return this._clientAlerts || (this._clientAlerts = this.factory.createClientAlertsApi());
        },
        enumerable: false,
        configurable: true
    });
    eBayApi.SiteId = enums_1.SiteId;
    eBayApi.MarketplaceId = enums_1.MarketplaceId;
    return eBayApi;
}());
module.exports = eBayApi;
//# sourceMappingURL=index.js.map