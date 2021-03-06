import Api from '../../';
import { CheckoutSessionRequest, CouponRequest, CreateSignInCheckoutSessionRequest, GuestPlaceOrderRequest, InitiatePaymentRequest, ShippingAddressImpl, UpdatePaymentInformation, UpdateQuantity, UpdateShippingOption } from '../../../../types/restfulTypes';
/**
 * The Order API provides interfaces that lets shoppers pay for items (for both eBay guest and eBay member buyers).
 * Client Credentials: https://api.ebay.com/oauth/api_scope/buy.order
 */
export default class Order extends Api {
    get basePath(): string;
    /**
     * (Limited Release) You must be whitelisted to use this method.
     * This method adds a coupon to an eBay proxy guest checkout session and applies it to all the eligible items in
     * the order.
     *
     * @param {String} checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is
     *     returned by the initiateCheckoutSession method.
     * @param body The container for the fields used to apply a coupon to a checkout session.
     */
    applyCoupon(checkoutSessionId: string, body: CouponRequest): Promise<any>;
    /**
     * This method returns the details of the specified eBay member checkout session.
     *
     * @param {String} checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is
     *     returned by the initiateCheckoutSession method.
     */
    getCheckoutSession(checkoutSessionId: string): Promise<any>;
    /**
     * This method creates a eBay member checkout session, which is the first step in performing a checkout.
     *
     * @param body The container for the fields used by the initiateCheckoutSession method.
     */
    initiateCheckoutSession(body?: CreateSignInCheckoutSessionRequest): Promise<any>;
    /**
     * This method creates the purchase order, pays for the items, and terminates the specified eBay member checkout
     * session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     */
    placeOrder(checkoutSessionId: string): Promise<any>;
    /**
     * (Limited Release) You must be whitelisted to use this method. This method removes a coupon from an eBay member
     * checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body CouponRequest
     */
    removeCoupon(checkoutSessionId: string, body?: CouponRequest): Promise<any>;
    /**
     * This method changes the payment method information of the specified eBay member checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdatePaymentInformation
     */
    updatePaymentInfo(checkoutSessionId: string, body?: UpdatePaymentInformation): Promise<any>;
    /**
     * This method changes the quantity of the specified line item in an eBay member checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdateQuantity
     */
    updateQuantity(checkoutSessionId: string, body?: UpdateQuantity): Promise<any>;
    /**
     * This method changes the quantity of the specified line item in an eBay member checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdateQuantity
     */
    checkoutSessionId(checkoutSessionId: string, body?: UpdateQuantity): Promise<any>;
    /**
     * This method changes the shipping address for in an eBay member checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body ShippingAddressImpl
     */
    updateShippingAddress(checkoutSessionId: string, body?: ShippingAddressImpl): Promise<any>;
    /**
     * This method changes the shipping method for the specified line item in an eBay member checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdateShippingOption
     */
    updateShippingOption(checkoutSessionId: string, body?: UpdateShippingOption): Promise<any>;
    /**
     * (Limited Release) You must be whitelisted to use this method. This method adds a coupon to an eBay guest
     * checkout
     *  session and applies it to all the eligible items in the order.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body CouponRequest
     */
    applyGuestCoupon(checkoutSessionId: string, body?: CouponRequest): Promise<any>;
    /**
     * This method returns the details of the specified guest checkout session. The checkoutSessionId is passed in as a
     * URI parameter and is required.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     */
    getGuestCheckoutSession(checkoutSessionId: string): Promise<any>;
    /**
     * This method creates an eBay guest checkout session, which is the first step in performing a checkout.
     *
     * @param body CheckoutSessionRequest
     */
    initiateGuestCheckoutSession(body?: CheckoutSessionRequest): Promise<any>;
    /**
     * This method is used only in the PayPal Smart Button eBay guest payment flow.
     *
     *  @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     *  @param body InitiatePaymentRequest
     */
    initiateGuestPayment(checkoutSessionId: string, body?: InitiatePaymentRequest): Promise<any>;
    /**
     * This method creates the purchase order, pays for the items, and terminates the specified guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body GuestPlaceOrderRequest
     */
    placeGuestOrder(checkoutSessionId: string, body?: GuestPlaceOrderRequest): Promise<any>;
    /**
     * (Limited Release) You must be whitelisted to use this method. This method removes a coupon from an eBay guest
     * checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body CouponRequest
     */
    removeGuestCoupon(checkoutSessionId: string, body?: CouponRequest): Promise<any>;
    /**
     * This method changes the payment method information of the specified guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdatePaymentInformation
     */
    updateGuestPaymentInfo(checkoutSessionId: string, body?: UpdatePaymentInformation): Promise<any>;
    /**
     * This method changes the quantity of the specified line item in an eBay guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdateQuantity
     */
    updateGuestQuantity(checkoutSessionId: string, body?: UpdateQuantity): Promise<any>;
    /**
     * This method changes the shipping address for the order in an eBay guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body ShippingAddressImpl
     */
    updateGuestShippingAddress(checkoutSessionId: string, body?: ShippingAddressImpl): Promise<any>;
    /**
     * This method changes the shipping method for the specified line item in an eBay guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdateShippingOption
     */
    updateGuestShippingOption(checkoutSessionId: string, body?: UpdateShippingOption): Promise<any>;
    /**
     * (Limited Release) You must be whitelisted to use this method. This method adds a coupon to an eBay proxy guest
     * checkout session and applies it to all the eligible items in the order.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body CouponRequest
     */
    applyProxyGuestCoupon(checkoutSessionId: string, body?: CouponRequest): Promise<any>;
    /**
     * This method returns the details of the specified eBay proxy guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     */
    getProxyGuestCheckoutSession(checkoutSessionId: string): Promise<any>;
    /**
     * This method creates an eBay proxy guest checkout session, which is a payment flow that requires integration
     * with a VSP (vault service provider), such as Braintree. The VSP handles only the methods within this flow that
     * contain payment information.
     *
     * @param body CheckoutSessionRequest
     */
    initiateProxyGuestCheckoutSession(body?: CheckoutSessionRequest): Promise<any>;
    /**
     * This method creates the proxy guest purchase order, pays for the items, and terminates the specified guest
     * checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body GuestPlaceOrderRequest
     */
    placeProxyGuestOrder(checkoutSessionId: string, body?: GuestPlaceOrderRequest): Promise<any>;
    /**
     * (Limited Release) You must be whitelisted to use this method. This method removes a coupon from an eBay proxy
     * guest checkout session. The checkoutSessionId is passed in as a URI parameter and is required.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body CouponRequest
     */
    removeProxyGuestCoupon(checkoutSessionId: string, body?: CouponRequest): Promise<any>;
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
    updateProxyGuestPaymentInfo(checkoutSessionId: string, authorization: string, date: string, marketplaceId: string, requestNonce: string, signature: string, body?: UpdatePaymentInformation): Promise<any>;
    /**
     * This method changes the quantity of the specified line item in an eBay proxy guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdateQuantity
     */
    updateProxyGuestQuantity(checkoutSessionId: string, body?: UpdateQuantity): Promise<any>;
    /**
     * This method changes the shipping address for the order in an eBay proxy guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body ShippingAddressImpl
     */
    updateProxyGuestShippingAddress(checkoutSessionId: string, body?: ShippingAddressImpl): Promise<any>;
    /**
     * This method changes the shipping method for the specified line item in an eBay proxy guest checkout session.
     *
     * @param checkoutSessionId The eBay-assigned session ID, for a specific eBay marketplace, that is returned by the
     *     initiateCheckoutSession method.
     * @param body UpdateShippingOption
     */
    updateProxyGuestShippingOption(checkoutSessionId: string, body?: UpdateShippingOption): Promise<any>;
    /**
     * This method retrieves the details about a specific guest purchase order.
     *
     * @param purchaseOrderId The unique identifier of a purchase order made by a guest buyer, for which details are to
     *     be retrieved.
     */
    getGuestPurchaseOrder(purchaseOrderId: string): Promise<any>;
    /**
     * This method retrieves the details about a specific eBay member purchase order.
     *
     * @param purchaseOrderId The unique identifier of a purchase order made by an eBay member, for which details are
     *     to be retrieved.
     */
    getPurchaseOrder(purchaseOrderId: string): Promise<any>;
}
