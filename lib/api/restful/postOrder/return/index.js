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
 * Post-Order Return API
 */
var Return = /** @class */ (function (_super) {
    __extends(Return, _super);
    function Return() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Return.prototype, "basePath", {
        get: function () {
            return '/post-order/v2/return';
        },
        enumerable: false,
        configurable: true
    });
    Return.prototype.useIaf = function () {
        return true;
    };
    /**
     * Create or update a shipping label provided by the seller.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload the ProvideLabelRequest
     */
    Return.prototype.addShippingLabelInfo = function (returnId, payload) {
        var id = encodeURIComponent(returnId);
        return this.post("/" + id + "/add_shipping_label", payload);
    };
    /**
     * Cancel a return request.
     *
     * @param returnId    The unique eBay-assigned ID of the return request.
     * @param payload    The CloseReturnRequest.
     */
    Return.prototype.cancelReturnRequest = function (returnId, payload) {
        var id = encodeURIComponent(returnId);
        if (payload && payload.buyerCloseReason) {
            payload.buyerCloseReason = payload.buyerCloseReason.trim();
        }
        return this.post("/" + id + "/cancel", payload);
    };
    /**
     * Check to see if an item is eligible for a return.
     *
     * @param payload the CheckEligibilityRequest
     */
    Return.prototype.checkReturnEligibility = function (payload) {
        return this.post("/check_eligibility", payload);
    };
    /**
     * Validate the eligibility of an existing shipping label.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     */
    Return.prototype.checkShippingLabelEligibility = function (returnId) {
        var id = encodeURIComponent(returnId);
        return this.get("/" + id + "/check_label_print_eligibility");
    };
    /**
     * Create a return draft.
     *
     * @param payload the SetReturnCreationSessionRequest
     */
    Return.prototype.createReturnDraft = function (payload) {
        return this.post("/draft", payload);
    };
    /**
     * Request a return for an item.
     *
     * @param payload the CreateReturnRequest
     * @param fieldGroups can be used in the call URI to control the detail level that is returned in response.
     */
    Return.prototype.createReturnRequest = function (payload, fieldGroups) {
        return this.post("", payload, {
            params: {
                fieldgroups: fieldGroups
            }
        });
    };
    /**
     * Create an eBay shipping label for the buyer.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     */
    Return.prototype.createReturnShippingLabel = function (returnId) {
        var id = encodeURIComponent(returnId);
        return this.post("/" + id + "/initiate_shipping_label");
    };
    /**
     * Delete a file associated with a return draft.
     *
     * @param draftId    The unique eBay-assigned ID of the return draft.
     * @param fileId The unique eBay-assigned ID of the draft file.
     */
    Return.prototype.deleteReturnDraftFile = function (draftId, fileId) {
        var dId = encodeURIComponent(draftId);
        var fId = encodeURIComponent(fileId);
        return this.delete("/draft/" + dId + "/file/" + fId);
    };
    /**
     * Escalate an existing return to eBay customer support.
     *
     * @param returnId The unique eBay-assigned ID of the return request.
     * @param payload the EscalateRequest
     */
    Return.prototype.escalateReturn = function (returnId, payload) {
        var id = encodeURIComponent(returnId);
        return this.post("/" + id + "/escalate", payload);
    };
    /**
     * Retrieve the details of a specific return.
     *
     * @param returnId The unique eBay-assigned ID of the return request.
     * @param fieldGroups can be used in the call URI to control the detail level that is returned in response.
     */
    Return.prototype.getReturn = function (returnId, fieldGroups) {
        var id = encodeURIComponent(returnId);
        return this.get("/" + id, {
            params: {
                fieldgroups: fieldGroups
            }
        });
    };
    /**
     * Retrieve a return draft.
     *
     * @param returnId The unique eBay-assigned ID of the return request.
     */
    Return.prototype.getReturnDraft = function (returnId) {
        var id = encodeURIComponent(returnId);
        return this.get("/draft/" + id);
    };
    /**
     * Retrieve the files associated with a return draft.
     *
     * @param returnId    The unique eBay-assigned ID of the return draft.
     */
    Return.prototype.getReturnDraftFiles = function (returnId) {
        var id = encodeURIComponent(returnId);
        return this.get("/draft/" + id + "/files");
    };
    /**
     * Retrieve the cost estimate of a refund with its shipping cost.
     *
     * @param payload the GetEstimateRequest
     */
    Return.prototype.getReturnEstimate = function (payload) {
        return this.post("/estimate", payload);
    };
    /**
     * Retrieve the cost estimate of a refund with its shipping cost.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     */
    Return.prototype.getReturnFiles = function (returnId) {
        var id = encodeURIComponent(returnId);
        return this.get("/" + id + "/files");
    };
    /**
     * Retrieve seller's return preferences.
     */
    Return.prototype.getReturnPreferences = function () {
        return this.get("/preference");
    };
    /**
     * Retrieve the data for an existing shipping label.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     */
    Return.prototype.getReturnShippingLabel = function (returnId) {
        var id = encodeURIComponent(returnId);
        return this.get("/" + id + "/get_shipping_label");
    };
    /**
     * Retrieve shipment tracking activity for a return.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param carrierUsed The shipping carrier used to to ship the package.
     * @param trackingNumber The tracking number of the package.
     */
    Return.prototype.getShipmentTrackingInfo = function (returnId, carrierUsed, trackingNumber) {
        var id = encodeURIComponent(returnId);
        return this.get("/" + id + "/tracking", {
            params: {
                carrier_used: carrierUsed,
                tracking_number: trackingNumber
            }
        });
    };
    /**
     * Issue a refund.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload The IssueRefundRequest.
     */
    Return.prototype.issueReturnRefund = function (returnId, payload) {
        var id = encodeURIComponent(returnId);
        return this.post("/" + id + "/issue_refund", payload);
    };
    /**
     * Mark a returned item as received.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload the MarkAsReceivedRequest
     */
    Return.prototype.markReturnReceived = function (returnId, payload) {
        var id = encodeURIComponent(returnId);
        return this.post("/" + id + "/mark_as_received", payload);
    };
    /**
     * Mark a refund as received.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     */
    Return.prototype.markReturnRefundReceived = function (returnId) {
        var id = encodeURIComponent(returnId);
        return this.post("/" + id + "/mark_refund_received");
    };
    /**
     * Notify the buyer that a refund has been issued.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload the MarkRefundSentRequest
     */
    Return.prototype.markReturnRefundSent = function (returnId, payload) {
        var id = encodeURIComponent(returnId);
        return this.post("/" + id + "/mark_refund_sent", payload);
    };
    /**
     * Mark a return as shipped.
     *
     * @param returnId    The unique eBay-assigned ID of the return.
     * @param payload the MarkAsShippedRequest
     */
    Return.prototype.markReturnShipped = function (returnId, payload) {
        var id = encodeURIComponent(returnId);
        return this.post("/" + id + "/mark_as_shipped", payload);
    };
    /**
     * Perform an action on a return, such as APPROVE.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload the DecideReturnRequest
     */
    Return.prototype.processReturnRequest = function (returnId, payload) {
        var id = encodeURIComponent(returnId);
        return this.post("/" + id + "/decide", payload);
    };
    /**
     * Retrieve details on items being returned.
     *
     * @param params the SearchReturnParams
     */
    Return.prototype.search = function (params) {
        return this.post("/search", {
            params: params
        });
    };
    /**
     * Send a message to the buyer or seller regarding a return.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload the SendMessageRequest
     */
    Return.prototype.sendReturnMessage = function (returnId, payload) {
        var id = encodeURIComponent(returnId);
        return this.post("/" + id + "/send_message", payload);
    };
    /**
     * Send a shipping label to an email address.
     *
     * @param returnId    The unique eBay-assigned ID of the return.
     * @param toEmailAddress The recipient's email address is specified in this field.
     */
    Return.prototype.sendReturnShippingLabel = function (returnId, toEmailAddress) {
        var id = encodeURIComponent(returnId);
        return this.post("/" + id + "/send_shipping_label", {}, {
            params: {
                to_email_address: toEmailAddress
            }
        });
    };
    /**
     * Send a shipping label to an email address.
     *
     * @param rmaRequired This field is included and set to true if the seller wishes to require that the buyer provide
     *     a Return Merchandise Authorization (RMA) when returning an item.
     */
    Return.prototype.setReturnPreferences = function (rmaRequired) {
        return this.post("/preference", {
            rmaRequired: rmaRequired
        });
    };
    /**
     * Activate the files associated with a return.
     *
     * @param returnId    The unique eBay-assigned ID of the return.
     * @param filePurpose This value is used to indicate if the file(s) are being used to provide more information
     *     about the condition of the item, or intended to provide more information about shipment tracking or about
     *     the shipping label.
     */
    Return.prototype.submitReturnFile = function (returnId, filePurpose) {
        var id = encodeURIComponent(returnId);
        return this.post("/" + id + "/file/submit", {
            filePurpose: filePurpose
        });
    };
    /**
     * Update an existing return draft.
     *
     * @param draftId The unique eBay-assigned ID of the return draft.
     * @param returnRequest the ReturnRequestType
     */
    Return.prototype.updateReturnDraft = function (draftId, returnRequest) {
        var id = encodeURIComponent(draftId);
        return this.put("/draft/" + id, {
            returnRequest: returnRequest
        });
    };
    /**
     * Update shipment tracking information.
     *
     * @param returnId The unique eBay-assigned ID of the return request.
     * @param payload the UpdateTrackingRequest
     */
    Return.prototype.updateShipmentTrackingInfo = function (returnId, payload) {
        var id = encodeURIComponent(returnId);
        return this.put("/" + id + "/update_tracking", payload);
    };
    /**
     * Upload the files relating to a return draft.
     *
     * @param draftId The unique eBay-assigned ID of the return draft.
     * @param payload the UploadFileRequest
     */
    Return.prototype.uploadReturnDraftFile = function (draftId, payload) {
        var id = encodeURIComponent(draftId);
        return this.post("/" + id + "/draft/file/upload", payload);
    };
    /**
     * Upload the files relating to a return.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload the UploadFileRequest
     */
    Return.prototype.uploadReturnFile = function (returnId, payload) {
        var id = encodeURIComponent(returnId);
        return this.post("/" + id + "/file/upload", payload);
    };
    /**
     * Void a shipping label.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload the VoidLabelRequest
     */
    Return.prototype.voidShippingLabel = function (returnId, payload) {
        var id = encodeURIComponent(returnId);
        return this.post("/" + id + "/void_shipping_label", payload);
    };
    return Return;
}(__1.default));
exports.default = Return;
//# sourceMappingURL=index.js.map