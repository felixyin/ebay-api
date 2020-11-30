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
 * Post-Order Case Management API
 */
var Case = /** @class */ (function (_super) {
    __extends(Case, _super);
    function Case() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Case.prototype, "basePath", {
        get: function () {
            return '/post-order/v2/casemanagement';
        },
        enumerable: false,
        configurable: true
    });
    Case.prototype.useIaf = function () {
        return true;
    };
    /**
     * Buyer or seller appeals a case decision.
     *
     * @param caseId The unique identifier of a case.
     * @param payload the AppealRequest
     */
    Case.prototype.appealCaseDecision = function (caseId, payload) {
        var id = encodeURIComponent(caseId);
        return this.post("/" + id + "/appeal", payload);
    };
    /**
     * Check the eligibility of an order cancellation.
     *
     * @param caseId The unique identifier of a case.
     * @param payload the BuyerCloseCaseRequest
     */
    Case.prototype.closeCase = function (caseId, payload) {
        var id = encodeURIComponent(caseId);
        return this.post("/" + id + "/close", payload);
    };
    /**
     * Retrieve the details related to a specific case.
     *
     * @param caseId The unique identifier of a case.
     */
    Case.prototype.getCase = function (caseId) {
        var id = encodeURIComponent(caseId);
        return this.get("/" + id);
    };
    /**
     * Seller issues a refund for a case.
     *
     * @param caseId The unique identifier of a case.
     * @param payload the CaseVoluntaryRefundRequest (Text)
     */
    Case.prototype.issueCaseRefund = function (caseId, payload) {
        var id = encodeURIComponent(caseId);
        return this.post("/" + id + "/issue_refund", payload);
    };
    /**
     * This call allows the buyer to provide shipment tracking information for the item that is being returned to the
     * seller.
     *
     * @param caseId The unique identifier of a case.
     * @param shippingCarrierName The shipping carrier that is used to ship the item, such as 'FedEx', 'UPS', or
     *     'USPS'.
     * @param trackingNumber The tracking number assigned by the shipping carrier to the item shipment.
     */
    Case.prototype.provideReturnShipmentInfo = function (caseId, _a) {
        var shippingCarrierName = _a.shippingCarrierName, trackingNumber = _a.trackingNumber;
        var id = encodeURIComponent(caseId);
        return this.post("/" + id + "/provide_shipment_info", {
            shippingCarrierName: shippingCarrierName,
            trackingNumber: trackingNumber
        });
    };
    /**
     * Seller provides a return address to the buyer.
     *
     * @param cancelId The unique eBay-assigned identifier of the cancellation request to be rejected.
     * @param payload the ReturnAddressRequest
     */
    Case.prototype.providesReturnAddress = function (cancelId, payload) {
        var id = encodeURIComponent(cancelId);
        return this.post("/" + id + "/provide_return_address", payload);
    };
    /**
     * This call is used to search for cases using multiple filter types.
     *
     * @param params the SearchParams
     */
    Case.prototype.search = function (params) {
        return this.get("/search", {
            params: {
                params: params
            }
        });
    };
    return Case;
}(__1.default));
exports.default = Case;
//# sourceMappingURL=index.js.map