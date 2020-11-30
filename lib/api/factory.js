"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../utils/request");
var buy_1 = require("./restful/buy");
var commerce_1 = require("./restful/commerce");
var developer_1 = require("./restful/developer");
var postOrder_1 = require("./restful/postOrder");
var sell_1 = require("./restful/sell");
var traditional_1 = __importDefault(require("./traditional"));
/**
 * Factory class to create RESTFul API or Traditional API.
 */
var Factory = /** @class */ (function () {
    function Factory(auth, req) {
        if (req === void 0) { req = request_1.createRequest(); }
        this._restful = {};
        this.auth = auth;
        this.req = req;
    }
    Factory.prototype.createBuyApi = function () {
        return {
            browse: this.createRestfulApi(buy_1.Browse),
            feed: this.createRestfulApi(buy_1.Feed),
            marketing: this.createRestfulApi(buy_1.Marketing),
            offer: this.createRestfulApi(buy_1.Offer),
            order: this.createRestfulApi(buy_1.Order)
        };
    };
    Factory.prototype.createCommerceApi = function () {
        return {
            catalog: this.createRestfulApi(commerce_1.Catalog),
            identity: this.createRestfulApi(commerce_1.Identity),
            taxonomy: this.createRestfulApi(commerce_1.Taxonomy),
            translation: this.createRestfulApi(commerce_1.Translation)
        };
    };
    Factory.prototype.createDeveloperApi = function () {
        return {
            analytics: this.createRestfulApi(developer_1.Analytics)
        };
    };
    Factory.prototype.createPostOrderApi = function () {
        return {
            cancellation: this.createRestfulApi(postOrder_1.Cancellation),
            case: this.createRestfulApi(postOrder_1.Case),
            inquiry: this.createRestfulApi(postOrder_1.Inquiry),
            return: this.createRestfulApi(postOrder_1.Return)
        };
    };
    Factory.prototype.createSellApi = function () {
        return {
            account: this.createRestfulApi(sell_1.Account),
            analytics: this.createRestfulApi(sell_1.Analytics),
            compliance: this.createRestfulApi(sell_1.Compliance),
            fulfillment: this.createRestfulApi(sell_1.Fulfillment),
            inventory: this.createRestfulApi(sell_1.Inventory),
            marketing: this.createRestfulApi(sell_1.Marketing),
            metadata: this.createRestfulApi(sell_1.Metadata),
            recommendation: this.createRestfulApi(sell_1.Recommendation)
        };
    };
    Object.defineProperty(Factory.prototype, "traditional", {
        get: function () {
            if (this._traditional) {
                return this._traditional;
            }
            return (this._traditional = new traditional_1.default(this.auth, this.req));
        },
        enumerable: false,
        configurable: true
    });
    Factory.prototype.createTradingApi = function () {
        return this.traditional.createTradingApi();
    };
    Factory.prototype.createShoppingApi = function () {
        return this.traditional.createShoppingApi();
    };
    Factory.prototype.createFindingApi = function () {
        return this.traditional.createFindingApi();
    };
    Factory.prototype.createClientAlertsApi = function () {
        return this.traditional.createClientAlertsApi();
    };
    // tslint:disable-next-line:variable-name
    Factory.prototype.createRestfulApi = function (ApiClass) {
        var name = ApiClass.name;
        return this._restful[name] || (this._restful[name] = new ApiClass(this.auth));
    };
    return Factory;
}());
exports.default = Factory;
//# sourceMappingURL=factory.js.map