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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require("../../"));
/**
 * Use the Catalog API to search the eBay catalog for products on which to base a seller's item listing;
 */
var Catalog = /** @class */ (function (_super) {
    __extends(Catalog, _super);
    function Catalog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Catalog.prototype, "basePath", {
        get: function () {
            return '/commerce/catalog/v1_beta';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Note: The three catalog change request methods in the Catalog API are deprecated, and are scheduled to be
     * decommissioned in Q1 of 2020.
     *
     * @param changeRequestId The unique identifier of the change request being requested.
     * @param marketplaceId Use this header to identify the authenticated user's business context.
     * @param acceptLanguage Use this header to specify the natural language in which the authenticated user desires
     *     the response.
     */
    Catalog.prototype.getChangeRequest = function (changeRequestId, marketplaceId, acceptLanguage) {
        return this.get("/change_request/" + changeRequestId, {
            headers: {
                'X-EBAY-C-MARKETPLACE-ID': marketplaceId,
                'Accept-Language': acceptLanguage
            }
        });
    };
    /**
     * Note: The three catalog change request methods in the Catalog API are deprecated, and are scheduled to be
     * decommissioned in Q1 of 2020.
     *
     * @param marketplaceId Use this header to identify the authenticated user's business context.
     * @param acceptLanguage Use this header to specify the natural language in which the authenticated user desires
     *     the response.
     * @param filter One or more comma-separated criteria for narrowing down the collection of change requests returned
     *     by this call.
     * @param limit The number of change requests to return. This is the result set, a subset of the full collection of
     *     change requests that match the filter criteria of this call.
     * @param offset The first change request to return based on its position in the returned collection of change
     *     requests.
     */
    Catalog.prototype.getChangeRequests = function (marketplaceId, acceptLanguage, _a) {
        var _b = _a === void 0 ? {} : _a, filter = _b.filter, limit = _b.limit, offset = _b.offset;
        return this.get("/change_request", {
            params: {
                filter: filter,
                limit: limit,
                offset: offset
            },
            headers: {
                'X-EBAY-C-MARKETPLACE-ID': marketplaceId,
                'Accept-Language': acceptLanguage
            }
        });
    };
    /**
     * This call retrieves details of the catalog product identified by the eBay product identifier (ePID) specified in
     * the request.
     *
     * @param epid The ePID of the product being requested.
     */
    Catalog.prototype.getProduct = function (epid) {
        var e = encodeURIComponent(epid);
        return this.get("/product/" + e);
    };
    /**
     * This call searches for and retrieves summaries of one or more products in the eBay catalog that match the search
     * criteria provided by a seller.
     *
     * @param params SearchCatalogParams
     */
    Catalog.prototype.search = function (params) {
        return this.get("/product_summary/search", {
            params: __assign({}, (params && params))
        });
    };
    /**
     * This call retrieves an array of all supported aspects, aspect constraints, and aspect values for the specified
     * catalog product and its associated or suggested categories, as well as the values currently associated with that
     * product.
     *
     * @param epid The unique eBay product identifier of the catalog product that you want to update.
     * @param acceptLanguage This request header sets the natural language that will be provided in the field values of
     *     the response payload.
     * @param otherApplicableCategoryIds Use only if you are also including the primary_category_id parameter in the
     *     request.
     * @param primaryCategoryId Use only if the seller believes this product is associated with the wrong primary
     *     category.
     * @param marketplaceId Use this header to specify the eBay marketplace identifier.
     */
    Catalog.prototype.getProductMetadata = function (epid, _a) {
        var _b = _a === void 0 ? {} : _a, acceptLanguage = _b.acceptLanguage, otherApplicableCategoryIds = _b.otherApplicableCategoryIds, primaryCategoryId = _b.primaryCategoryId, marketplaceId = _b.marketplaceId;
        return this.get("/get_product_metadata", {
            params: {
                epid: epid,
                other_applicable_category_ids: otherApplicableCategoryIds,
                primary_category_id: primaryCategoryId
            },
            headers: {
                'X-EBAY-C-MARKETPLACE-ID': marketplaceId,
                'Accept-Language': acceptLanguage
            }
        });
    };
    /**
     * This call retrieves an array of all supported aspects, aspect constraints, and aspect values for the specified
     * eBay categories.
     *
     * @param primaryCategoryId The unique identifier of the primary eBay category for which you will retrieve product
     *     aspects.
     * @param marketplaceId Use this header to specify the eBay marketplace identifier.
     * @param acceptLanguage This request header sets the natural language that will be provided in the field values of
     *     the response payload.
     * @param otherApplicableCategoryIds A string of comma-separated category IDs.
     */
    Catalog.prototype.getProductMetadataForCategories = function (primaryCategoryId, marketplaceId, _a) {
        var _b = _a === void 0 ? {} : _a, acceptLanguage = _b.acceptLanguage, otherApplicableCategoryIds = _b.otherApplicableCategoryIds;
        var headers = {
            'X-EBAY-C-MARKETPLACE-ID': marketplaceId
        };
        if (acceptLanguage) {
            headers['Accept-Language'] = acceptLanguage;
        }
        return this.get("/get_product_metadata_for_categories", {
            params: {
                primary_category_id: primaryCategoryId,
                other_applicable_category_ids: otherApplicableCategoryIds
            },
            headers: {
                'Accept-Language': acceptLanguage
            }
        });
    };
    return Catalog;
}(__1.default));
exports.default = Catalog;
//# sourceMappingURL=index.js.map