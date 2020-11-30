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
 * The Marketing API retrieves eBay products based on a metric, such as Best Selling, as well as products that were
 * also bought and also viewed.
 */
var Marketing = /** @class */ (function (_super) {
    __extends(Marketing, _super);
    function Marketing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Marketing.prototype, "basePath", {
        get: function () {
            return '/buy/marketing/v1_beta';
        },
        enumerable: false,
        configurable: true
    });
    //
    // Marketing
    // Client Credentials: https://api.ebay.com/oauth/api_scope/buy.marketing
    //
    /**
     * This call returns products that were also bought when shoppers bought the product specified in the request.
     * @param params
     */
    Marketing.prototype.getAlsoBoughtByProduct = function (params) {
        return this.get("/merchandised_product/get_also_bought_products", {
            params: params
        });
    };
    /**
     * This call returns products that were also viewed when shoppers viewed the product specified in the request.
     *
     * @param params
     */
    Marketing.prototype.getAlsoViewedByProduct = function (params) {
        return this.get("/merchandised_product/get_also_viewed_products", {
            params: params
        });
    };
    /**
     * This call returns an array of products based on the category and metric specified.
     *
     * @param params
     */
    Marketing.prototype.getMerchandisedProducts = function (params) {
        return this.get("/merchandised_product", {
            params: params
        });
    };
    return Marketing;
}(__1.default));
exports.default = Marketing;
//# sourceMappingURL=index.js.map