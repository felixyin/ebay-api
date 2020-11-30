import Api from '../../';
import { FeedParams } from '../../../../types/restfulTypes';
/**
 * The Feed API provides the ability to download TSV_GZIP feed files containing eBay items and an hourly snapshot file
 * of the items that have changed within an hour for a specific category, date and marketplace.
 */
export default class Feed extends Api {
    get basePath(): string;
    /**
     * This method lets you download a TSV_GZIP (tab separated value gzip) Item feed file.
     *
     * @param {FeedParams} params
     * @param marketplaceId The ID of the eBay marketplace where the item is hosted.
     * @param range his header specifies the range in bytes of the chunks of the gzip file being returned.
     *          Format: bytes=startpos-endpos For example, the following retrieves the first 10 MBs of the feed file.
     */
    getItemFeed(params: FeedParams, marketplaceId: string, range: string): Promise<any>;
    /**
     * This method lets you download a TSV_GZIP (tab separated value gzip) Item Group feed file.
     * @param {FeedParams} params
     * @param marketplaceId The ID of the eBay marketplace where the item is hosted.
     * @param range his header specifies the range in bytes of the chunks of the gzip file being returned.
     *          Format: bytes=startpos-endpos For example, the following retrieves the first 10 MBs of the feed file.
     */
    getItemGroupFeed(params: FeedParams, marketplaceId: string, range: string): Promise<any>;
    /**
     * The Hourly Snapshot feed file is generated each hour every day for all categories.
     *
     * @param {FeedParams} params
     * @param {String} snapshotDate
     * @param marketplaceId The ID of the eBay marketplace where the item is hosted.
     * @param range his header specifies the range in bytes of the chunks of the gzip file being returned.
     *          Format: bytes=startpos-endpos For example, the following retrieves the first 10 MBs of the feed file.
     */
    getItemSnapshotFeed(params: FeedParams, snapshotDate: string, marketplaceId: string, range: string): Promise<any>;
    /**
     * The Hourly Snapshot feed file is generated each hour every day for all categories.
     *
     * @param {FeedParams} params
     * @param {String} snapshotDate
     * @param marketplaceId The ID of the eBay marketplace where the item is hosted.
     * @param range his header specifies the range in bytes of the chunks of the gzip file being returned.
     *          Format: bytes=startpos-endpos For example, the following retrieves the first 10 MBs of the feed file.
     */
    getProductFeed(params: FeedParams, snapshotDate: string, marketplaceId: string, range: string): Promise<any>;
}
