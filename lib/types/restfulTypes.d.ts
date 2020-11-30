import { CaseSearchFieldGroup, CaseStatusFilter, DecisionEnum, EscalateReasonEnum, FilePurposeEnum, InquirySearchFieldGroup, InquiryStatusFilter, RefundFeeTypeEnum, RequestTypeEnum, ReturnCountFilterEnum, ReturnReasonEnum, ReturnStateEnum, ReturnTypeEnum, ShippingCarrierEnum, UserRoleFilter } from '../enums/enums';
export declare type AttributeNameValue = {
    name: string;
    value: string;
};
export declare type CompatibilityPayload = {
    compatibilityProperties: AttributeNameValue[];
};
export declare type CatalogSearchParams = {
    aspect_filter?: string;
    category_ids?: string;
    fieldgroups?: string;
    gtin?: string;
    limit?: number;
    offset?: number;
    q?: string;
};
export declare type BrowseSearchParams = {
    aspect_filter?: string;
    category_ids?: string;
    charity_ids?: string;
    compatibility_filter?: string;
    epid?: string;
    fieldgroups?: string;
    filter?: string;
    gtin?: string;
    limit?: number;
    offset?: number;
    q?: string;
    sort?: string;
};
export declare type SearchByImageParams = {
    aspect_filter?: string;
    category_ids?: string;
    epid?: string;
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
};
export declare type LegacyItemParams = {
    legacy_item_id: string;
    fieldgroups?: string;
    legacy_variation_id?: string;
    legacy_variation_sku?: string;
};
export declare type AddCartItemInput = {
    itemId: string;
    quantity: number;
};
export declare type RemoveCartItemInput = {
    cartItemId: string;
};
export declare type UpdateCartItemInput = {
    cartItemId: string;
    quantity: number;
};
export declare type Amount = {
    convertedFromCurrency?: string;
    convertedFromValue?: number;
    value: string;
    currency?: string;
};
export declare type FeedParams = {
    feed_scope: string;
    category_id: string;
    date: string;
};
export declare type AlsoBoughtByProductParams = {
    name?: string;
    epid?: string;
    gtin?: string;
    mpn?: string;
};
export declare type AlsoViewedByProductParams = {
    brand?: string;
    epid?: string;
    gtin?: string;
    mpn?: string;
};
export declare type MerchandisedProductsParams = {
    aspect_filter?: false;
    category_id: string;
    limit?: number;
    metric_name: string;
};
export declare type UserConsent = {
    adultOnlyItem: boolean;
};
export declare type PlaceProxyBidRequest = {
    maxAmount: Amount;
    userConsent: UserConsent;
};
export declare type CouponRequest = {
    redemptionCode: string;
};
export declare type CreditCard = {
    accountHolderName: string;
    billingAddress: string;
    brand: string;
    cardNumber: string;
    cvvNumber: string;
    expireMonth: number;
    expireYear: number;
};
export declare type Wallet = {
    paymentToken: string;
};
export declare type LineItemInput = {
    itemId: string;
    quantity: number;
};
export declare type ShippingAddress = {
    addressLine1: string;
    addressLine2: string;
    city: string;
    country: string;
    county: string;
    phoneNumber: string;
    postalCode: string;
    recipient: string;
    stateOrProvince: string;
};
export declare type CreateSignInCheckoutSessionRequest = {
    creditCard: CreditCard;
    lineItemInputs: LineItemInput;
    shippingAddress: ShippingAddress;
};
export declare type UpdatePaymentInformation = {
    creditCard: CreditCard;
    wallet: Wallet;
};
export declare type UpdateQuantity = {
    lineItemId: string;
    quantity: number;
};
export declare type ShippingAddressImpl = {
    addressLine1: string;
    addressLine2: string;
    city: string;
    country: string;
    county: string;
    phoneNumber: string;
    postalCode: string;
    recipient: string;
    stateOrProvince: string;
};
export declare type UpdateShippingOption = {
    lineItemId: string;
    shippingOptionId: string;
};
export declare type CheckoutSessionRequest = {
    contactEmail: string;
    contactFirstName: string;
    contactLastName: string;
    creditCard: string;
    lineItemInputs: LineItemInput;
    shippingAddress: ShippingAddress;
};
export declare type InitiatePaymentRequest = {
    paymentMethodBrandType: string;
    paymentMethodType: string;
};
export declare type MarketingTerms = {
    marketingChannels: string[];
    marketingTermsAccepted: boolean;
    marketingTypes: string[];
};
export declare type GuestPlaceOrderRequest = {
    marketingTerms: MarketingTerms[];
};
export declare type Program = {
    programType: string;
};
export declare type LegacyReference = {
    legacyItemId: string;
    legacyTransactionId: string;
};
export declare type RefundItem = {
    refundAmount: Amount;
    lineItemId: string;
    legacyReference: LegacyReference;
};
export declare type IssueRefundRequest = {
    reasonForRefund: string;
    comment: string;
    refundItems: RefundItem[];
    orderLevelRefundAmount: Amount;
};
export declare type Comments = {
    content: string;
    language?: string;
    translatedFromContent?: string;
    translatedFromLanguage?: string;
};
export declare type PostOrderItemizedRefundDetailType = {
    refundAmount: Amount;
    refundFeeType: RefundFeeTypeEnum;
    restockingFeePercentage?: string;
};
export declare type RefundDetail = {
    itemizedRefundDetail: PostOrderItemizedRefundDetailType[];
    totalAmount: Amount;
};
export declare type PostOrderIssueRefundRequest = {
    comments?: Comments;
    refundDetail: RefundDetail;
    relistItem?: boolean;
};
export declare type Interval = {
    close: string;
    open: string;
};
export declare type OperatingHours = {
    dayOfWeekEnum: string;
    intervals: Interval[];
};
export declare type SpecialHours = {
    date: string;
    intervals: Interval[];
};
export declare type InventoryLocation = {
    locationAdditionalInformation?: string;
    locationInstructions?: string;
    locationWebUrl?: string;
    name?: string;
    operatingHours?: OperatingHours;
    phone?: string;
    specialHours?: SpecialHours;
};
export declare type GeoCoordinates = {
    latitude: number;
    longitude: number;
};
export declare type LocationDetails = {
    address: Address;
    geoCoordinates?: GeoCoordinates;
};
export declare type InventoryLocationFull = InventoryLocation & {
    location: LocationDetails;
    locationTypes?: string[];
    merchantLocationStatus?: string;
};
export declare type AvailabilityDistribution = {
    fulfillmentTime?: TimeDuration;
    merchantLocationKey: string;
    quantity: number;
};
export declare type ShipToLocationAvailability = {
    availabilityDistributions?: AvailabilityDistribution[];
    quantity: number;
};
export declare type OfferPriceQuantity = {
    offerId: string;
    availableQuantity: number;
    price: Amount;
};
export declare type PriceQuantity = {
    sku: string;
    shipToLocationAvailability: ShipToLocationAvailability;
    offers: OfferPriceQuantity[];
};
export declare type BulkPriceQuantity = {
    requests: PriceQuantity[];
};
export declare type PickupAtLocationAvailability = {
    availabilityType: string;
    fulfillmentTime: TimeDuration;
    merchantLocationKey: string;
    quantity: number;
};
export declare type Availability = {
    pickupAtLocationAvailability?: PickupAtLocationAvailability;
    shipToLocationAvailability: ShipToLocationAvailability;
};
export declare type Dimension = {
    height: number;
    length: number;
    unit: string;
    width: number;
};
export declare type Weight = {
    unit: string;
    value: number;
};
export declare type PackageWeightAndSize = {
    dimensions?: Dimension;
    packageType?: string;
    weight: Weight;
};
export declare type Product = {
    aspects?: any;
    brand?: string;
    description?: string;
    imageUrls: string[];
    mpn?: string;
    subtitle?: string;
    title: string;
    isbn?: string[];
    upc?: string[];
    ean?: string[];
    epid?: string;
};
export declare type InventoryItemWithSkuLocale = SellInventoryItem & {
    sku: string;
    locale?: string;
};
export declare type BulkInventoryItem = {
    requests: InventoryItemWithSkuLocale[];
};
export declare type PublishByInventoryItemGroupRequest = {
    inventoryItemGroupKey: string;
    marketplaceId: string;
};
export declare type WithdrawByInventoryItemGroupRequest = {
    inventoryItemGroupKey: string;
    marketplaceId: string;
};
export declare type OfferKeyWithId = {
    offerId: string;
};
export declare type OfferKeysWithId = {
    offers: OfferKeyWithId[];
};
export declare type ShippingCostOverride = {
    surcharge?: Amount;
    additionalShippingCost?: Amount;
    priority: number;
    shippingCost?: Amount;
    shippingServiceType: string;
};
export declare type BestOffer = {
    autoAcceptPrice?: Amount;
    autoDeclinePrice?: Amount;
    bestOfferEnabled?: boolean;
};
export declare type ListingPolicies = {
    bestOfferTerms?: BestOffer;
    paymentPolicyId: string;
    returnPolicyId: string;
    shippingCostOverrides?: ShippingCostOverride[];
    fulfillmentPolicyId: string;
    ebayPlusIfEligible?: boolean;
};
export declare type PricingSummary = {
    minimumAdvertisedPrice?: Amount;
    pricingVisibility?: string;
    originallySoldForRetailPriceOn?: string;
    originalRetailPrice?: Amount;
    price: Amount;
};
export declare type Tax = {
    applyTax: boolean;
    thirdPartyTaxCategory?: string;
    vatPercentage?: number;
};
export declare type Charity = {
    charityId: string;
    donationPercentage: string;
};
export declare type EbayOfferDetailsWithId = {
    availableQuantity?: number;
    categoryId?: string;
    charity?: Charity;
    includeCatalogProductDetails?: boolean;
    listingDescription?: string;
    listingDuration?: string;
    listingPolicies: ListingPolicies;
    merchantLocationKey: string;
    pricingSummary: PricingSummary;
    quantityLimitPerBuyer?: number;
    secondaryCategoryId?: string;
    tax?: Tax;
    storeCategoryNames?: string[];
    lotSize?: number;
};
export declare type EbayOfferDetailsWithKeys = EbayOfferDetailsWithId & {
    sku: string;
    marketplaceId: string;
    format: string;
};
export declare type BulkEbayOfferDetailsWithKeys = {
    requests: EbayOfferDetailsWithKeys[];
};
export declare type BulkOffer = {
    requests: OfferKeyWithId[];
};
export declare type MigrateListing = {
    listingId: string;
};
export declare type BulkMigrateListing = {
    requests: MigrateListing[];
};
export declare type FindListingRecommendationRequest = {
    listingIds: string[];
};
export declare type TranslateRequest = {
    from: string;
    to: string;
    translationContext: string;
    text: string[];
};
export declare type CreateAdsByInventoryReferenceRequest = {
    bidPercentage: string;
    inventoryReferenceId: string;
    inventoryReferenceType: string;
};
export declare type BulkCreateAdsByInventoryReferenceRequest = {
    requests: CreateAdsByInventoryReferenceRequest[];
};
export declare type CreateAdRequest = {
    bidPercentage: string;
    listingId: string;
};
export declare type BulkCreateAdRequest = {
    requests: CreateAdRequest[];
};
export declare type DeleteAdsByInventoryReferenceRequest = {
    inventoryReferenceId: string;
    inventoryReferenceType: string;
};
export declare type BulkDeleteAdsByInventoryReferenceRequest = {
    requests: DeleteAdsByInventoryReferenceRequest[];
};
export declare type DeleteAdRequest = {
    listingId: string;
};
export declare type BulkDeleteAdRequest = {
    requests: DeleteAdRequest[];
};
export declare type UpdateBidPercentageRequest = {
    bidPercentage: string;
};
export declare type FundingStrategy = {
    bidPercentage: string;
    fundingModel: string;
};
export declare type CloneCampaignRequest = {
    campaignName: string;
    endDate: string;
    fundingStrategy: FundingStrategy;
    startDate: string;
};
export declare type UpdateCampaignIdentificationRequest = {
    campaignName: string;
    endDate: string;
    startDate: string;
};
export declare type DiscountBenefit = {
    amountOffItem: Amount;
    amountOffOrder: Amount;
    percentageOffItem: string;
    percentageOffOrder: string;
};
export declare type InventoryItem = {
    inventoryReferenceId: string;
};
export declare type SelectionRule = {
    brands: string[];
    categoryIds: string[];
    categoryScope: string;
    listingConditionIds: string[];
    maxPrice: Amount;
    minPrice: Amount;
};
export declare type RuleCriteria = {
    excludeInventoryItems: InventoryItem[];
    excludeListingIds: string[];
    markupInventoryItems: InventoryItem[];
    markupListingIds: string[];
    selectionRules: SelectionRule;
};
export declare type InventoryCriterion = {
    inventoryCriterionType: string;
    inventoryItems: InventoryItem;
    listingIds: string[];
    ruleCriteria: RuleCriteria;
};
export declare type SelectedInventoryDiscount = {
    discountBenefit: DiscountBenefit;
    discountId: string;
    inventoryCriterion: InventoryCriterion;
    ruleOrder: number;
};
export declare type ItemPriceMarkdown = {
    applyFreeShipping: boolean;
    autoSelectFutureInventory: boolean;
    blockPriceIncreaseInItemRevision: boolean;
    description: string;
    endDate: string;
    marketplaceId: string;
    name: string;
    priority: string;
    promotionImageUrl: string;
    promotionStatus: string;
    selectedInventoryDiscounts: SelectedInventoryDiscount;
    startDate: string;
};
export declare type DiscountSpecification = {
    properties: Amount;
    forEachQuantity: number;
    minAmount: Amount;
    minQuantity: number;
    numberOfDiscountedItems: number;
};
export declare type DiscountRule = {
    discountBenefit: DiscountBenefit;
    discountSpecification: DiscountSpecification;
    ruleOrder: number;
};
export declare type ItemPromotion = {
    applyDiscountToSingleItemOnly: boolean;
    description: string;
    discountRules: DiscountRule[];
    endDate: string;
    inventoryCriterion: InventoryCriterion;
    marketplaceId: string;
    name: string;
    priority: string;
    promotionImageUrl: string;
    promotionStatus: string;
    promotionType: string;
    startDate: string;
};
export declare type DateTime = {
    value: string;
};
export declare type LineItem = {
    itemId: number;
    quantity: number;
    transactionId: number;
};
export declare type CreateCancelRequest = {
    buyerPaid?: boolean;
    buyerPaidDate?: DateTime;
    cancelReason?: any;
    legacyOrderId: string;
    relistLineItem?: LineItem[];
};
export declare type ConfirmRefundRequest = {
    refundDate?: DateTime;
    unpaidOrder?: boolean;
};
export declare type RejectCancelRequest = {
    shipmentDate?: DateTime;
    trackingNumber?: string;
};
export declare type CancelSortField = {
    ascending: boolean;
    enumValue: 'CANCEL_ID' | 'CANCEL_REQUEST_DATE';
    field: '+' | '-';
};
export declare type CancellationSearchParams = {
    cancel_id?: string;
    creation_date_range_from?: string;
    creation_date_range_to?: string;
    item_id?: string;
    legacy_order_id?: string;
    limit?: string;
    offset?: string;
    role?: UserRoleFilter;
    sort?: CancelSortField;
    transaction_id?: string;
};
export declare type Text = {
    content: string;
    language?: string;
    translatedFromContent?: string;
    translatedFromLanguage?: string;
};
export declare type AppealRequest = {
    comments: Text;
};
export declare type BuyerCloseCaseRequest = {
    closeReason: boolean;
    comments?: Text;
};
export declare type Address = {
    addressLine1?: string;
    addressLine2?: string;
    addressType?: string;
    city?: string;
    country?: string;
    county?: string;
    isTransliterated?: boolean;
    nationalRegion?: string;
    postalCode?: string;
    script?: string;
    stateOrProvince?: string;
    transliteratedFromScript?: string;
    worldRegion?: string;
};
export declare type ReturnAddressRequest = {
    firstName?: string;
    lastName?: string;
    returnAddress?: Address;
    RMA?: string;
};
export declare type CaseSearchParams = {
    case_creation_date_range_from: string;
    case_creation_date_range_to: string;
    case_status_filter: CaseStatusFilter;
    fieldgroups: CaseSearchFieldGroup;
    item_id: string;
    limit: number;
    offset: number;
    order_id: string;
    return_id: string;
    sort: string;
    transaction_id: string;
};
export declare type CheckInquiryEligibilityRequest = {
    itemId: string;
    transactionId: string;
};
export declare type Token = string;
export declare type BuyerCloseInquiryRequest = {
    closeReason?: Token;
    comments?: Text;
};
export declare type CreateInquiryRequest = {
    claimQuantity?: number;
    comments?: Text;
    desiredOutcome?: Token;
    itemId: string;
    transactionId: string;
};
export declare type EscalateInquiryRequest = {
    comments?: Text;
    escalateInquiryReason: Token;
};
export declare type InquiryVoluntaryRefundRequest = {
    comments?: Text;
};
export declare type SellerProvideRefundInfoRequest = {
    message: Text;
};
export declare type ShipmentInfoRequest = {
    proofOfShipmentUploaded?: boolean;
    sellerComments?: Text;
    shippedWithTracking?: boolean;
    shippingCarrierName?: string;
    shippingDate?: DateTime;
    trackingNumber?: string;
};
export declare type InquirySearchParams = {
    fieldgroups?: InquirySearchFieldGroup;
    inquiry_creation_date_range_from?: string;
    inquiry_creation_date_range_to?: string;
    inquiry_status?: InquiryStatusFilter;
    item_id?: string;
    limit?: number;
    offset?: number;
    order_id?: string;
    sort?: string;
    transaction_id?: string;
};
export declare type SendMessageRequest = {
    message: Text;
};
export declare type UpdateTrackingRequest = {
    newCarrierEnum?: ShippingCarrierEnum;
    newCarrierName?: string;
    newTrackingNumber?: string;
    usedCarrierEnum?: ShippingCarrierEnum;
    usedCarrierName?: string;
    usedTrackingNumber?: string;
};
export declare type ReturnRequestType = {
    carrier?: ShippingCarrierEnum;
    comments?: Text;
    itemId: string;
    reason?: ReturnReasonEnum;
    requestType: RequestTypeEnum;
    returnQuantity?: number;
    transactionId: string;
    type?: ReturnTypeEnum;
};
export declare type SetReturnCreationSessionRequest = {
    returnRequest: ReturnRequestType;
};
export declare type CreateReturnRequest = {
    draftId?: string;
    returnRequest: ReturnRequestType;
};
export declare type ProvideLabelRequest = {
    carrierEnum?: ShippingCarrierEnum;
    carrierName?: string;
    comments?: Text;
    fileId?: string;
    forwardShippingLabelProvided?: boolean;
    labelAction: Token;
    labelSentDate?: DateTime;
    noLabelReason: Token;
    returnLabelCost?: Amount;
    trackingNumber?: string;
};
export declare type CloseReturnRequest = {
    buyerCloseReason?: Token;
    comments?: Text;
};
export declare type CheckEligibilityRequest = {
    checkTypes: Token[];
    itemId: string;
    reason: Token;
    returnQuantity?: number;
    transactionId: string;
};
export declare type EscalateRequest = {
    comments: Text;
    reason: EscalateReasonEnum;
};
export declare type GetEstimateRequest = {
    itemId: string;
    reason?: ReturnReasonEnum;
    returnQuantity?: number;
    transactionId: string;
};
export declare type MarkAsReceivedRequest = {
    comments?: Text;
};
export declare type ItemizedRefundDetailType = {
    refundAmount: Amount;
    refundFeeType: Token;
};
export declare type RefundDetailType = {
    itemizedRefundDetail: ItemizedRefundDetailType;
    totalAmount: Amount;
};
export declare type MarkRefundSentRequest = {
    comments?: Text;
    partialRefundAmount?: Amount;
    refundDetail: RefundDetailType;
};
export declare type MarkAsShippedRequest = {
    carrierEnum?: ShippingCarrierEnum;
    carrierName?: string;
    carrierUsed?: string;
    comments?: Text;
    shippedDate?: DateTime;
    trackingNumber: string;
};
export declare type UploadFileRequest = {
    data: any;
    fileName?: string;
    filePurpose: FilePurposeEnum;
};
export declare type VoidLabelRequest = {
    comments?: Text;
    labelId: string;
};
export declare type SearchReturnParams = {
    creation_date_range_from?: string;
    creation_date_range_to?: string;
    item_id?: string;
    limit?: number;
    offset?: number;
    order_id?: string;
    return_id?: string;
    return_state?: Token;
    role?: Token;
    sort?: ReturnCountFilterEnum;
    states?: ReturnStateEnum;
    transaction_id?: string;
};
export declare type DecideReturnRequest = {
    comments?: Text;
    decision: DecisionEnum;
    keepOriginalItem?: boolean;
    partialRefundAmount?: Amount;
    RMANumber?: string;
    rMAProvided?: boolean;
};
export declare type CategoryType = {
    default?: boolean;
    name: string;
};
export declare type TimeDuration = {
    unit: string;
    value: number;
};
export declare type Region = {
    regionName: string;
    regionType?: string;
};
export declare type RegionSet = {
    regionExcluded?: Region[];
    regionIncluded?: Region[];
};
export declare type ShippingService = {
    additionalShippingCost?: Amount;
    buyerResponsibleForPickup?: boolean;
    buyerResponsibleForShipping?: boolean;
    cashOnDeliveryFee?: Amount;
    freeShipping?: boolean;
    shippingCarrierCode?: string;
    shippingCost?: Amount;
    shippingServiceCode?: string;
    shipToLocations?: RegionSet;
    sortOrder?: number;
    surcharge?: Amount;
};
export declare type ShippingOption = {
    costType: string;
    insuranceFee?: Amount;
    insuranceOffered?: boolean;
    optionType: string;
    packageHandlingCost?: Amount;
    rateTableId?: string;
    shippingServices: ShippingService[];
};
export declare type FulfillmentPolicyRequest = {
    categoryTypes: CategoryType[];
    description?: string;
    freightShipping?: boolean;
    globalShipping?: boolean;
    handlingTime: TimeDuration;
    localPickup?: boolean;
    marketplaceId: string;
    name: string;
    pickupDropOff?: boolean;
    shippingOptions?: ShippingOption[];
    shipToLocations?: RegionSet;
};
export declare type RecipientAccountReference = {
    referenceId: string;
    referenceType: string;
};
export declare type PaymentMethod = {
    brands?: string[];
    paymentMethodType?: string;
    recipientAccountReference?: RecipientAccountReference;
};
export declare type Deposit = {
    amount?: Amount;
    dueIn?: TimeDuration;
    paymentMethods: PaymentMethod[];
};
export declare type PaymentPolicyRequest = {
    categoryTypes: CategoryType[];
    deposit?: Deposit;
    description?: string;
    fullPaymentDueIn?: TimeDuration;
    immediatePay?: boolean;
    marketplaceId: string;
    name: string;
    paymentInstructions?: string;
    paymentMethods?: PaymentMethod[];
};
export declare type InternationalReturnOverrideType = {
    returnMethod?: string;
    returnPeriod?: TimeDuration;
    returnsAccepted?: boolean;
    returnShippingCostPayer?: string;
};
export declare type ReturnPolicyRequest = {
    categoryTypes?: CategoryType[];
    description?: string;
    extendedHolidayReturnsOffered?: boolean;
    internationalOverride?: InternationalReturnOverrideType;
    marketplaceId: string;
    name: string;
    refundMethod?: string;
    restockingFeePercentage?: string;
    returnInstructions?: string;
    returnMethod?: string;
    returnPeriod?: TimeDuration;
    returnsAccepted: boolean;
    returnShippingCostPayer?: string;
};
export declare type SalesTaxBase = {
    salesTaxPercentage: string;
    shippingAndHandlingTaxed: boolean;
};
export declare type LineItemReference = {
    lineItemId: string;
    quantity?: number;
};
export declare type ShippingFulfillmentDetails = {
    lineItems: LineItemReference[];
    shippedDate: string;
    shippingCarrierCode: string;
    trackingNumber: string;
};
export declare type SellInventoryItem = {
    availability: Availability;
    condition: string;
    conditionDescription?: string;
    packageWeightAndSize?: PackageWeightAndSize;
    product: Product;
};
export declare type ProductFamilyProperties = {
    make: string;
    model: string;
    year: string;
    trim?: string;
    engine?: string;
};
export declare type ProductIdentifier = {
    epid?: string;
    gtin?: string;
    ktype?: string;
};
export declare type NameValueList = {
    name: string;
    value: string;
};
export declare type CompatibleProduct = {
    compatibilityProperties?: NameValueList[];
    productFamilyProperties?: ProductFamilyProperties;
    productIdentifier?: ProductIdentifier;
    notes?: string;
};
export declare type Compatibility = {
    compatibleProducts: CompatibleProduct[];
};
export declare type Specification = {
    name: string;
    values: string[];
};
export declare type VariesBy = {
    aspectsImageVariesBy: string[];
    specifications: Specification[];
};
export declare type InventoryItemGroup = {
    aspects: any;
    description: string;
    inventoryItemGroupKey: string;
    imageUrls: string[];
    subtitle?: string;
    title: string;
    variantSKUs: string[];
    variesBy: VariesBy;
};
export declare type CampaignCriterion = {
    autoSelectFutureInventory: boolean;
    criterionType: string;
    selectionRules: SelectionRule[];
};
export declare type CreateCampaignRequest = {
    campaignCriterion: CampaignCriterion;
    campaignName: string;
    endDate: string;
    fundingStrategy: FundingStrategy;
    marketplaceId: string;
    startDate: string;
};
export declare type InventoryReference = {
    inventoryReferenceId?: string;
    inventoryReferenceType?: string;
};
export declare type CreateReportTask = {
    campaignIds: string[];
    dateFrom: string;
    dateTo: string;
    dimensions: Dimension[];
    inventoryReferences?: InventoryReference;
    listingIds: string[];
    marketplaceId: string;
    metricKeys: string[];
    reportFormat: string;
    reportType: string;
};
