import Api from '../../';
/**
 * Service for providing the compliance violations of seller account/listings
 */
export default class Compliance extends Api {
    get basePath(): string;
    /**
     * This call returns listing violation counts for a seller.
     *
     * @param marketplaceId Use this header to specify the eBay marketplace identifier.
     * @param compliance_type A user passes in one or more compliance type values through this query parameter.
     */
    getListingViolationsSummary({ marketplaceId, complianceType }?: {
        marketplaceId?: string;
        complianceType?: string;
    }): Promise<any>;
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
    getListingViolations(marketplaceId: string, { complianceType, offset, listingId, limit }?: {
        complianceType?: string;
        offset?: number;
        listingId?: string;
        limit?: number;
    }): Promise<any>;
}
