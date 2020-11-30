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
 * The Browse API has the following resources: item_summary: Lets shoppers search for specific items by keyword, GTIN,
 * category, charity, product, or item aspects and refine the results by using filters, such as aspects, compatibility,
 * and fields values.
 */
var Browse = /** @class */ (function (_super) {
    __extends(Browse, _super);
    function Browse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Browse.prototype, "basePath", {
        get: function () {
            return '/buy/browse/v1';
        },
        enumerable: false,
        configurable: true
    });
    //
    // Item
    // Client Credentials: https://api.ebay.com/oauth/api_scope
    //
    /**
     * This method searches for eBay items by various query parameters and retrieves summaries of the items.
     *
     * @param {BrowseSearchParams} params
     */
    Browse.prototype.search = function (params) {
        return this.get("/item_summary/search", {
            params: params
        });
    };
    /**
     * This is an Experimental method. This method searches for eBay items based on a image and retrieves summaries of
     * the items.
     *
     * @param {BrowseSearchParams} params
     * @param {Object} body The container for the image information fields.
     */
    Browse.prototype.searchByImage = function (params, body) {
        if (body === void 0) { body = {}; }
        return this.post("/item_summary/search_by_image", body, {
            params: params
        });
    };
    /**
     * This method retrieves the details of a specific item, such as description, price, category, all item aspects,
     * condition, return policies, seller feedback and score, shipping options, shipping costs, estimated delivery,
     * and other information the buyer needs to make a purchasing decision.
     *
     * @param {String} itemId The eBay RESTful identifier of an item.
     * @param {String} fieldgroups
     */
    Browse.prototype.getItem = function (itemId, fieldgroups) {
        var id = encodeURIComponent(itemId);
        return this.get("/item/" + id, {
            params: {
                fieldgroups: fieldgroups
            }
        });
    };
    /**
     * This method is a bridge between the eBay legacy APIs, such as Shopping, and Finding and the eBay Api APIs.
     *
     * @param {LegacyItemParams} params
     */
    Browse.prototype.getItemByLegacyId = function (params) {
        return this.get("/item/get_item_by_legacy_id", {
            params: params
        });
    };
    /**
     * This method retrieves the details of the individual items in an item group.
     *
     * @param itemGroupId
     */
    Browse.prototype.getItemsByItemGroup = function (itemGroupId) {
        return this.get("/item/get_items_by_item_group", {
            params: {
                item_group_id: itemGroupId
            }
        });
    };
    /**
     * This method checks if a product is compatible with the specified item.
     * @param {String} itemId The eBay RESTful identifier of an item (such as a part you want to check).
     * @param {String} marketplaceId The ID of the eBay marketplace you want to use. Note: This value is case sensitive.
     * @param {Object} body CompatibilityPayload
     */
    Browse.prototype.checkCompatibility = function (itemId, marketplaceId, body) {
        var id = encodeURIComponent(itemId);
        return this.post("/item/" + id + "/check_compatibility", body, {
            headers: {
                'X-EBAY-C-MARKETPLACE-ID': marketplaceId
            }
        });
    };
    //
    // Shopping Cart
    //
    /**
     * This is an Experimental method. This method creates an eBay cart for the eBay member, if one does not exist, and
     * adds items to that cart.
     *
     * @param {Object} item AddCartItemInput
     */
    Browse.prototype.addItem = function (item) {
        return this.post("/shopping_cart/add_item", item);
    };
    /**
     * This is an experimental method. This method retrieves all the items in the eBay member's cart;
     * items added to the cart while on ebay.com as well as items added to the cart using the Browse API.
     */
    Browse.prototype.getShoppingCart = function () {
        return this.get("/shopping_cart/");
    };
    /**
     * This is an experimental method. This method removes a specific item from the eBay member's cart.
     *
     *  @param {Object} item RemoveCartItemInput
     */
    Browse.prototype.removeItem = function (item) {
        return this.post("/shopping_cart/remove_item", item);
    };
    /**
     * This is an experimental method. This method updates the quantity value of a specific item in the eBay member's
     * cart.
     *
     * @param {UpdateCartItemInput} item UpdateCartItemInput
     */
    Browse.prototype.updateQuantity = function (item) {
        return this.post("/shopping_cart/update_quantity", item);
    };
    return Browse;
}(__1.default));
exports.default = Browse;
//# sourceMappingURL=index.js.map