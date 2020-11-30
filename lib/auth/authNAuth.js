"use strict";
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
var XMLRequest_1 = __importDefault(require("../api/traditional/XMLRequest"));
var request_1 = require("../utils/request");
var log = debug_1.default('ebay:authNAuth');
var AuthNAuth = /** @class */ (function () {
    function AuthNAuth(config, req) {
        if (req === void 0) { req = request_1.createRequest(); }
        this.eBayConfig = config;
        this.req = req;
        if (this.eBayConfig.authToken) {
            this.authToken = {
                eBayAuthToken: this.eBayConfig.authToken
            };
        }
    }
    AuthNAuth.generateAuthUrl = function (sandbox, ruName, sessionId, prompt) {
        if (prompt === void 0) { prompt = false; }
        return [
            AuthNAuth.SIGNIN_ENDPOINT[sandbox ? 'sandbox' : 'production'],
            '?SignIn',
            '&RuName=', encodeURIComponent(ruName),
            '&SessID=', encodeURIComponent(sessionId),
            prompt ? '&prompt=login' : ''
        ].join('');
    };
    /**
     * Generates URL for consent page landing.
     *
     * @param ruName RuName
     */
    AuthNAuth.prototype.getSessionIdAndAuthUrl = function (ruName) {
        return __awaiter(this, void 0, void 0, function () {
            var config, request, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.eBayConfig.devId) {
                            throw new Error('DevId is required.');
                        }
                        ruName = ruName || this.eBayConfig.ruName;
                        if (!ruName) {
                            throw new Error('RuName is required.');
                        }
                        config = this.getRequestConfig('GetSessionID');
                        request = new XMLRequest_1.default('GetSessionID', {
                            RuName: ruName
                        }, config, this.req);
                        return [4 /*yield*/, request.fetch({ useIaf: false })];
                    case 1:
                        response = _a.sent();
                        log('GetSessionID response', response);
                        return [2 /*return*/, {
                                sessionId: response.SessionID,
                                url: AuthNAuth.generateAuthUrl(this.eBayConfig.sandbox, ruName, response.SessionID)
                            }];
                }
            });
        });
    };
    AuthNAuth.prototype.fetchAuthToken = function (sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            var request;
            return __generator(this, function (_a) {
                if (!this.eBayConfig.devId) {
                    throw new Error('DevId is required.');
                }
                request = new XMLRequest_1.default('FetchToken', {
                    SessionID: sessionId
                }, this.getRequestConfig('FetchToken'), this.req);
                return [2 /*return*/, request.fetch({ useIaf: false })];
            });
        });
    };
    AuthNAuth.prototype.setAuthToken = function (authToken) {
        if (typeof authToken === 'string') {
            this.authToken = {
                eBayAuthToken: authToken
            };
        }
        else {
            this.authToken = authToken;
        }
    };
    AuthNAuth.prototype.getAuthToken = function () {
        return this.authToken;
    };
    Object.defineProperty(AuthNAuth.prototype, "eBayAuthToken", {
        get: function () {
            if (this.authToken) {
                return this.authToken.eBayAuthToken;
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    AuthNAuth.prototype.getRequestConfig = function (callname) {
        if (!this.eBayConfig.siteId) {
            throw new Error('siteId is required for Auth\'n\'Auth.');
        }
        return {
            xmlns: 'urn:ebay:apis:eBLBaseComponents',
            endpoint: AuthNAuth.API_ENDPOINT[this.eBayConfig.sandbox ? 'sandbox' : 'production'],
            headers: {
                'X-EBAY-API-CALL-NAME': callname,
                'X-EBAY-API-CERT-NAME': this.eBayConfig.certId,
                'X-EBAY-API-APP-NAME': this.eBayConfig.appId,
                'X-EBAY-API-DEV-NAME': this.eBayConfig.devId,
                'X-EBAY-API-SITEID': this.eBayConfig.siteId,
                'X-EBAY-API-COMPATIBILITY-LEVEL': 967
            }
        };
    };
    AuthNAuth.SIGNIN_ENDPOINT = {
        sandbox: 'https://signin.sandbox.ebay.com/ws/eBayISAPI.dll',
        production: 'https://signin.ebay.com/ws/eBayISAPI.dll'
    };
    AuthNAuth.API_ENDPOINT = {
        production: 'https://api.ebay.com/ws/api.dll',
        sandbox: 'https://api.sandbox.ebay.com/ws/api.dll'
    };
    return AuthNAuth;
}());
exports.default = AuthNAuth;
//# sourceMappingURL=authNAuth.js.map