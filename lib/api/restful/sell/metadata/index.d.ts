import Api from '../../';
/**
 * The Metadata API has operations that retrieve configuration details pertaining to the different eBay marketplaces.
 */
export default class Metadata extends Api {
    get basePath(): string;
    /**
     * This method retrieves all the sales tax jurisdictions for the country that you specify in the countryCode path
     * parameter.
     *
     * @param countryCode This path parameter specifies the two-letter ISO 3166-1 Alpha-2 country code for the country
     *     whose jurisdictions you want to retrieve.
     */
    getSalesTaxJurisdictions(countryCode: string): Promise<any>;
    /**
     * This method returns the eBay policies that define how to list automotive-parts-compatibility items in the
     * categories of a specific marketplace.
     *
     * @param marketplaceId This path parameter specifies the eBay marketplace for which policy information is
     *     retrieved.
     * @param filter This query parameter limits the response by returning eBay policy information for only the leaf
     *     categories specified by this parameter.
     */
    getAutomotivePartsCompatibilityPolicies(marketplaceId: string, filter?: string): Promise<any>;
    /**
     * This method returns the eBay policies that define how to specify item conditions in the categories of a specific
     * marketplace.
     *
     * @param marketplaceId This path parameter specifies the eBay marketplace for which policy information is
     *     retrieved.
     * @param filter This query parameter limits the response by returning eBay policy information for only the leaf
     *     categories specified by this parameter.
     */
    getItemConditionPolicies(marketplaceId: string, filter?: string): Promise<any>;
    /**
     * This method returns the eBay policies that define the allowed listing structures for the categories of a
     * specific marketplace.
     *
     * @param marketplaceId This path parameter specifies the eBay marketplace for which policy information is
     *     retrieved.
     * @param filter This query parameter limits the response by returning eBay policy information for only the leaf
     *     categories specified by this parameter.
     */
    getListingStructurePolicies(marketplaceId: string, filter?: string): Promise<any>;
    /**
     * This method returns the eBay policies that define the supported negotiated price features (like &quot;best
     * offer&quot;) for the categories of a specific marketplace.
     *
     * @param marketplaceId This path parameter specifies the eBay marketplace for which policy information is
     *     retrieved.
     * @param filter This query parameter limits the response by returning eBay policy information for only the leaf
     *     categories specified by this parameter.
     */
    getNegotiatedPricePolicies(marketplaceId: string, filter?: string): Promise<any>;
    /**
     * This method retrieves a list of leaf categories for a marketplace and identifies the categories that require
     * items to have an eBay product ID value in order to be listed in those categories.
     *
     * @param marketplaceId This path parameter specifies the eBay marketplace for which policy information is
     *     retrieved.
     * @param filter This query parameter limits the response by returning eBay policy information for only the leaf
     *     categories specified by this parameter.
     */
    getProductAdoptionPolicies(marketplaceId: string, filter?: string): Promise<any>;
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
    getReturnPolicies(marketplaceId: string, filter?: string): Promise<any>;
}
