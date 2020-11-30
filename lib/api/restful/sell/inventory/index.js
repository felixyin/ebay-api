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
 * The Inventory API is used to create and manage inventory, and then to publish and manage this inventory on an eBay
 * marketplace.
 */
var Inventory = /** @class */ (function (_super) {
    __extends(Inventory, _super);
    function Inventory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Inventory.prototype, "basePath", {
        get: function () {
            return '/sell/inventory/v1';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * This call retrieves all defined details of the inventory location that is specified by the
     * <b>merchantLocationKey</b> path parameter.
     *
     * @param merchantLocationKey A unique merchant-defined key (ID) for an inventory location.
     */
    Inventory.prototype.getInventoryLocation = function (merchantLocationKey) {
        var key = encodeURIComponent(merchantLocationKey);
        return this.get("/location/" + key);
    };
    /**
     * <p>This call disables the inventory location that is specified in the <code>merchantLocationKey</code> path
     * parameter.
     *
     * @param merchantLocationKey A unique merchant-defined key (ID) for an inventory location.
     */
    Inventory.prototype.disableInventoryLocation = function (merchantLocationKey) {
        var key = encodeURIComponent(merchantLocationKey);
        return this.post("/location/" + key + "/disable");
    };
    /**
     * <p>This call enables a disabled inventory location that is specified in the <code>merchantLocationKey</code>
     * path parameter.
     *
     * @param merchantLocationKey A unique merchant-defined key (ID) for an inventory location.
     */
    Inventory.prototype.enableInventoryLocation = function (merchantLocationKey) {
        var key = encodeURIComponent(merchantLocationKey);
        return this.post("/location/" + key + "/enable");
    };
    /**
     * This call retrieves all defined details for every inventory location associated with the seller's account.
     *
     * @param limit The value passed in this query parameter sets the maximum number of records to return per page of
     *     data.
     * @param offset The value passed in this query parameter sets the page number to retrieve.
     */
    Inventory.prototype.getInventoryLocations = function (_a) {
        var _b = _a === void 0 ? {} : _a, limit = _b.limit, offset = _b.offset;
        return this.get("/location/", {
            params: {
                limit: limit,
                offset: offset
            }
        });
    };
    /**
     * <p>Use this call to create a new inventory location.
     *
     * @param merchantLocationKey A unique merchant-defined key (ID) for an inventory location.
     * @param body Inventory Location details
     */
    Inventory.prototype.createInventoryLocation = function (merchantLocationKey, body) {
        var key = encodeURIComponent(merchantLocationKey);
        return this.post("/location/" + key, body);
    };
    /**
     * <p>This call deletes the inventory location that is specified in the <code>merchantLocationKey</code> path
     * parameter.
     *
     * @param merchantLocationKey A unique merchant-defined key (ID) for an inventory location.
     */
    Inventory.prototype.deleteInventoryLocation = function (merchantLocationKey) {
        var key = encodeURIComponent(merchantLocationKey);
        return this.delete("/location/" + key);
    };
    /**
     * <p>Use this call to update non-physical location details for an existing inventory location.
     *
     * @param merchantLocationKey A unique merchant-defined key (ID) for an inventory location.
     * @param body The inventory location details to be updated (other than the address and geo co-ordinates).
     */
    Inventory.prototype.updateInventoryLocation = function (merchantLocationKey, body) {
        var key = encodeURIComponent(merchantLocationKey);
        return this.post("/location/" + key + "/update_location_details", body);
    };
    /**
     * This call retrieves the inventory item record for a given SKU.
     *
     * @param sku his is the seller-defined SKU value of the product whose inventory item record you wish to
     *     retrieve.<br/><br/><strong>Max length</strong>: 50.
     */
    Inventory.prototype.getInventoryItem = function (sku) {
        sku = encodeURIComponent(sku);
        return this.get("/inventory_item/" + sku);
    };
    /**
     * This call creates a new inventory item record or replaces an existing inventory item record.
     *
     * @param sku The seller-defined SKU value for the inventory item is required whether the seller is creating a new
     *     inventory item, or updating an existing inventory item.
     * @param body Details of the inventory item record.
     */
    Inventory.prototype.createOrReplaceInventoryItem = function (sku, body) {
        sku = encodeURIComponent(sku);
        return this.put("/inventory_item/" + sku, body);
    };
    /**
     * This call is used to delete an inventory item record associated with a specified SKU.
     *
     * @param sku The seller-defined SKU value for the inventory item is required whether the seller is creating a new
     *     inventory item, or updating an existing inventory item.
     */
    Inventory.prototype.deleteInventoryItem = function (sku) {
        sku = encodeURIComponent(sku);
        return this.delete("/inventory_item/" + sku);
    };
    /**
     * This call retrieves all inventory item records defined for the seller's account.
     *
     * @param limit The value passed in this query parameter sets the maximum number of records to return per page of
     *     data.
     * @param offset The value passed in this query parameter sets the page number to retrieve.
     */
    Inventory.prototype.getInventoryItems = function (_a) {
        var _b = _a === void 0 ? {} : _a, limit = _b.limit, offset = _b.offset;
        return this.get("/inventory_item", {
            params: {
                limit: limit,
                offset: offset
            }
        });
    };
    /**
     * This call is used by the seller to update the total ship-to-home quantity of one inventory item,
     *  and/or to update the price and/or quantity of one or more offers associated with one inventory item.
     *
     * @param body BulkPriceQuantity
     */
    Inventory.prototype.bulkUpdatePriceQuantity = function (body) {
        return this.post("/bulk_update_price_quantity", body);
    };
    /**
     * This call can be used to create and/or update up to 25 new inventory item records.
     *
     * @param body BulkInventoryItem
     */
    Inventory.prototype.bulkCreateOrReplaceInventoryItem = function (body) {
        return this.post("/bulk_create_or_replace_inventory_item", body);
    };
    /**
     * This call retrieves up to 25 inventory item records. The SKU value of each inventory item record to retrieve is
     * specified in the request payload.
     *
     * @param body BulkInventoryItem
     */
    Inventory.prototype.bulkGetInventoryItem = function (body) {
        return this.post("/bulk_get_inventory_item", body);
    };
    /**
     * This call is used by the seller to retrieve the list of products that are compatible with the inventory item.
     *
     * @param sku A SKU (stock keeping unit) is an unique identifier defined by a seller for a product
     */
    Inventory.prototype.getProductCompatibility = function (sku) {
        sku = encodeURIComponent(sku);
        return this.get("/inventory_item/" + sku + "/product_compatibility");
    };
    /**
     * This call is used by the seller to create or replace a list of products that are compatible with the inventory
     * item.
     *
     * @param sku A SKU (stock keeping unit) is an unique identifier defined by a seller for a product
     * @param body Details of the compatibility
     */
    Inventory.prototype.createOrReplaceProductCompatibility = function (sku, body) {
        sku = encodeURIComponent(sku);
        return this.put("/inventory_item/" + sku + "/product_compatibility", body);
    };
    /**
     * This call is used by the seller to delete the list of products that are compatible with the inventory item that
     * is associated with the compatible product list.
     *
     * @param sku A SKU (stock keeping unit) is an unique identifier defined by a seller for a product
     */
    Inventory.prototype.deleteProductCompatibility = function (sku) {
        sku = encodeURIComponent(sku);
        return this.delete("/inventory_item/" + sku + "/product_compatibility");
    };
    /**
     * This call retrieves all existing offers for the specified SKU value.
     *
     * @param sku The seller-defined SKU value is passed in as a query parameter.
     * @param marketplace_id The unique identifier of the eBay marketplace.
     * @param format This enumeration value sets the listing format for the offer.
     * @param limit The value passed in this query parameter sets the maximum number of records to return per page of
     *     data.
     * @param offset The value passed in this query parameter sets the page number to retrieve.
     */
    Inventory.prototype.getOffers = function (_a) {
        var _b = _a === void 0 ? {} : _a, sku = _b.sku, marketplaceId = _b.marketplaceId, format = _b.format, limit = _b.limit, offset = _b.offset;
        return this.get("/offer", {
            params: {
                sku: sku,
                marketplace_id: marketplaceId,
                format: format,
                limit: limit,
                offset: offset
            }
        });
    };
    /**
     * This call retrieves a specific published or unpublished offer.
     *
     * @param offerId The unique identifier of the offer that is to be retrieved.
     */
    Inventory.prototype.getOffer = function (offerId) {
        offerId = encodeURIComponent(offerId);
        return this.get("/offer/" + offerId);
    };
    /**
     * This call creates an offer for a specific inventory item on a specific eBay marketplace.
     *
     * @param body Details of the offer for the channel
     */
    Inventory.prototype.createOffer = function (body) {
        return this.post("/offer", body);
    };
    /**
     * This call updates an existing offer.
     *
     * @param offerId The unique identifier of the offer that is being updated.
     * @param body Details of the offer for the channel
     */
    Inventory.prototype.updateOffer = function (offerId, body) {
        offerId = encodeURIComponent(offerId);
        return this.put("/offer/" + offerId, body);
    };
    /**
     * If used against an unpublished offer, this call will permanently delete that offer.
     *
     * @param offerId The unique identifier of the offer to delete.
     */
    Inventory.prototype.deleteOffer = function (offerId) {
        return this.delete("/offer/" + offerId);
    };
    /**
     * This call is used to convert an unpublished offer into a published offer, or live eBay listing.
     *
     * @param offerId The unique identifier of the offer that is to be published.
     */
    Inventory.prototype.publishOffer = function (offerId) {
        var id = encodeURIComponent(offerId);
        return this.post("/offer/" + id + "/publish/");
    };
    /**
     * This call is used to convert all unpublished offers associated with an inventory item group into an active,
     * multiple-variation listing.
     *
     * @param body PublishByInventoryItemGroupRequest
     */
    Inventory.prototype.publishOfferByInventoryItemGroup = function (body) {
        return this.post("/offer/publish_by_inventory_item_group/", body);
    };
    /**
     * This call is used to end a multiple-variation eBay listing that is associated with the specified inventory item
     * group.
     *
     * @param body WithdrawByInventoryItemGroupRequest
     */
    Inventory.prototype.withdrawOfferByInventoryItemGroup = function (body) {
        return this.post("/offer/withdraw_by_inventory_item_group", body);
    };
    /**
     * This call is used to retrieve the expected listing fees for up to 250 unpublished offers.
     *
     * @param body OfferKeysWithId
     */
    Inventory.prototype.getListingFees = function (body) {
        return this.post("/offer/get_listing_fees", body);
    };
    /**
     * This call creates multiple offers (up to 25) for specific inventory items on a specific eBay marketplace.
     *
     * @param body BulkEbayOfferDetailsWithKeys
     */
    Inventory.prototype.bulkCreateOffer = function (body) {
        return this.post("/bulk_create_offer", body);
    };
    /**
     * This call is used to convert unpublished offers (up to 25) into  published offers, or live eBay listings.
     *
     * @param body BulkOffer
     */
    Inventory.prototype.bulkPublishOffer = function (body) {
        return this.post("/bulk_publish_offer", body);
    };
    /**
     * This call is used to end a single-variation listing that is associated with the specified offer.
     *
     * @param offerId he unique identifier of the offer that is to be withdrawn.
     */
    Inventory.prototype.withdrawOffer = function (offerId) {
        var id = encodeURIComponent(offerId);
        return this.post("/offer/" + id + "/withdraw");
    };
    /**
     * This call retrieves the inventory item group for a given <strong>inventoryItemGroupKey</strong> value.
     *
     * @param inventoryItemGroupKey The unique identifier of an inventory item group.
     */
    Inventory.prototype.getInventoryItemGroup = function (inventoryItemGroupKey) {
        inventoryItemGroupKey = encodeURIComponent(inventoryItemGroupKey);
        return this.get("/inventory_item_group/" + inventoryItemGroupKey);
    };
    /**
     * This call creates a new inventory item group or updates an existing inventory item group.
     *
     * @param inventoryItemGroupKey Unique identifier of the inventory item group.
     * @param body Details of the inventory Item Group
     */
    Inventory.prototype.createOrReplaceInventoryItemGroup = function (inventoryItemGroupKey, body) {
        inventoryItemGroupKey = encodeURIComponent(inventoryItemGroupKey);
        return this.put("/inventory_item_group/" + inventoryItemGroupKey, body);
    };
    /**
     * This call deletes the inventory item group for a given <strong>inventoryItemGroupKey</strong> value.
     *
     * @param inventoryItemGroupKey Unique identifier of the inventory item group.
     */
    Inventory.prototype.deleteInventoryItemGroup = function (inventoryItemGroupKey) {
        return this.delete("/inventory_item_group/" + inventoryItemGroupKey);
    };
    /**
     * This call is used to convert existing eBay Listings to the corresponding Inventory API objects.
     *
     * @param body BulkMigrateListing
     */
    Inventory.prototype.bulkMigrateListing = function (body) {
        return this.post("/bulk_migrate_listing", body);
    };
    return Inventory;
}(__1.default));
exports.default = Inventory;
//# sourceMappingURL=index.js.map