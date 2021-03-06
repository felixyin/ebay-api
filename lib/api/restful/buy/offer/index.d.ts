import Api from '../../';
import { PlaceProxyBidRequest } from '../../../../types/restfulTypes';
/**
 * The Api Offer API enables Partners to place proxy bids for a buyer and retrieve the auctions where the buyer is
 * bidding. Client Credentials: https://api.ebay.com/oauth/api_scope/buy.offer.auction
 */
export default class Offer extends Api {
    get basePath(): string;
    /**
     * This method retrieves the bidding details that are specific to the buyer of the specified auction.
     *
     * @param itemId
     * @param marketplaceId
     */
    getBidding(itemId: string, marketplaceId: string): Promise<any>;
    /**
     * This method uses a user access token to place a proxy bid for the buyer on a specific auction item.
     *
     * @param itemId
     * @param marketplaceId
     * @param {PlaceProxyBidRequest} body
     */
    placeProxyBid(itemId: string, marketplaceId: string, body?: PlaceProxyBidRequest): Promise<any>;
}
