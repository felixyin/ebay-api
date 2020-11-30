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
 * Post-Order Inquiry API
 */
var Inquiry = /** @class */ (function (_super) {
    __extends(Inquiry, _super);
    function Inquiry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Inquiry.prototype, "basePath", {
        get: function () {
            return '/post-order/v2/inquiry';
        },
        enumerable: false,
        configurable: true
    });
    Inquiry.prototype.useIaf = function () {
        return true;
    };
    /**
     * Check if a buyer is eligible to open an inquiry on an order.
     *
     * @param payload the CheckInquiryEligibilityRequest
     */
    Inquiry.prototype.checkInquiryEligibility = function (payload) {
        return this.post("/check_eligibility", payload);
    };
    /**
     * Close an inquiry for the buyer
     *
     * @param inquiryId The unique ID of the inquiry to be closed.
     * @param payload the BuyerCloseInquiryRequest
     */
    Inquiry.prototype.closeInquiry = function (inquiryId, payload) {
        var id = encodeURIComponent(inquiryId);
        if (payload && payload.closeReason) {
            payload.closeReason = payload.closeReason.trim();
        }
        return this.post("/" + id + "/close", payload);
    };
    /**
     * Buyer confirms the refund from an inquiry was received
     *
     * @param inquiryId The unique identifier of a case.
     */
    Inquiry.prototype.confirmInquiryRefund = function (inquiryId) {
        var id = encodeURIComponent(inquiryId);
        return this.post("/" + id + "/confirm_refund");
    };
    /**
     * Create an inquiry for the buyer.
     *
     * @param payload the CreateInquiryRequest
     */
    Inquiry.prototype.createInquiry = function (payload) {
        if (payload.desiredOutcome) {
            payload.desiredOutcome = payload.desiredOutcome.trim();
        }
        return this.post("", payload);
    };
    /**
     * Escalate an inquiry to an INR case.
     *
     * @param inquiryId the unique identifier of the inquiry to be escalated.
     * @param payload the EscalateInquiryRequest
     */
    Inquiry.prototype.escalateInquiry = function (inquiryId, payload) {
        var id = encodeURIComponent(inquiryId);
        payload.escalateInquiryReason = payload.escalateInquiryReason.trim();
        return this.post("/" + id + "/escalate", payload);
    };
    /**
     * Retrieve the history and details related to a specific inquiry.
     *
     * @param inquiryId the unique ID of the inquiry for which details and history are to be retrieved.
     */
    Inquiry.prototype.getInquiry = function (inquiryId) {
        var id = encodeURIComponent(inquiryId);
        return this.get("/" + id);
    };
    /**
     * Issue a refund for an inquiry.
     *
     * @param inquiryId the unique ID of the inquiry for which a refund is to be issued.
     * @param payload   the InquiryVoluntaryRefundRequest
     */
    Inquiry.prototype.issueInquiryRefund = function (inquiryId, payload) {
        var id = encodeURIComponent(inquiryId);
        return this.post("/" + id + "/issue_refund", payload);
    };
    /**
     * Provide refund information about an inquiry to the buyer.
     *
     * @param inquiryId The unique ID of the inquiry for which to provide refund information.
     * @param payload   the InquiryVoluntaryRefundRequest
     */
    Inquiry.prototype.provideInquiryRefundInfo = function (inquiryId, payload) {
        var id = encodeURIComponent(inquiryId);
        return this.post("/" + id + "/provide_refund_info", payload);
    };
    /**
     * Provide shipment information for an inquiry.
     *
     * @param inquiryId The unique ID of the inquiry for which to provide shipment information.
     * @param payload the  ShipmentInfoRequest
     */
    Inquiry.prototype.provideInquiryShipmentInfo = function (inquiryId, payload) {
        var id = encodeURIComponent(inquiryId);
        return this.post("/" + id + "/provide_shipment_info", payload);
    };
    /**
     * This call is used to search for inquiries using multiple filter types.
     *
     * @param params the  InquirySearchParams
     */
    Inquiry.prototype.search = function (params) {
        return this.get("/search", {
            params: params
        });
    };
    /**
     * Contact the buyer or seller about an inquiry.
     *
     * @param inquiryId The unique ID of the inquiry being discussed.
     * @param payload the SendMessageRequest
     */
    Inquiry.prototype.sendInquiryMessage = function (inquiryId, payload) {
        var id = encodeURIComponent(inquiryId);
        return this.post("/" + id + "/send_message", payload);
    };
    return Inquiry;
}(__1.default));
exports.default = Inquiry;
//# sourceMappingURL=index.js.map