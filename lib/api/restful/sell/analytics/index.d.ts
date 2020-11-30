import Api from '../../';
declare enum Metric {
    CLICK_THROUGH_RATE = 0,
    LISTING_IMPRESSION_STORE = 1,
    LISTING_IMPRESSION_TOTAL = 2,
    LISTING_VIEWS_SOURCE_DIRECT = 3,
    LISTING_VIEWS_SOURCE_OFF_EBAY = 4,
    LISTING_VIEWS_SOURCE_OTHER_EBAY = 5,
    LISTING_VIEWS_SOURCE_SEARCH_RESULTS_PAGE = 6,
    LISTING_VIEWS_SOURCE_STORE = 7,
    LISTING_VIEWS_TOTAL = 8,
    SALES_CONVERSION_RATE = 9,
    TRANSACTION = 10
}
/**
 * The Analytics API provides information about a seller's business performance.
 */
export default class Analytics extends Api {
    get basePath(): string;
    /**
     * This call retrieves all the profiles for the associated seller.
     */
    findSellerStandardsProfiles(): Promise<any>;
    /**
     * This call retrieves seller's profiles based on a program or cycle.
     *
     * @param program Specifies the program of the requested profile.
     * @param cycle Specifies the cycle of the requested profile.
     */
    getSellerStandardsProfile(program: string, cycle: string): Promise<any>;
    /**
     * This call returns a report that details the user-traffic a seller's listings receives.
     *
     * @param dimension Specifies the basis of the report data.
     * @param filter Limits the report data returned.
     * @param metric Specifies a comma separated list of the metrics you want included in the report.
     * @param sort Specifies a single metric to be sorted and whether you want to sort in ascending or descending order.
     */
    getTrafficReport({ dimension, filter, metric, sort }?: {
        dimension?: string;
        filter?: string;
        metric?: Metric;
        sort?: string;
    }): Promise<any>;
}
export {};
