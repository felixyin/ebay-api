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
 * The <b>Recommendation API</b> returns information that sellers can use to optimize the configuration of their
 * listings on eBay.
 */
var Recommendation = /** @class */ (function (_super) {
    __extends(Recommendation, _super);
    function Recommendation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Recommendation.prototype, "basePath", {
        get: function () {
            return '/sell/recommendation/v1';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The find method returns recommendations and information that sellers can use to optimize their listing
     * configurations.
     *
     * @param marketplaceId Use this header to specify the eBay marketplace where you list the items for which you want
     *     to get recommendations.
     * @param filter Provide a list of key-value pairs to specify the criteria you want to use to filter the response.
     * @param limit Use this query parameter to set the maximum number of ads to return on a page from the paginated
     *     response. Default: 10 Maximum: 500
     * @param offset Specifies the number of ads to skip in the result set before returning the first ad in the
     *     paginated response.
     * @param body FindListingRecommendationRequest
     */
    Recommendation.prototype.findListingRecommendations = function (marketplaceId, _a, body) {
        var _b = _a === void 0 ? {} : _a, filter = _b.filter, limit = _b.limit, offset = _b.offset;
        return this.post("/find", {
            data: body,
            params: {
                filter: filter,
                limit: limit,
                offset: offset
            },
            headers: {
                'X-EBAY-C-MARKETPLACE-ID': marketplaceId
            }
        });
    };
    return Recommendation;
}(__1.default));
exports.default = Recommendation;
//# sourceMappingURL=index.js.map