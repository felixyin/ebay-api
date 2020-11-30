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
var debug_1 = __importDefault(require("debug"));
var errors_1 = require("../../errors");
var request_1 = require("../../utils/request");
var log = debug_1.default('ebay:restful:api');
var Api = /** @class */ (function () {
    function Api(auth, req) {
        if (req === void 0) { req = request_1.createRequest(); }
        this.auth = auth;
        this.req = req;
    }
    /**
     * Control to use IAF or not.
     */
    Api.prototype.useIaf = function () {
        return false;
    };
    Api.prototype.enrichConfig = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, _a, additionalHeaders;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        headers = {
                            'Content-Type': 'application/json',
                            'Cache-Control': 'no-cache',
                            'Accept-Encoding': 'application/gzip'
                        };
                        _a = headers;
                        return [4 /*yield*/, this.auth.getHeaderAuthorization(this.useIaf())];
                    case 1:
                        _a.Authorization = _b.sent();
                        additionalHeaders = {
                            marketplaceId: 'X-EBAY-C-MARKETPLACE-ID',
                            endUserCtx: 'X-EBAY-C-ENDUSERCTX',
                            acceptLanguage: 'Accept-Language',
                            contentLanguage: 'Content-Language'
                        };
                        Object.keys(additionalHeaders).forEach(function (key) {
                            // @ts-ignore
                            var value = _this.auth.eBayConfig[key];
                            if (typeof value !== 'undefined') {
                                headers[additionalHeaders[key]] = value;
                            }
                        });
                        return [2 /*return*/, __assign(__assign({}, config), { headers: __assign(__assign({}, headers), config.headers) })];
                }
            });
        });
    };
    Object.defineProperty(Api.prototype, "serverUrl", {
        get: function () {
            return 'https://api.' + (this.auth.eBayConfig.sandbox ? 'sandbox.' : '') + 'ebay.com';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "apiVersionPath", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Api.prototype, "baseUrl", {
        get: function () {
            return this.serverUrl + this.apiVersionPath + this.basePath;
        },
        enumerable: false,
        configurable: true
    });
    Api.prototype.get = function (url, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.doRequest('get', url, config)];
            });
        });
    };
    Api.prototype.delete = function (url, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.doRequest('delete', url, config)];
            });
        });
    };
    Api.prototype.post = function (url, data, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.doRequest('post', url, config, data)];
            });
        });
    };
    Api.prototype.put = function (url, data, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.doRequest('put', url, config, data)];
            });
        });
    };
    Api.prototype.doRequest = function (method, url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var args, ex_1, args;
            var _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 6]);
                        return [4 /*yield*/, this.getArgs(method, url, config, data)];
                    case 1:
                        args = _c.sent();
                        return [4 /*yield*/, (_a = this.req)[method].apply(_a, args)];
                    case 2: 
                    // @ts-ignore
                    return [2 /*return*/, _c.sent()];
                    case 3:
                        ex_1 = _c.sent();
                        return [4 /*yield*/, this.handleEBayError(ex_1)];
                    case 4:
                        _c.sent();
                        return [4 /*yield*/, this.getArgs(method, url, config, data)];
                    case 5:
                        args = _c.sent();
                        // @ts-ignore
                        return [2 /*return*/, (_b = this.req)[method].apply(_b, args).catch(function (ex) { return _this.handleEBayError(ex, true); })];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Api.prototype.getArgs = function (method, url, config, data) {
        return __awaiter(this, void 0, void 0, function () {
            var enrichedConfig, args;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.enrichConfig(config)];
                    case 1:
                        enrichedConfig = _a.sent();
                        args = [this.baseUrl + url];
                        if (['get', 'delete'].includes(method)) {
                            args.push(enrichedConfig);
                        }
                        else {
                            args.push(data, enrichedConfig);
                        }
                        return [2 /*return*/, args];
                }
            });
        });
    };
    Api.prototype.handleEBayError = function (ex, refreshedToken) {
        return __awaiter(this, void 0, void 0, function () {
            var error;
            return __generator(this, function (_a) {
                error = errors_1.getEBayError(ex);
                if (!error) {
                    log('handleEBayError', ex);
                    throw ex;
                }
                if (error.domain === 'ACCESS') {
                    throw new errors_1.EBayAccessDenied(ex);
                }
                else if (error.message === 'Invalid access token') {
                    if (!refreshedToken) {
                        // TODO extract this
                        log('Token expired. Refresh the token.');
                        return [2 /*return*/, this.auth.oAuth2.refreshToken().catch(function (e) {
                                var responseError = errors_1.getEBayError(e);
                                if (responseError && responseError.message === 'invalid_scope') {
                                    throw new errors_1.EBayInvalidScope(e);
                                }
                                throw e;
                            })];
                    }
                    throw new errors_1.EBayUnauthorizedAfterRefresh(ex);
                }
                else if (error.errorId === 11001) {
                    throw new errors_1.EBayNotFound(ex);
                }
                throw ex;
            });
        });
    };
    return Api;
}());
exports.default = Api;
//# sourceMappingURL=index.js.map