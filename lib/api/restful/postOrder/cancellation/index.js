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
 * Post-Order Cancellation API
 */
var Cancellation = /** @class */ (function (_super) {
    __extends(Cancellation, _super);
    function Cancellation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Cancellation.prototype, "basePath", {
        get: function () {
            return '/post-order/v2/cancellation';
        },
        enumerable: false,
        configurable: true
    });
    Cancellation.prototype.useIaf = function () {
        return true;
    };
    /**
     * Seller approves a cancellation request
     *
     * @param cancelId The unique eBay-assigned identifier of the cancellation request to be approved.
     */
    Cancellation.prototype.approveCancellationRequest = function (cancelId) {
        var id = encodeURIComponent(cancelId);
        return this.post("/" + id + "/approve");
    };
    /**
     * Check the eligibility of an order cancellation
     *
     * @param legacyOrderId The unique ID of the order being canceled or the order being considered for cancellation.
     */
    Cancellation.prototype.checkCancellationEligibility = function (legacyOrderId) {
        return this.post("/check_eligibility", {
            legacyOrderId: legacyOrderId
        });
    };
    /**
     * Buyer confirms the refund from a cancellation was received
     *
     * @param cancelId The unique eBay-assigned identifier of the cancellation/refund being confirmed.
     * @param payload the ConfirmRefundReceivedPayload
     */
    Cancellation.prototype.confirmRefundReceived = function (cancelId, payload) {
        var id = encodeURIComponent(cancelId);
        return this.post("/" + id + "/confirm", payload);
    };
    /**
     * Request or perform an order cancellation.
     *
     * @param payload the CreateCancelRequest
     */
    Cancellation.prototype.createCancellation = function (payload) {
        return this.post("/cancellation/", payload);
    };
    /**
     * Retrieve the details of an order cancellation.
     *
     * @param cancelId Supply in this path parameter the unique eBay-assigned ID of the cancellation request to
     *     retrieve.
     * @param fieldGroups    The value set in this query parameter controls the level of detail that is returned in the
     *     response.
     */
    Cancellation.prototype.getCancellation = function (cancelId, fieldGroups) {
        var id = encodeURIComponent(cancelId);
        return this.get("/" + id, {
            params: {
                fieldgroups: fieldGroups
            }
        });
    };
    /**
     * Seller rejects a cancellation request.
     *
     * @param cancelId The unique eBay-assigned identifier of the cancellation request to be rejected.
     * @param payload the RejectCancelRequest
     */
    Cancellation.prototype.rejectCancellationRequest = function (cancelId, payload) {
        var id = encodeURIComponent(cancelId);
        return this.post("/" + id + "/reject", payload);
    };
    /**
     * Search for cancellations.
     *
     * @param params the SearchParams
     */
    Cancellation.prototype.search = function (params) {
        return this.get("/search", {
            params: {
                params: params
            }
        });
    };
    return Cancellation;
}(__1.default));
exports.default = Cancellation;
//# sourceMappingURL=index.js.map