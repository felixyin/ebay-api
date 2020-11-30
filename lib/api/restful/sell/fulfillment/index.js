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
 * Use the Fulfillment API to complete the process of packaging, addressing, handling, and shipping each order on
 * behalf of the seller, in accordance with the payment method and timing specified at checkout.
 *
 * https://api.ebay.com/oauth/api_scope/sell.fulfillment
 * https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly
 *
 */
var Fulfillment = /** @class */ (function (_super) {
    __extends(Fulfillment, _super);
    function Fulfillment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Fulfillment.prototype, "basePath", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fulfillment.prototype, "apiVersionPath", {
        get: function () {
            return '/sell/fulfillment/v1';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Use this call to retrieve the contents of an order based on its unique identifier, orderId.
     *
     * @param orderId The unique identifier of the order.
     */
    Fulfillment.prototype.getOrder = function (orderId) {
        return this.get("/order/" + orderId);
    };
    /**
     * Use this call to search for and retrieve one or more orders based on their creation date, last modification
     * date,
     * or fulfillment status using the filter parameter.
     *
     * @param filter One or more comma-separated criteria for narrowing down the collection of orders returned by this
     *     call.
     * @param limit The number of orders to return per page of the result set.
     * @param offset Specifies the number of orders to skip in the result set before returning the first order in the
     *     paginated response.
     * @param orderIds A comma-separated list of the unique identifiers of the orders to retrieve (maximum 50).
     */
    Fulfillment.prototype.getOrders = function (_a) {
        var _b = _a === void 0 ? {} : _a, filter = _b.filter, limit = _b.limit, offset = _b.offset, orderIds = _b.orderIds;
        return this.get("/order", {
            params: {
                filter: filter,
                limit: limit,
                offset: offset,
                orderIds: orderIds
            }
        });
    };
    /**
     * This method allows a seller (opted in to eBay Managed Payments) to issue a full or partial refund to a buyer for
     * an order. auth: https://api.ebay.com/oauth/api_scope/sell.finances
     *
     * @param orderId The unique identifier of the order. Order IDs are returned in the getOrders method (and GetOrders
     *     call of Trading API).
     * @param body IssueRefundRequest
     */
    Fulfillment.prototype.issueRefund = function (orderId, body) {
        orderId = encodeURIComponent(orderId);
        return this.post("/order/" + orderId + "/issue_refund", body);
    };
    /**
     * Use this call to retrieve the contents of all fulfillments currently defined for a specified order based on the
     * order's unique identifier, orderId.
     *
     * @param orderId The unique identifier of the order.
     */
    Fulfillment.prototype.getShippingFulfillments = function (orderId) {
        orderId = encodeURIComponent(orderId);
        return this.get("/order/" + orderId + "/shipping_fulfillment");
    };
    /**
     * Create a Shipping Fulfillment
     *
     * @param orderId The unique identifier of the order.
     * @param body fulfillment payload
     */
    Fulfillment.prototype.createShippingFulfillment = function (orderId, body) {
        orderId = encodeURIComponent(orderId);
        return this.post("/order/" + orderId + "/shipping_fulfillment", body);
    };
    /**
     * Use this call to retrieve the contents of a fulfillment based on its unique identifier, fulfillmentId (combined
     * with the associated order's orderId).
     *
     * @param orderId The unique identifier of the order.
     * @param fulfillmentId The unique identifier of the fulfillment.
     */
    Fulfillment.prototype.getShippingFulfillment = function (orderId, fulfillmentId) {
        orderId = encodeURIComponent(orderId);
        fulfillmentId = encodeURIComponent(fulfillmentId);
        return this.get("/order/" + orderId + "/shipping_fulfillment/" + fulfillmentId);
    };
    return Fulfillment;
}(__1.default));
exports.default = Fulfillment;
//# sourceMappingURL=index.js.map