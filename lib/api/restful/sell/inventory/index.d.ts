import Api from '../../';
import { BulkEbayOfferDetailsWithKeys, BulkInventoryItem, BulkMigrateListing, BulkOffer, BulkPriceQuantity, Compatibility, EbayOfferDetailsWithId, EbayOfferDetailsWithKeys, InventoryItemGroup, InventoryLocation, InventoryLocationFull, OfferKeysWithId, PublishByInventoryItemGroupRequest, SellInventoryItem, WithdrawByInventoryItemGroupRequest } from '../../../../types/restfulTypes';
/**
 * The Inventory API is used to create and manage inventory, and then to publish and manage this inventory on an eBay
 * marketplace.
 */
export default class Inventory extends Api {
    get basePath(): string;
    /**
     * This call retrieves all defined details of the inventory location that is specified by the
     * <b>merchantLocationKey</b> path parameter.
     *
     * @param merchantLocationKey A unique merchant-defined key (ID) for an inventory location.
     */
    getInventoryLocation(merchantLocationKey: string): Promise<any>;
    /**
     * <p>This call disables the inventory location that is specified in the <code>merchantLocationKey</code> path
     * parameter.
     *
     * @param merchantLocationKey A unique merchant-defined key (ID) for an inventory location.
     */
    disableInventoryLocation(merchantLocationKey: string): Promise<any>;
    /**
     * <p>This call enables a disabled inventory location that is specified in the <code>merchantLocationKey</code>
     * path parameter.
     *
     * @param merchantLocationKey A unique merchant-defined key (ID) for an inventory location.
     */
    enableInventoryLocation(merchantLocationKey: string): Promise<any>;
    /**
     * This call retrieves all defined details for every inventory location associated with the seller's account.
     *
     * @param limit The value passed in this query parameter sets the maximum number of records to return per page of
     *     data.
     * @param offset The value passed in this query parameter sets the page number to retrieve.
     */
    getInventoryLocations({ limit, offset }?: {
        limit?: number;
        offset?: number;
    }): Promise<any>;
    /**
     * <p>Use this call to create a new inventory location.
     *
     * @param merchantLocationKey A unique merchant-defined key (ID) for an inventory location.
     * @param body Inventory Location details
     */
    createInventoryLocation(merchantLocationKey: string, body: InventoryLocationFull): Promise<any>;
    /**
     * <p>This call deletes the inventory location that is specified in the <code>merchantLocationKey</code> path
     * parameter.
     *
     * @param merchantLocationKey A unique merchant-defined key (ID) for an inventory location.
     */
    deleteInventoryLocation(merchantLocationKey: string): Promise<any>;
    /**
     * <p>Use this call to update non-physical location details for an existing inventory location.
     *
     * @param merchantLocationKey A unique merchant-defined key (ID) for an inventory location.
     * @param body The inventory location details to be updated (other than the address and geo co-ordinates).
     */
    updateInventoryLocation(merchantLocationKey: string, body?: InventoryLocation): Promise<any>;
    /**
     * This call retrieves the inventory item record for a given SKU.
     *
     * @param sku his is the seller-defined SKU value of the product whose inventory item record you wish to
     *     retrieve.<br/><br/><strong>Max length</strong>: 50.
     */
    getInventoryItem(sku: string): Promise<any>;
    /**
     * This call creates a new inventory item record or replaces an existing inventory item record.
     *
     * @param sku The seller-defined SKU value for the inventory item is required whether the seller is creating a new
     *     inventory item, or updating an existing inventory item.
     * @param body Details of the inventory item record.
     */
    createOrReplaceInventoryItem(sku: string, body: SellInventoryItem): Promise<any>;
    /**
     * This call is used to delete an inventory item record associated with a specified SKU.
     *
     * @param sku The seller-defined SKU value for the inventory item is required whether the seller is creating a new
     *     inventory item, or updating an existing inventory item.
     */
    deleteInventoryItem(sku: string): Promise<any>;
    /**
     * This call retrieves all inventory item records defined for the seller's account.
     *
     * @param limit The value passed in this query parameter sets the maximum number of records to return per page of
     *     data.
     * @param offset The value passed in this query parameter sets the page number to retrieve.
     */
    getInventoryItems({ limit, offset }?: {
        limit?: number;
        offset?: number;
    }): Promise<any>;
    /**
     * This call is used by the seller to update the total ship-to-home quantity of one inventory item,
     *  and/or to update the price and/or quantity of one or more offers associated with one inventory item.
     *
     * @param body BulkPriceQuantity
     */
    bulkUpdatePriceQuantity(body: BulkPriceQuantity): Promise<any>;
    /**
     * This call can be used to create and/or update up to 25 new inventory item records.
     *
     * @param body BulkInventoryItem
     */
    bulkCreateOrReplaceInventoryItem(body: BulkInventoryItem): Promise<any>;
    /**
     * This call retrieves up to 25 inventory item records. The SKU value of each inventory item record to retrieve is
     * specified in the request payload.
     *
     * @param body BulkInventoryItem
     */
    bulkGetInventoryItem(body: BulkInventoryItem): Promise<any>;
    /**
     * This call is used by the seller to retrieve the list of products that are compatible with the inventory item.
     *
     * @param sku A SKU (stock keeping unit) is an unique identifier defined by a seller for a product
     */
    getProductCompatibility(sku: string): Promise<any>;
    /**
     * This call is used by the seller to create or replace a list of products that are compatible with the inventory
     * item.
     *
     * @param sku A SKU (stock keeping unit) is an unique identifier defined by a seller for a product
     * @param body Details of the compatibility
     */
    createOrReplaceProductCompatibility(sku: string, body: Compatibility): Promise<any>;
    /**
     * This call is used by the seller to delete the list of products that are compatible with the inventory item that
     * is associated with the compatible product list.
     *
     * @param sku A SKU (stock keeping unit) is an unique identifier defined by a seller for a product
     */
    deleteProductCompatibility(sku: string): Promise<any>;
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
    getOffers({ sku, marketplaceId, format, limit, offset }?: {
        sku?: string;
        marketplaceId?: string;
        format?: string;
        limit?: number;
        offset?: number;
    }): Promise<any>;
    /**
     * This call retrieves a specific published or unpublished offer.
     *
     * @param offerId The unique identifier of the offer that is to be retrieved.
     */
    getOffer(offerId: string): Promise<any>;
    /**
     * This call creates an offer for a specific inventory item on a specific eBay marketplace.
     *
     * @param body Details of the offer for the channel
     */
    createOffer(body: EbayOfferDetailsWithKeys): Promise<any>;
    /**
     * This call updates an existing offer.
     *
     * @param offerId The unique identifier of the offer that is being updated.
     * @param body Details of the offer for the channel
     */
    updateOffer(offerId: string, body: EbayOfferDetailsWithId): Promise<any>;
    /**
     * If used against an unpublished offer, this call will permanently delete that offer.
     *
     * @param offerId The unique identifier of the offer to delete.
     */
    deleteOffer(offerId: string): Promise<any>;
    /**
     * This call is used to convert an unpublished offer into a published offer, or live eBay listing.
     *
     * @param offerId The unique identifier of the offer that is to be published.
     */
    publishOffer(offerId: string): Promise<any>;
    /**
     * This call is used to convert all unpublished offers associated with an inventory item group into an active,
     * multiple-variation listing.
     *
     * @param body PublishByInventoryItemGroupRequest
     */
    publishOfferByInventoryItemGroup(body: PublishByInventoryItemGroupRequest): Promise<any>;
    /**
     * This call is used to end a multiple-variation eBay listing that is associated with the specified inventory item
     * group.
     *
     * @param body WithdrawByInventoryItemGroupRequest
     */
    withdrawOfferByInventoryItemGroup(body: WithdrawByInventoryItemGroupRequest): Promise<any>;
    /**
     * This call is used to retrieve the expected listing fees for up to 250 unpublished offers.
     *
     * @param body OfferKeysWithId
     */
    getListingFees(body: OfferKeysWithId): Promise<any>;
    /**
     * This call creates multiple offers (up to 25) for specific inventory items on a specific eBay marketplace.
     *
     * @param body BulkEbayOfferDetailsWithKeys
     */
    bulkCreateOffer(body: BulkEbayOfferDetailsWithKeys): Promise<any>;
    /**
     * This call is used to convert unpublished offers (up to 25) into  published offers, or live eBay listings.
     *
     * @param body BulkOffer
     */
    bulkPublishOffer(body: BulkOffer): Promise<any>;
    /**
     * This call is used to end a single-variation listing that is associated with the specified offer.
     *
     * @param offerId he unique identifier of the offer that is to be withdrawn.
     */
    withdrawOffer(offerId: string): Promise<any>;
    /**
     * This call retrieves the inventory item group for a given <strong>inventoryItemGroupKey</strong> value.
     *
     * @param inventoryItemGroupKey The unique identifier of an inventory item group.
     */
    getInventoryItemGroup(inventoryItemGroupKey: string): Promise<any>;
    /**
     * This call creates a new inventory item group or updates an existing inventory item group.
     *
     * @param inventoryItemGroupKey Unique identifier of the inventory item group.
     * @param body Details of the inventory Item Group
     */
    createOrReplaceInventoryItemGroup(inventoryItemGroupKey: string, body: InventoryItemGroup): Promise<any>;
    /**
     * This call deletes the inventory item group for a given <strong>inventoryItemGroupKey</strong> value.
     *
     * @param inventoryItemGroupKey Unique identifier of the inventory item group.
     */
    deleteInventoryItemGroup(inventoryItemGroupKey: string): Promise<any>;
    /**
     * This call is used to convert existing eBay Listings to the corresponding Inventory API objects.
     *
     * @param body BulkMigrateListing
     */
    bulkMigrateListing(body: BulkMigrateListing): Promise<any>;
}
