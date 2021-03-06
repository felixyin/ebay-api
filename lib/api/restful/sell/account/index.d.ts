import Api from '../../';
import { FulfillmentPolicyRequest, PaymentPolicyRequest, Program, ReturnPolicyRequest, SalesTaxBase } from '../../../../types/restfulTypes';
/**
 * The <b>Account API</b> gives sellers the ability to configure their eBay seller accounts,
 * including the seller's policies (the Fulfillment Policy, Payment Policy, and Return Policy),
 * opt in and out of eBay seller programs, configure sales tax tables, and get account information.
 */
export default class Account extends Api {
    get basePath(): string;
    /**
     * This method retrieves all the fulfillment policies configured for the marketplace you specify using the
     * marketplace_id query parameter.
     *
     * @param marketplaceId This query parameter specifies the eBay marketplace of the policies you want to retrieve.
     */
    getFulfillmentPolicies(marketplaceId: string): Promise<any>;
    /**
     * This method creates a new fulfillment policy where the policy encapsulates seller's terms for fulfilling item
     * purchases.
     *
     * @param body Request to create a seller account fulfillment policy.
     */
    createFulfillmentPolicy(body: FulfillmentPolicyRequest): Promise<any>;
    /**
     * This method updates an existing fulfillment policy.
     *
     * @param fulfillmentPolicyId This path parameter specifies the ID of the fulfillment policy you want to update.
     * @param body Request to create a seller account fulfillment policy.
     */
    updateFulfillmentPolicy(fulfillmentPolicyId: string, body: FulfillmentPolicyRequest): Promise<any>;
    /**
     * This method deletes a fulfillment policy.
     *
     * @param fulfillmentPolicyId This path parameter specifies the ID of the fulfillment policy to delete.
     */
    deleteFulfillmentPolicy(fulfillmentPolicyId: string): Promise<any>;
    /**
     * This method retrieves the complete details of a fulfillment policy.
     * Supply the ID of the policy you want to retrieve using the fulfillmentPolicyId path parameter.
     *
     * @param fulfillmentPolicyId This path parameter specifies the ID of the fulfillment policy you want to retrieve.
     */
    getFulfillmentPolicy(fulfillmentPolicyId: string): Promise<any>;
    /**
     * This method retrieves the complete details for a single fulfillment policy.
     *
     * @param marketplaceId This query parameter specifies the eBay marketplace of the policy you want to retrieve.
     * @param name This query parameter specifies the user-defined name of the fulfillment policy you want to retrieve.
     */
    getFulfillmentPolicyByName(marketplaceId: string, name: string): Promise<any>;
    /**
     * This method retrieves all the payment policies configured for the marketplace you specify using the
     * marketplace_id query parameter.
     *
     * @param marketplaceId This query parameter specifies the eBay marketplace of the policy you want to retrieve.
     */
    getPaymentPolicies(marketplaceId: string): Promise<any>;
    /**
     * This method retrieves the complete details of a payment policy. Supply the ID of the policy you want to retrieve
     * using the paymentPolicyId path parameter.
     *
     * @param paymentPolicyId This path parameter specifies the ID of the payment policy you want to retrieve.
     */
    getPaymentPolicy(paymentPolicyId: string): Promise<any>;
    /**
     * This method creates a new payment policy where the policy encapsulates seller's terms for purchase payments.
     *
     * @param body Payment policy request
     */
    createPaymentPolicy(body: PaymentPolicyRequest): Promise<any>;
    /**
     * This method updates an existing payment policy.
     *
     * @param paymentPolicyId This path parameter specifies the ID of the payment policy you want to update.
     * @param body Payment policy request
     */
    updatePaymentPolicy(paymentPolicyId: string, body: PaymentPolicyRequest): Promise<any>;
    /**
     * This method updates an existing payment policy.
     *
     * @param paymentPolicyId This path parameter specifies the ID of the payment policy you want to delete.
     */
    deletePaymentPolicy(paymentPolicyId: string): Promise<any>;
    /**
     * This method retrieves the complete details of a single payment policy.
     *
     * @param marketplaceId This query parameter specifies the eBay marketplace of the policy you want to retrieve.
     * @param name This query parameter specifies the user-defined name of the payment policy you want to retrieve.
     */
    getPaymentPolicyByName(marketplaceId: string, name: string): Promise<any>;
    /**
     * This method returns whether or not the user is opted-in to the payment program.
     *
     * @param marketplaceId This query parameter specifies the eBay marketplace of the policy you want to retrieve.
     * @param paymentsProgramType This path parameter specifies the payments program whose status is returned by the
     *     call.
     */
    getPaymentsProgram(marketplaceId: string, paymentsProgramType: string): Promise<any>;
    /**
     * This method retrieves the seller's current set of privileges.
     */
    getPrivileges(): Promise<any>;
    /**
     * This method gets a list of the seller programs that the seller has opted-in to.
     */
    getOptedInPrograms(): Promise<any>;
    /**
     * This method opts the seller in to an eBay seller program.
     *
     * @param body Program being opted-in to.
     */
    optInToProgram(body?: Program): Promise<any>;
    /**
     * This method opts the seller out of a seller program to which you have previously opted-in to.
     *
     * @param body Program being opted-out of.
     */
    optOutOfProgram(body?: Program): Promise<any>;
    /**
     * This method retrieves a seller's shipping rate tables for the country specified in the country_code query
     * parameter.
     *
     * @param countryCode This query parameter specifies the two-letter ISO 3166-1 Alpha-2 code of country for which
     *     you want shipping-rate table information.
     */
    getRateTables(countryCode?: string): Promise<any>;
    /**
     * This method retrieves all the return policies configured for the marketplace you specify using the
     * marketplace_id query parameter.
     *
     * @param marketplaceId This query parameter specifies the ID of the eBay marketplace of the policy you want to
     *     retrieve.
     */
    getReturnPolicies(marketplaceId: string): Promise<any>;
    /**
     * This method retrieves the complete details of the return policy specified by the returnPolicyId path parameter.
     *
     * @param returnPolicyId This path parameter specifies the of the return policy you want to retrieve.
     */
    getReturnPolicy(returnPolicyId: string): Promise<any>;
    /**
     * This method creates a new return policy where the policy encapsulates seller's terms for returning items.
     *
     * @param body Return policy request
     */
    createReturnPolicy(body: ReturnPolicyRequest): Promise<any>;
    /**
     * This method creates a new return policy where the policy encapsulates seller's terms for returning items.
     *
     *  @param returnPolicyId This path parameter specifies the ID of the return policy you want to update.
     * @param body Return policy request
     */
    updateReturnPolicy(returnPolicyId: string, body: ReturnPolicyRequest): Promise<any>;
    /**
     * This method deletes a return policy.
     *
     * @param returnPolicyId This path parameter specifies the ID of the return policy you want to delete.
     */
    deleteReturnPolicy(returnPolicyId: string): Promise<any>;
    /**
     * This method retrieves the complete details of a single return policy.
     *
     * @param marketplaceId This query parameter specifies the ID of the eBay marketplace of the policy you want to
     *     retrieve.
     * @param name This query parameter specifies the user-defined name of the return policy you want to retrieve.
     */
    getReturnPolicyByName(marketplaceId: string, name: string): Promise<any>;
    /**
     * This call gets the current tax table entry for a specific tax jurisdiction.
     *
     * @param countryCode This path parameter specifies the two-letter ISO 3166-1 Alpha-2 code for the country whose
     *     tax table you want to retrieve.
     * @param jurisdictionId This path parameter specifies the ID of the sales tax jurisdiction for the tax table entry
     *     you want to retrieve.
     */
    getSalesTax(countryCode: string, jurisdictionId: string): Promise<any>;
    /**
     * This method creates or updates a sales tax table entry for a jurisdiction.
     *
     * @param countryCode This path parameter specifies the two-letter ISO 3166-1 Alpha-2 code for the country for
     *     which you want to create tax table entry.
     * @param jurisdictionId This path parameter specifies the ID of the sales-tax jurisdiction for the table entry you
     *     want to create.
     * @param body A container that describes the how the sales tax is calculated.
     */
    createOrReplaceSalesTax(countryCode: string, jurisdictionId: string, body: SalesTaxBase): Promise<any>;
    /**
     * This call deletes a tax table entry for a jurisdiction.
     *
     * @param countryCode This path parameter specifies the two-letter ISO 3166-1 Alpha-2 code for the country for
     *     which you want to create tax table entry.
     * @param jurisdictionId This path parameter specifies the ID of the sales-tax jurisdiction for the table entry you
     *     want to delete.
     */
    deleteSalesTax(countryCode: string, jurisdictionId: string): Promise<any>;
    /**
     * Use this call to retrieve a sales tax table that the seller established for a specific country.
     *
     * @param countryCode This path parameter specifies the two-letter ISO 3166-1 Alpha-2 code for the country whose
     *     tax table you want to retrieve.
     */
    getSalesTaxes(countryCode: string): Promise<any>;
}
