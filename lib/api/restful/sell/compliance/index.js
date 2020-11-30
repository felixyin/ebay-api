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
 * Service for providing the compliance violations of seller account/listings
 */
var Compliance = /** @class */ (function (_super) {
    __extends(Compliance, _super);
    function Compliance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Compliance.prototype, "basePath", {
        get: function () {
            return '/sell/compliance/v1';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * This call returns listing violation counts for a seller.
     *
     * @param marketplaceId Use this header to specify the eBay marketplace identifier.
     * @param compliance_type A user passes in one or more compliance type values through this query parameter.
     */
    Compliance.prototype.getListingViolationsSummary = function (_a) {
        var _b = _a === void 0 ? {} : _a, marketplaceId = _b.marketplaceId, complianceType = _b.complianceType;
        var headers = {};
        if (marketplaceId) {
            headers['X-EBAY-C-MARKETPLACE-ID'] = marketplaceId;
        }
        return this.get("/listing_violation_summary", {
            params: {
                compliance_type: complianceType
            },
            headers: headers
        });
    };
    /**
     * This call returns specific listing violations for five different compliance types.
     *
     * @param marketplaceId Use this header to specify the eBay marketplace identifier.
     * @param complianceType A user passes in one or more compliance type values through this query parameter.
     * @param offset The first policy violation to return based on its position in the collection of listing
     *     violations.
     * @param listingId
     * @param limit This query parameter is used if the user wants to set a limit on the number of listing violations
     *     that are returned in the current result set.
     */
    Compliance.prototype.getListingViolations = function (marketplaceId, _a) {
        var _b = _a === void 0 ? {} : _a, complianceType = _b.complianceType, offset = _b.offset, listingId = _b.listingId, limit = _b.limit;
        var headers = {};
        if (marketplaceId) {
            headers['X-EBAY-C-MARKETPLACE-ID'] = marketplaceId;
        }
        return this.get("/listing_violation", {
            params: {
                compliance_type: complianceType,
                offset: offset,
                listing_id: listingId,
                limit: limit
            },
            headers: headers
        });
    };
    return Compliance;
}(__1.default));
exports.default = Compliance;
//# sourceMappingURL=index.js.map