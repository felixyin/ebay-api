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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require("../../"));
/**
 * This method retrieves the call limit and utilization data for an application.
 */
var Analytics = /** @class */ (function (_super) {
    __extends(Analytics, _super);
    function Analytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Analytics.prototype, "basePath", {
        get: function () {
            return '/developer/analytics/v1_beta';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * This method retrieves the call limit and utilization data for an application.
     *
     * @param apiContext This optional query parameter filters the result to include only the specified API context.
     * @param apiName This optional query parameter filters the result to include only the APIs specified.
     */
    Analytics.prototype.getRateLimits = function (apiContext, apiName) {
        return this.get("/rate_limit/", {
            params: {
                api_context: apiContext,
                api_name: apiName
            }
        });
    };
    /**
     * This method retrieves the call limit and utilization data for an application user.
     *
     * @param apiContext This optional query parameter filters the result to include only the specified API context.
     * @param apiName This optional query parameter filters the result to include only the APIs specified.
     */
    Analytics.prototype.getUserRateLimits = function (apiContext, apiName) {
        return this.get("/user_rate_limit/", {
            params: {
                api_context: apiContext,
                api_name: apiName
            }
        });
    };
    return Analytics;
}(__1.default));
exports.default = Analytics;
//# sourceMappingURL=index.js.map