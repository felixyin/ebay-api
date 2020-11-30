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
 * The Metadata API has operations that retrieve configuration details pertaining to the different eBay marketplaces.
 */
var Metadata = /** @class */ (function (_super) {
    __extends(Metadata, _super);
    function Metadata() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Metadata.prototype, "basePath", {
        get: function () {
            return '/sell/metadata/v1';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * This method retrieves all the sales tax jurisdictions for the country that you specify in the countryCode path
     * parameter.
     *
     * @param countryCode This path parameter specifies the two-letter ISO 3166-1 Alpha-2 country code for the country
     *     whose jurisdictions you want to retrieve.
     */
    Metadata.prototype.getSalesTaxJurisdictions = function (countryCode) {
        countryCode = encodeURIComponent(countryCode);
        return this.get("/country/" + countryCode + "/sales_tax_jurisdiction");
    };
    /**
     * This method returns the eBay policies that define how to list automotive-parts-compatibility items in the
     * categories of a specific marketplace.
     *
     * @param marketplaceId This path parameter specifies the eBay marketplace for which policy information is
     *     retrieved.
     * @param filter This query parameter limits the response by returning eBay policy information for only the leaf
     *     categories specified by this parameter.
     */
    Metadata.prototype.getAutomotivePartsCompatibilityPolicies = function (marketplaceId, filter) {
        marketplaceId = encodeURIComponent(marketplaceId);
        return this.get("/marketplace/" + marketplaceId + "/get_automotive_parts_compatibility_policies", {
            params: {
                filter: filter
            }
        });
    };
    /**
     * This method returns the eBay policies that define how to specify item conditions in the categories of a specific
     * marketplace.
     *
     * @param marketplaceId This path parameter specifies the eBay marketplace for which policy information is
     *     retrieved.
     * @param filter This query parameter limits the response by returning eBay policy information for only the leaf
     *     categories specified by this parameter.
     */
    Metadata.prototype.getItemConditionPolicies = function (marketplaceId, filter) {
        marketplaceId = encodeURIComponent(marketplaceId);
        return this.get("/marketplace/" + marketplaceId + "/get_item_condition_policies", {
            params: {
                filter: filter
            }
        });
    };
    /**
     * This method returns the eBay policies that define the allowed listing structures for the categories of a
     * specific marketplace.
     *
     * @param marketplaceId This path parameter specifies the eBay marketplace for which policy information is
     *     retrieved.
     * @param filter This query parameter limits the response by returning eBay policy information for only the leaf
     *     categories specified by this parameter.
     */
    Metadata.prototype.getListingStructurePolicies = function (marketplaceId, filter) {
        marketplaceId = encodeURIComponent(marketplaceId);
        return this.get("/marketplace/" + marketplaceId + "/get_listing_structure_policies", {
            params: {
                filter: filter
            }
        });
    };
    /**
     * This method returns the eBay policies that define the supported negotiated price features (like &quot;best
     * offer&quot;) for the categories of a specific marketplace.
     *
     * @param marketplaceId This path parameter specifies the eBay marketplace for which policy information is
     *     retrieved.
     * @param filter This query parameter limits the response by returning eBay policy information for only the leaf
     *     categories specified by this parameter.
     */
    Metadata.prototype.getNegotiatedPricePolicies = function (marketplaceId, filter) {
        marketplaceId = encodeURIComponent(marketplaceId);
        return this.get("/marketplace/" + marketplaceId + "/get_negotiated_price_policies", {
            params: {
                filter: filter
            }
        });
    };
    /**
     * This method retrieves a list of leaf categories for a marketplace and identifies the categories that require
     * items to have an eBay product ID value in order to be listed in those categories.
     *
     * @param marketplaceId This path parameter specifies the eBay marketplace for which policy information is
     *     retrieved.
     * @param filter This query parameter limits the response by returning eBay policy information for only the leaf
     *     categories specified by this parameter.
     */
    Metadata.prototype.getProductAdoptionPolicies = function (marketplaceId, filter) {
        marketplaceId = encodeURIComponent(marketplaceId);
        return this.get("/marketplace/" + marketplaceId + "/get_product_adoption_policies", {
            params: {
                filter: filter
            }
        });
    };
    /**
     * This method returns the eBay policies that define whether or not you must include a return policy for the
     * items you list in the categories of a specific marketplace, plus the guidelines for creating domestic and
     * international return policies in the different eBay categories.
     *
     * @param marketplaceId This path parameter specifies the eBay marketplace for which policy information is
     *     retrieved.
     * @param filter This query parameter limits the response by returning eBay policy information for only the leaf
     *     categories specified by this parameter.
     */
    Metadata.prototype.getReturnPolicies = function (marketplaceId, filter) {
        marketplaceId = encodeURIComponent(marketplaceId);
        return this.get("/marketplace/" + marketplaceId + "/get_return_policies", {
            params: {
                filter: filter
            }
        });
    };
    return Metadata;
}(__1.default));
exports.default = Metadata;
//# sourceMappingURL=index.js.map