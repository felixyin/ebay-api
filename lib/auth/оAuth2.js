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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var debug_1 = __importDefault(require("debug"));
var nanoevents_1 = __importDefault(require("nanoevents"));
var request_1 = require("../utils/request");
var log = debug_1.default('ebay:oauth');
var OAuth2 = /** @class */ (function () {
    function OAuth2(config, req) {
        if (req === void 0) { req = request_1.createRequest(); }
        this.eBayConfig = config;
        this.endpoint = this.eBayConfig.sandbox ? 'sandbox' : 'production';
        this.scope = this.eBayConfig.scope || OAuth2.defaultScopes;
        this.req = req;
        this.emitter = new nanoevents_1.default();
    }
    OAuth2.generateAuthUrl = function (sandbox, appId, ruName, scope, state) {
        if (state === void 0) { state = ''; }
        return [
            OAuth2.AUTHORIZE_ENDPOINT[sandbox ? 'sandbox' : 'production'],
            '?client_id=', encodeURIComponent(appId),
            '&redirect_uri=', encodeURIComponent(ruName),
            '&response_type=code',
            '&state=', encodeURIComponent(state),
            '&scope=', encodeURIComponent(scope.join(' '))
        ].join('');
    };
    OAuth2.prototype.on = function (name, callBack) {
        return this.emitter.on(name, callBack);
    };
    /**
     * Return the access token.
     */
    OAuth2.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Fallback to Client Token
                return [2 /*return*/, this.accessToken || this.getClientAccessToken()];
            });
        });
    };
    Object.defineProperty(OAuth2.prototype, "accessToken", {
        get: function () {
            if (this._userAccessToken) {
                return this._userAccessToken.access_token;
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    OAuth2.prototype.getClientAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._clientToken) {
                            log('Return existing client token: ', this._clientToken);
                            return [2 /*return*/, this._clientToken.access_token];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.refreshClientToken()];
                    case 2:
                        token = _a.sent();
                        return [2 /*return*/, token.access_token];
                    case 3:
                        e_1 = _a.sent();
                        throw e_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OAuth2.prototype.setClientToken = function (clientToken) {
        this._clientToken = clientToken;
    };
    OAuth2.prototype.setScope = function (scope) {
        this.scope = scope;
    };
    OAuth2.prototype.getScope = function () {
        return __spreadArrays(this.scope);
    };
    // Client Credential Grant
    OAuth2.prototype.refreshClientToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.eBayConfig.appId) {
                            throw new Error('Missing App ID (Client Id)');
                        }
                        if (!this.eBayConfig.certId) {
                            throw new Error('Missing Cert Id (Client Secret)');
                        }
                        log('Obtain a new Client Token with scope: ', this.scope.join(','));
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.req.postForm(OAuth2.IDENTITY_ENDPOINT[this.endpoint], {
                                scope: this.scope.join(' '),
                                grant_type: 'client_credentials'
                            }, {
                                auth: {
                                    username: this.eBayConfig.appId,
                                    password: this.eBayConfig.certId
                                }
                            })];
                    case 2:
                        token = _a.sent();
                        log('Stored a new Client Token:', token);
                        this.setClientToken(token);
                        this.emitter.emit('refreshClientToken', token);
                        return [2 /*return*/, token];
                    case 3:
                        ex_1 = _a.sent();
                        log('Failed to store client token', ex_1);
                        throw ex_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Generates URL for consent page landing.
     *
     * @param ruName RuName
     * @param scope the scopes
     * @param state state parameter returned in the redirect URL
     */
    OAuth2.prototype.generateAuthUrl = function (ruName, scope, state) {
        if (scope === void 0) { scope = this.scope; }
        if (state === void 0) { state = ''; }
        ruName = ruName || this.eBayConfig.ruName;
        if (!ruName) {
            throw new Error('RuName is required.');
        }
        return OAuth2.generateAuthUrl(this.eBayConfig.sandbox, this.eBayConfig.appId, ruName, scope, state);
    };
    /**
     * Gets the access token for the given code.
     *
     * @param code the code
     * @param ruName the redirectUri
     */
    OAuth2.prototype.getToken = function (code, ruName) {
        if (ruName === void 0) { ruName = this.eBayConfig.ruName; }
        return __awaiter(this, void 0, void 0, function () {
            var token, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.req.postForm(OAuth2.IDENTITY_ENDPOINT[this.endpoint], {
                                grant_type: 'authorization_code',
                                code: code,
                                redirect_uri: ruName
                            }, {
                                auth: {
                                    username: this.eBayConfig.appId,
                                    password: this.eBayConfig.certId
                                }
                            })];
                    case 1:
                        token = _a.sent();
                        log('Successfully obtained a new User Access Token:', token);
                        return [2 /*return*/, token];
                    case 2:
                        ex_2 = _a.sent();
                        log('Failed to get the token:', ex_2);
                        throw ex_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OAuth2.prototype.getCredentials = function () {
        if (this._userAccessToken) {
            return __assign({}, this._userAccessToken);
        }
        return null;
    };
    OAuth2.prototype.setCredentials = function (userAccessToken) {
        this._userAccessToken = userAccessToken;
    };
    OAuth2.prototype.refreshAuthToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, refreshedToken, ex_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this._userAccessToken) {
                            log('Tried to refresh auth token before it was set.');
                            throw new Error('Failed to refresh the token. Token is not set.');
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.req.postForm(OAuth2.IDENTITY_ENDPOINT[this.endpoint], {
                                grant_type: 'refresh_token',
                                refresh_token: this._userAccessToken.refresh_token,
                                scope: this.scope.join(' ')
                            }, {
                                auth: {
                                    username: this.eBayConfig.appId,
                                    password: this.eBayConfig.certId
                                }
                            })];
                    case 2:
                        token = _a.sent();
                        log('Successfully refreshed token', token);
                        refreshedToken = __assign(__assign({}, this._userAccessToken), token);
                        this.setCredentials(refreshedToken);
                        this.emitter.emit('refreshAuthToken', refreshedToken);
                        return [2 /*return*/, refreshedToken];
                    case 3:
                        ex_3 = _a.sent();
                        log('Failed to refresh the token', ex_3);
                        throw ex_3;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    OAuth2.prototype.refreshToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this._userAccessToken) {
                    return [2 /*return*/, this.refreshAuthToken()];
                }
                else if (this._clientToken) {
                    return [2 /*return*/, this.refreshClientToken()];
                }
                throw new Error('To refresh a Token a client token or user access token must be already set.');
            });
        });
    };
    // If all the calls in our application require just an Application access token we can use this endpoint
    OAuth2.IDENTITY_ENDPOINT = {
        production: 'https://api.ebay.com/identity/v1/oauth2/token',
        sandbox: 'https://api.sandbox.ebay.com/identity/v1/oauth2/token'
    };
    OAuth2.AUTHORIZE_ENDPOINT = {
        production: 'https://auth.ebay.com/oauth2/authorize',
        sandbox: 'https://auth.sandbox.ebay.com/oauth2/authorize'
    };
    OAuth2.defaultScopes = ['https://api.ebay.com/oauth/api_scope'];
    return OAuth2;
}());
exports.default = OAuth2;
//# sourceMappingURL=%D0%BEAuth2.js.map