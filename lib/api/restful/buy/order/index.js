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
 * The Order API provides interfaces that lets shoppers pay for items (for both eBay guest and eBay member buyers).
 * Client Credentials: https://api.ebay.com/oauth/api_scope/buy.order
 */
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Order.prototype, "basePath", {
        get: function () {
            return '/buy/order/v1';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * (Limited Release) You must be whitelisted to use this method.
     * This method adds a coupon to an eBay proxy guest checkout session and applies it to all the eligible items in
     * the order.
     *
     * @param {String} checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is
     *     returned by the initiateCheckoutSession method.
     * @param body The container for the fields used to apply a coupon to a checkout session.
     */
    Order.prototype.applyCoupon = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/checkout_session/" + sessionId + "/apply_coupon", body);
    };
    /**
     * This method returns the details of the specified eBay member checkout session.
     *
     * @param {String} checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is
     *     returned by the initiateCheckoutSession method.
     */
    Order.prototype.getCheckoutSession = function (checkoutSessionId) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.get("/checkout_session/" + sessionId);
    };
    /**
     * This method creates a eBay member checkout session, which is the first step in performing a checkout.
     *
     * @param body The container for the fields used by the initiateCheckoutSession method.
     */
    Order.prototype.initiateCheckoutSession = function (body) {
        return this.post("/checkout_session/initiate", body);
    };
    /**
     * This method creates the purchase order, pays for the items, and terminates the specified eBay member checkout
     * session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     */
    Order.prototype.placeOrder = function (checkoutSessionId) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/checkout_session/" + sessionId + "/place_order");
    };
    /**
     * (Limited Release) You must be whitelisted to use this method. This method removes a coupon from an eBay member
     * checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body CouponRequest
     */
    Order.prototype.removeCoupon = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/checkout_session/" + sessionId + "/remove_coupon", body);
    };
    /**
     * This method changes the payment method information of the specified eBay member checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdatePaymentInformation
     */
    Order.prototype.updatePaymentInfo = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/checkout_session/" + sessionId + "/update_payment_info", body);
    };
    /**
     * This method changes the quantity of the specified line item in an eBay member checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdateQuantity
     */
    Order.prototype.updateQuantity = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/checkout_session/" + sessionId + "/update_quantity", body);
    };
    /**
     * This method changes the quantity of the specified line item in an eBay member checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdateQuantity
     */
    Order.prototype.checkoutSessionId = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/checkout_session/" + sessionId + "/update_quantity", body);
    };
    /**
     * This method changes the shipping address for in an eBay member checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body ShippingAddressImpl
     */
    Order.prototype.updateShippingAddress = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/checkout_session/" + sessionId + "/update_shipping_address", body);
    };
    /**
     * This method changes the shipping method for the specified line item in an eBay member checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdateShippingOption
     */
    Order.prototype.updateShippingOption = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/checkout_session/" + sessionId + "/update_shipping_option", body);
    };
    /**
     * (Limited Release) You must be whitelisted to use this method. This method adds a coupon to an eBay guest
     * checkout
     *  session and applies it to all the eligible items in the order.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body CouponRequest
     */
    Order.prototype.applyGuestCoupon = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/guest_checkout_session/" + sessionId + "/apply_coupon", body);
    };
    /**
     * This method returns the details of the specified guest checkout session. The checkoutSessionId is passed in as a
     * URI parameter and is required.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     */
    Order.prototype.getGuestCheckoutSession = function (checkoutSessionId) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.get("/guest_checkout_session/" + sessionId);
    };
    /**
     * This method creates an eBay guest checkout session, which is the first step in performing a checkout.
     *
     * @param body CheckoutSessionRequest
     */
    Order.prototype.initiateGuestCheckoutSession = function (body) {
        return this.post("/guest_checkout_session/initiate", body);
    };
    /**
     * This method is used only in the PayPal Smart Button eBay guest payment flow.
     *
     *  @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     *  @param body InitiatePaymentRequest
     */
    Order.prototype.initiateGuestPayment = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/guest_checkout_session/" + sessionId + "/initiate_payment", body);
    };
    /**
     * This method creates the purchase order, pays for the items, and terminates the specified guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body GuestPlaceOrderRequest
     */
    Order.prototype.placeGuestOrder = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/guest_checkout_session/" + sessionId + "/place_order", body);
    };
    /**
     * (Limited Release) You must be whitelisted to use this method. This method removes a coupon from an eBay guest
     * checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body CouponRequest
     */
    Order.prototype.removeGuestCoupon = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/guest_checkout_session/" + sessionId + "/remove_coupon", body);
    };
    /**
     * This method changes the payment method information of the specified guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdatePaymentInformation
     */
    Order.prototype.updateGuestPaymentInfo = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/guest_checkout_session/" + sessionId + "/update_payment_info", body);
    };
    /**
     * This method changes the quantity of the specified line item in an eBay guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdateQuantity
     */
    Order.prototype.updateGuestQuantity = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/guest_checkout_session/" + sessionId + "/update_quantity", body);
    };
    /**
     * This method changes the shipping address for the order in an eBay guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body ShippingAddressImpl
     */
    Order.prototype.updateGuestShippingAddress = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/guest_checkout_session/" + sessionId + "/update_shipping_address", body);
    };
    /**
     * This method changes the shipping method for the specified line item in an eBay guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdateShippingOption
     */
    Order.prototype.updateGuestShippingOption = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/guest_checkout_session/" + sessionId + "/update_shipping_option", body);
    };
    /**
     * (Limited Release) You must be whitelisted to use this method. This method adds a coupon to an eBay proxy guest
     * checkout session and applies it to all the eligible items in the order.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body CouponRequest
     */
    Order.prototype.applyProxyGuestCoupon = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/proxy_guest_checkout_session/" + sessionId + "/apply_coupon", body);
    };
    /**
     * This method returns the details of the specified eBay proxy guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     */
    Order.prototype.getProxyGuestCheckoutSession = function (checkoutSessionId) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.get("/proxy_guest_checkout_session/" + sessionId);
    };
    /**
     * This method creates an eBay proxy guest checkout session, which is a payment flow that requires integration
     * with a VSP (vault service provider), such as Braintree. The VSP handles only the methods within this flow that
     * contain payment information.
     *
     * @param body CheckoutSessionRequest
     */
    Order.prototype.initiateProxyGuestCheckoutSession = function (body) {
        return this.post("/proxy_guest_checkout_session/initiate", body);
    };
    /**
     * This method creates the proxy guest purchase order, pays for the items, and terminates the specified guest
     * checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body GuestPlaceOrderRequest
     */
    Order.prototype.placeProxyGuestOrder = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/proxy_guest_checkout_session/" + sessionId + "/place_order", body);
    };
    /**
     * (Limited Release) You must be whitelisted to use this method. This method removes a coupon from an eBay proxy
     * guest checkout session. The checkoutSessionId is passed in as a URI parameter and is required.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body CouponRequest
     */
    Order.prototype.removeProxyGuestCoupon = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/proxy_guest_checkout_session/" + sessionId + "/remove_coupon", body);
    };
    /**
     * This method adds or changes the payment information of the specified proxy guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param authorization The oAuth2 token. Note: The eBay partner must include this header in the request.
     * @param date The UTC timestamp of the request, which is generated and added to the request by the VSP.
     * @param marketplaceId The eBay marketplace ID. For a list of supported sites, see API Restrictions in the Order
     *     API overview. Note: The eBay partner must include this header in the request.
     * @param requestNonce A UUID (a 128-bit universal unique ID), which is generated and added to the request by the
     *     VSP.
     * @param signature The HMAC signature, which is generated and added to the request by the VSP.
     * @param body UpdatePaymentInformation
     */
    Order.prototype.updateProxyGuestPaymentInfo = function (checkoutSessionId, authorization, date, marketplaceId, requestNonce, signature, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/proxy_guest_checkout_session/" + sessionId + "/update_payment_info", body, {
            headers: {
                'Authorization': authorization,
                'X-EBAY-C-DATE': date,
                'X-EBAY-C-MARKETPLACE-ID': marketplaceId,
                'X-EBAY-C-REQUEST-NONCE': requestNonce,
                'X-EBAY-C-SIGNATURE': signature
            }
        });
    };
    /**
     * This method changes the quantity of the specified line item in an eBay proxy guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdateQuantity
     */
    Order.prototype.updateProxyGuestQuantity = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/proxy_guest_checkout_session/" + sessionId + "/update_quantity", body);
    };
    /**
     * This method changes the shipping address for the order in an eBay proxy guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body ShippingAddressImpl
     */
    Order.prototype.updateProxyGuestShippingAddress = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/proxy_guest_checkout_session/" + sessionId + "/update_shipping_address", body);
    };
    /**
     * This method changes the shipping method for the specified line item in an eBay proxy guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdateShippingOption
     */
    Order.prototype.updateProxyGuestShippingOption = function (checkoutSessionId, body) {
        var sessionId = encodeURIComponent(checkoutSessionId);
        return this.post("/proxy_guest_checkout_session/" + sessionId + "/update_shipping_option", body);
    };
    /**
     * This method retrieves the details about a specific guest purchase order.
     *
     * @param purchaseOrderId The unique identifier of a purchase order made by a guest buyer, for which details are to
     *     be retrieved.
     */
    Order.prototype.getGuestPurchaseOrder = function (purchaseOrderId) {
        var id = encodeURIComponent(purchaseOrderId);
        return this.get("/guest_purchase_order/" + id);
    };
    /**
     * This method retrieves the details about a specific eBay member purchase order.
     *
     * @param purchaseOrderId The unique identifier of a purchase order made by an eBay member, for which details are
     *     to be retrieved.
     */
    Order.prototype.getPurchaseOrder = function (purchaseOrderId) {
        var id = encodeURIComponent(purchaseOrderId);
        return this.get("/purchase_order/" + id);
    };
    return Order;
}(__1.default));
exports.default = Order;
//# sourceMappingURL=index.js.map