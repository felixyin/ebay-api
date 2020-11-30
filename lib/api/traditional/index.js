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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var qs_1 = require("qs");
var errors_1 = require("../../errors");
var request_1 = require("../../utils/request");
var clientAlerts_1 = __importDefault(require("./clientAlerts"));
var finding_1 = __importDefault(require("./finding"));
var shopping_1 = __importDefault(require("./shopping"));
var trading_1 = __importDefault(require("./trading"));
var XMLRequest_1 = __importStar(require("./XMLRequest"));
/**
 * Traditional eBay API.
 */
var Traditional = /** @class */ (function () {
    function Traditional(auth, req) {
        var _this = this;
        if (req === void 0) { req = request_1.createRequest(); }
        this.createXMLRequest = function (callname, api) { return function (fields, opts) { return __awaiter(_this, void 0, void 0, function () {
            var options, config, request, e_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = __assign(__assign({}, XMLRequest_1.defaultOptions), opts);
                        config = this.getConfig(options, api, callname);
                        request = new XMLRequest_1.default(callname, fields, config, this.req);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, request.fetch(options)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_1 = _a.sent();
                        // Try to refresh the token.
                        if (e_1.name === errors_1.EBayIAFTokenExpired.name) {
                            return [2 /*return*/, this.auth.oAuth2.refreshAuthToken().then(function () {
                                    var newConfig = _this.getConfig(options, api, callname);
                                    var newRequest = new XMLRequest_1.default(callname, fields, newConfig, _this.req);
                                    return newRequest.fetch(options);
                                }).catch(function (ex) {
                                    throw ex;
                                })];
                        }
                        throw e_1;
                    case 4: return [2 /*return*/];
                }
            });
        }); }; };
        this.auth = auth;
        this.req = req;
    }
    Traditional.prototype.createTradingApi = function () {
        var _this = this;
        if (!this.auth.eBayConfig.devId) {
            throw new Error('devId is required for trading API.');
        }
        if (typeof this.auth.eBayConfig.siteId !== 'number') {
            throw new Error('siteId is required for trading API.');
        }
        return this.createTraditionalXMLApi({
            endpoint: {
                production: 'https://api.ebay.com/ws/api.dll',
                sandbox: 'https://api.sandbox.ebay.com/ws/api.dll'
            },
            calls: trading_1.default,
            xmlns: 'urn:ebay:apis:eBLBaseComponents',
            headers: function (callname, accessToken) { return (__assign({ 'X-EBAY-API-CALL-NAME': callname, 'X-EBAY-API-CERT-NAME': _this.auth.eBayConfig.certId, 'X-EBAY-API-APP-NAME': _this.auth.eBayConfig.appId, 'X-EBAY-API-DEV-NAME': _this.auth.eBayConfig.devId, 'X-EBAY-API-SITEID': _this.auth.eBayConfig.siteId, 'X-EBAY-API-COMPATIBILITY-LEVEL': 967 }, (accessToken && { 'X-EBAY-API-IAF-TOKEN': accessToken }))); }
        });
    };
    Traditional.prototype.createShoppingApi = function () {
        var _this = this;
        if (typeof this.auth.eBayConfig.siteId !== 'number') {
            throw new Error('siteId is required for shopping API.');
        }
        return this.createTraditionalXMLApi({
            endpoint: {
                production: 'http://open.api.ebay.com/shopping',
                sandbox: 'http://open.api.sandbox.ebay.com/shopping'
            },
            xmlns: 'urn:ebay:apis:eBLBaseComponents',
            calls: shopping_1.default,
            headers: function (callname) { return ({
                'X-EBAY-API-CALL-NAME': callname,
                'X-EBAY-API-APP-ID': _this.auth.eBayConfig.appId,
                'X-EBAY-API-SITE-ID': _this.auth.eBayConfig.siteId,
                'X-EBAY-API-VERSION': 863,
                'X-EBAY-API-REQUEST-ENCODING': 'xml'
            }); }
        });
    };
    Traditional.prototype.createFindingApi = function () {
        var _this = this;
        return this.createTraditionalXMLApi({
            endpoint: {
                production: 'https://svcs.ebay.com/services/search/FindingService/v1',
                sandbox: 'https://svcs.sandbox.ebay.com/services/search/FindingService/v1'
            },
            xmlns: 'http://www.ebay.com/marketplace/search/v1/services',
            calls: finding_1.default,
            headers: function (callname) { return ({
                'X-EBAY-SOA-SECURITY-APPNAME': _this.auth.eBayConfig.appId,
                'X-EBAY-SOA-OPERATION-NAME': callname
            }); }
        });
    };
    Traditional.prototype.createClientAlertsApi = function () {
        var _this = this;
        if (typeof this.auth.eBayConfig.siteId !== 'number') {
            throw new Error('siteId is required for client alerts API.');
        }
        var api = {
            endpoint: {
                production: 'https://clientalerts.ebay.com/ws/ecasvc/ClientAlerts',
                sandbox: 'https://clientalerts.sandbox.ebay.com/ws/ecasvc/ClientAlerts'
            },
            calls: clientAlerts_1.default
        };
        var endpoint = api.endpoint[this.auth.eBayConfig.sandbox ? 'sandbox' : 'production'];
        var paramsSerializer = function (args) {
            return qs_1.stringify(args, { allowDots: true })
                .replace(/%5B/gi, '(')
                .replace(/%5D/gi, ')');
        };
        var params = {
            appid: this.auth.eBayConfig.appId,
            siteid: this.auth.eBayConfig.siteId,
            version: 643
        };
        var service = {};
        Object.keys(clientAlerts_1.default).forEach(function (callname) {
            service[callname] = function (fields) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.req.get(endpoint, {
                            paramsSerializer: paramsSerializer,
                            params: __assign(__assign(__assign({}, params), fields), { callname: callname })
                        })];
                });
            }); };
        });
        return service;
    };
    // TODO
    Traditional.prototype.createBusinessPolicyManagementApi = function () {
        var api = {
            headers: function (_, accessToken) { return (__assign({}, (accessToken && { 'X-EBAY-SOA-SECURITY-IAFTOKEN': accessToken }))); }
        };
        return api;
    };
    Traditional.prototype.getConfig = function (options, api, callname) {
        var eBayAuthToken = this.auth.authNAuth.eBayAuthToken;
        var accessToken = this.auth.oAuth2.accessToken;
        var useIafToken = (!eBayAuthToken || accessToken && options.useIaf);
        return __assign({ xmlns: api.xmlns, endpoint: api.endpoint[this.auth.eBayConfig.sandbox ? 'sandbox' : 'production'], headers: __assign({}, api.headers(callname, accessToken && useIafToken ? accessToken : undefined)) }, (eBayAuthToken && !useIafToken && { eBayAuthToken: eBayAuthToken }));
    };
    Traditional.prototype.createTraditionalXMLApi = function (api) {
        var _this = this;
        var service = {};
        Object.keys(api.calls).map(function (callname) {
            service[callname] = _this.createXMLRequest(callname, api);
        });
        return service;
    };
    return Traditional;
}());
exports.default = Traditional;
//# sourceMappingURL=index.js.map