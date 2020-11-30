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
 * The Api Offer API enables Partners to place proxy bids for a buyer and retrieve the auctions where the buyer is
 * bidding. Client Credentials: https://api.ebay.com/oauth/api_scope/buy.offer.auction
 */
var Offer = /** @class */ (function (_super) {
    __extends(Offer, _super);
    function Offer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Offer.prototype, "basePath", {
        get: function () {
            return '/buy/offer/v1_beta';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * This method retrieves the bidding details that are specific to the buyer of the specified auction.
     *
     * @param itemId
     * @param marketplaceId
     */
    Offer.prototype.getBidding = function (itemId, marketplaceId) {
        var id = encodeURIComponent(itemId);
        return this.get("/bidding/" + id, {
            headers: {
                'X-EBAY-C-MARKETPLACE-ID': marketplaceId
            }
        });
    };
    /**
     * This method uses a user access token to place a proxy bid for the buyer on a specific auction item.
     *
     * @param itemId
     * @param marketplaceId
     * @param {PlaceProxyBidRequest} body
     */
    Offer.prototype.placeProxyBid = function (itemId, marketplaceId, body) {
        var id = encodeURIComponent(itemId);
        return this.post("/bidding/" + id + "/place_proxy_bid", body, {
            headers: {
                'X-EBAY-C-MARKETPLACE-ID': marketplaceId
            }
        });
    };
    return Offer;
}(__1.default));
exports.default = Offer;
//# sourceMappingURL=index.js.map