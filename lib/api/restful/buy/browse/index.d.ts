import Api from '../../';
import { AddCartItemInput, BrowseSearchParams, CompatibilityPayload, LegacyItemParams, RemoveCartItemInput, SearchByImageParams, UpdateCartItemInput } from '../../../../types/restfulTypes';
/**
 * The Browse API has the following resources: item_summary: Lets shoppers search for specific items by keyword, GTIN,
 * category, charity, product, or item aspects and refine the results by using filters, such as aspects, compatibility,
 * and fields values.
 */
export default class Browse extends Api {
    get basePath(): string;
    /**
     * This method searches for eBay items by various query parameters and retrieves summaries of the items.
     *
     * @param {BrowseSearchParams} params
     */
    search(params: BrowseSearchParams): Promise<any>;
    /**
     * This is an Experimental method. This method searches for eBay items based on a image and retrieves summaries of
     * the items.
     *
     * @param {BrowseSearchParams} params
     * @param {Object} body The container for the image information fields.
     */
    searchByImage(params: SearchByImageParams, body?: {}): Promise<any>;
    /**
     * This method retrieves the details of a specific item, such as description, price, category, all item aspects,
     * condition, return policies, seller feedback and score, shipping options, shipping costs, estimated delivery,
     * and other information the buyer needs to make a purchasing decision.
     *
     * @param {String} itemId The eBay RESTful identifier of an item.
     * @param {String} fieldgroups
     */
    getItem(itemId: string, fieldgroups?: string): Promise<any>;
    /**
     * This method is a bridge between the eBay legacy APIs, such as Shopping, and Finding and the eBay Api APIs.
     *
     * @param {LegacyItemParams} params
     */
    getItemByLegacyId(params: LegacyItemParams): Promise<any>;
    /**
     * This method retrieves the details of the individual items in an item group.
     *
     * @param itemGroupId
     */
    getItemsByItemGroup(itemGroupId: string): Promise<any>;
    /**
     * This method checks if a product is compatible with the specified item.
     * @param {String} itemId The eBay RESTful identifier of an item (such as a part you want to check).
     * @param {String} marketplaceId The ID of the eBay marketplace you want to use. Note: This value is case sensitive.
     * @param {Object} body CompatibilityPayload
     */
    checkCompatibility(itemId: string, marketplaceId: string, body?: CompatibilityPayload): Promise<any>;
    /**
     * This is an Experimental method. This method creates an eBay cart for the eBay member, if one does not exist, and
     * adds items to that cart.
     *
     * @param {Object} item AddCartItemInput
     */
    addItem(item: AddCartItemInput): Promise<any>;
    /**
     * This is an experimental method. This method retrieves all the items in the eBay member's cart;
     * items added to the cart while on ebay.com as well as items added to the cart using the Browse API.
     */
    getShoppingCart(): Promise<any>;
    /**
     * This is an experimental method. This method removes a specific item from the eBay member's cart.
     *
     *  @param {Object} item RemoveCartItemInput
     */
    removeItem(item: RemoveCartItemInput): Promise<any>;
    /**
     * This is an experimental method. This method updates the quantity value of a specific item in the eBay member's
     * cart.
     *
     * @param {UpdateCartItemInput} item UpdateCartItemInput
     */
    updateQuantity(item: UpdateCartItemInput): Promise<any>;
}
