"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequest = exports.LimitedAxiosRequest = void 0;
var axios_1 = __importDefault(require("axios"));
var axios_rate_limit_1 = __importDefault(require("axios-rate-limit"));
var debug_1 = __importDefault(require("debug"));
var qs_1 = __importDefault(require("qs"));
var log = debug_1.default('ebay:request');
var second = 1000;
var minute = 60 * second;
var hour = 60 * minute;
var day = 24 * hour;
var RATELIMIT_PER_DAY = 5000; // Ebay ratelimits to 5000 calls per day per default
var LimitedAxiosRequest = /** @class */ (function () {
    function LimitedAxiosRequest(interceptors, maxRequests) {
        if (maxRequests === void 0) { maxRequests = RATELIMIT_PER_DAY; }
        var axiosInstance = axios_1.default.create({
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'X-Requested-With, Origin, Content-Type, X-Auth-Token',
                'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE'
            }
        });
        if (interceptors && interceptors.request) {
            axiosInstance.interceptors.request.use(interceptors.request);
        }
        if (interceptors && interceptors.response) {
            axiosInstance.interceptors.response.use(interceptors.response);
        }
        this.req = axios_rate_limit_1.default(axiosInstance, {
            maxRequests: maxRequests,
            perMilliseconds: day
        });
    }
    LimitedAxiosRequest.prototype.get = function (url, config) {
        log('get: ' + url);
        return this.req.get(url, config).then(function (_a) {
            var data = _a.data;
            return data;
        });
    };
    LimitedAxiosRequest.prototype.post = function (url, payload, config) {
        log('post: ' + url, payload);
        return this.req.post(url, payload, config).then(function (_a) {
            var data = _a.data;
            return data;
        });
    };
    LimitedAxiosRequest.prototype.delete = function (url, config) {
        log('delete: ' + url);
        return this.req.delete(url, config).then(function (_a) {
            var data = _a.data;
            return data;
        });
    };
    LimitedAxiosRequest.prototype.put = function (url, payload, config) {
        log('put: ' + url, payload);
        return this.req.put(url, payload, config).then(function (_a) {
            var data = _a.data;
            return data;
        });
    };
    LimitedAxiosRequest.prototype.postForm = function (url, payload, config) {
        var body = qs_1.default.stringify(payload);
        return this.req.post(url, body, config).then(function (_a) {
            var data = _a.data;
            return data;
        });
    };
    return LimitedAxiosRequest;
}());
exports.LimitedAxiosRequest = LimitedAxiosRequest;
var request;
var createRequest = function (_a) {
    var _b = _a === void 0 ? {} : _a, interceptors = _b.interceptors, maxRequests = _b.maxRequests;
    return request || (request = new LimitedAxiosRequest(interceptors, maxRequests));
};
exports.createRequest = createRequest;
//# sourceMappingURL=request.js.map