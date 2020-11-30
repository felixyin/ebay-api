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
var Metric;
(function (Metric) {
    Metric[Metric["CLICK_THROUGH_RATE"] = 0] = "CLICK_THROUGH_RATE";
    Metric[Metric["LISTING_IMPRESSION_STORE"] = 1] = "LISTING_IMPRESSION_STORE";
    Metric[Metric["LISTING_IMPRESSION_TOTAL"] = 2] = "LISTING_IMPRESSION_TOTAL";
    Metric[Metric["LISTING_VIEWS_SOURCE_DIRECT"] = 3] = "LISTING_VIEWS_SOURCE_DIRECT";
    Metric[Metric["LISTING_VIEWS_SOURCE_OFF_EBAY"] = 4] = "LISTING_VIEWS_SOURCE_OFF_EBAY";
    Metric[Metric["LISTING_VIEWS_SOURCE_OTHER_EBAY"] = 5] = "LISTING_VIEWS_SOURCE_OTHER_EBAY";
    Metric[Metric["LISTING_VIEWS_SOURCE_SEARCH_RESULTS_PAGE"] = 6] = "LISTING_VIEWS_SOURCE_SEARCH_RESULTS_PAGE";
    Metric[Metric["LISTING_VIEWS_SOURCE_STORE"] = 7] = "LISTING_VIEWS_SOURCE_STORE";
    Metric[Metric["LISTING_VIEWS_TOTAL"] = 8] = "LISTING_VIEWS_TOTAL";
    Metric[Metric["SALES_CONVERSION_RATE"] = 9] = "SALES_CONVERSION_RATE";
    Metric[Metric["TRANSACTION"] = 10] = "TRANSACTION";
})(Metric || (Metric = {}));
/**
 * The Analytics API provides information about a seller's business performance.
 */
var Analytics = /** @class */ (function (_super) {
    __extends(Analytics, _super);
    function Analytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Analytics.prototype, "basePath", {
        get: function () {
            return '/sell/analytics/v1';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * This call retrieves all the profiles for the associated seller.
     */
    Analytics.prototype.findSellerStandardsProfiles = function () {
        return this.get("/seller_standards_profile");
    };
    /**
     * This call retrieves seller's profiles based on a program or cycle.
     *
     * @param program Specifies the program of the requested profile.
     * @param cycle Specifies the cycle of the requested profile.
     */
    Analytics.prototype.getSellerStandardsProfile = function (program, cycle) {
        var p = encodeURIComponent(program);
        var c = encodeURIComponent(cycle);
        return this.get("/seller_standards_profile/" + p + "/" + c);
    };
    /**
     * This call returns a report that details the user-traffic a seller's listings receives.
     *
     * @param dimension Specifies the basis of the report data.
     * @param filter Limits the report data returned.
     * @param metric Specifies a comma separated list of the metrics you want included in the report.
     * @param sort Specifies a single metric to be sorted and whether you want to sort in ascending or descending order.
     */
    Analytics.prototype.getTrafficReport = function (_a) {
        var _b = _a === void 0 ? {} : _a, dimension = _b.dimension, filter = _b.filter, metric = _b.metric, sort = _b.sort;
        return this.get("/traffic_report", {
            params: {
                dimension: dimension,
                filter: filter,
                metric: metric,
                sort: sort
            }
        });
    };
    return Analytics;
}(__1.default));
exports.default = Analytics;
//# sourceMappingURL=index.js.map