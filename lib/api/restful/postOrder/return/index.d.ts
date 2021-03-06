import Api from '../../';
import { FilePurposeEnum, GetReturnFieldGroupEnum } from '../../../../enums/enums';
import { CheckEligibilityRequest, CloseReturnRequest, CreateReturnRequest, DecideReturnRequest, EscalateRequest, GetEstimateRequest, MarkAsReceivedRequest, MarkAsShippedRequest, MarkRefundSentRequest, PostOrderIssueRefundRequest, ProvideLabelRequest, ReturnRequestType, SearchReturnParams, SendMessageRequest, SetReturnCreationSessionRequest, UpdateTrackingRequest, UploadFileRequest, VoidLabelRequest } from '../../../../types/restfulTypes';
/**
 * Post-Order Return API
 */
export default class Return extends Api {
    get basePath(): string;
    useIaf(): boolean;
    /**
     * Create or update a shipping label provided by the seller.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload the ProvideLabelRequest
     */
    addShippingLabelInfo(returnId: string, payload: ProvideLabelRequest): Promise<any>;
    /**
     * Cancel a return request.
     *
     * @param returnId    The unique eBay-assigned ID of the return request.
     * @param payload    The CloseReturnRequest.
     */
    cancelReturnRequest(returnId: string, payload?: CloseReturnRequest): Promise<any>;
    /**
     * Check to see if an item is eligible for a return.
     *
     * @param payload the CheckEligibilityRequest
     */
    checkReturnEligibility(payload: CheckEligibilityRequest): Promise<any>;
    /**
     * Validate the eligibility of an existing shipping label.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     */
    checkShippingLabelEligibility(returnId: string): Promise<any>;
    /**
     * Create a return draft.
     *
     * @param payload the SetReturnCreationSessionRequest
     */
    createReturnDraft(payload: SetReturnCreationSessionRequest): Promise<any>;
    /**
     * Request a return for an item.
     *
     * @param payload the CreateReturnRequest
     * @param fieldGroups can be used in the call URI to control the detail level that is returned in response.
     */
    createReturnRequest(payload: CreateReturnRequest, fieldGroups?: GetReturnFieldGroupEnum): Promise<any>;
    /**
     * Create an eBay shipping label for the buyer.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     */
    createReturnShippingLabel(returnId: string): Promise<any>;
    /**
     * Delete a file associated with a return draft.
     *
     * @param draftId    The unique eBay-assigned ID of the return draft.
     * @param fileId The unique eBay-assigned ID of the draft file.
     */
    deleteReturnDraftFile(draftId: string, fileId: string): Promise<any>;
    /**
     * Escalate an existing return to eBay customer support.
     *
     * @param returnId The unique eBay-assigned ID of the return request.
     * @param payload the EscalateRequest
     */
    escalateReturn(returnId: string, payload?: EscalateRequest): Promise<any>;
    /**
     * Retrieve the details of a specific return.
     *
     * @param returnId The unique eBay-assigned ID of the return request.
     * @param fieldGroups can be used in the call URI to control the detail level that is returned in response.
     */
    getReturn(returnId: string, fieldGroups?: GetReturnFieldGroupEnum): Promise<any>;
    /**
     * Retrieve a return draft.
     *
     * @param returnId The unique eBay-assigned ID of the return request.
     */
    getReturnDraft(returnId: string): Promise<any>;
    /**
     * Retrieve the files associated with a return draft.
     *
     * @param returnId    The unique eBay-assigned ID of the return draft.
     */
    getReturnDraftFiles(returnId: string): Promise<any>;
    /**
     * Retrieve the cost estimate of a refund with its shipping cost.
     *
     * @param payload the GetEstimateRequest
     */
    getReturnEstimate(payload: GetEstimateRequest): Promise<any>;
    /**
     * Retrieve the cost estimate of a refund with its shipping cost.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     */
    getReturnFiles(returnId: string): Promise<any>;
    /**
     * Retrieve seller's return preferences.
     */
    getReturnPreferences(): Promise<any>;
    /**
     * Retrieve the data for an existing shipping label.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     */
    getReturnShippingLabel(returnId: string): Promise<any>;
    /**
     * Retrieve shipment tracking activity for a return.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param carrierUsed The shipping carrier used to to ship the package.
     * @param trackingNumber The tracking number of the package.
     */
    getShipmentTrackingInfo(returnId: string, carrierUsed: string, trackingNumber: string): Promise<any>;
    /**
     * Issue a refund.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload The IssueRefundRequest.
     */
    issueReturnRefund(returnId: string, payload: PostOrderIssueRefundRequest): Promise<any>;
    /**
     * Mark a returned item as received.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload the MarkAsReceivedRequest
     */
    markReturnReceived(returnId: string, payload?: MarkAsReceivedRequest): Promise<any>;
    /**
     * Mark a refund as received.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     */
    markReturnRefundReceived(returnId: string): Promise<any>;
    /**
     * Notify the buyer that a refund has been issued.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload the MarkRefundSentRequest
     */
    markReturnRefundSent(returnId: string, payload: MarkRefundSentRequest): Promise<any>;
    /**
     * Mark a return as shipped.
     *
     * @param returnId    The unique eBay-assigned ID of the return.
     * @param payload the MarkAsShippedRequest
     */
    markReturnShipped(returnId: string, payload?: MarkAsShippedRequest): Promise<any>;
    /**
     * Perform an action on a return, such as APPROVE.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload the DecideReturnRequest
     */
    processReturnRequest(returnId: string, payload: DecideReturnRequest): Promise<any>;
    /**
     * Retrieve details on items being returned.
     *
     * @param params the SearchReturnParams
     */
    search(params: SearchReturnParams): Promise<any>;
    /**
     * Send a message to the buyer or seller regarding a return.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload the SendMessageRequest
     */
    sendReturnMessage(returnId: string, payload?: SendMessageRequest): Promise<any>;
    /**
     * Send a shipping label to an email address.
     *
     * @param returnId    The unique eBay-assigned ID of the return.
     * @param toEmailAddress The recipient's email address is specified in this field.
     */
    sendReturnShippingLabel(returnId: string, toEmailAddress?: string): Promise<any>;
    /**
     * Send a shipping label to an email address.
     *
     * @param rmaRequired This field is included and set to true if the seller wishes to require that the buyer provide
     *     a Return Merchandise Authorization (RMA) when returning an item.
     */
    setReturnPreferences(rmaRequired: boolean): Promise<any>;
    /**
     * Activate the files associated with a return.
     *
     * @param returnId    The unique eBay-assigned ID of the return.
     * @param filePurpose This value is used to indicate if the file(s) are being used to provide more information
     *     about the condition of the item, or intended to provide more information about shipment tracking or about
     *     the shipping label.
     */
    submitReturnFile(returnId: string, filePurpose?: FilePurposeEnum): Promise<any>;
    /**
     * Update an existing return draft.
     *
     * @param draftId The unique eBay-assigned ID of the return draft.
     * @param returnRequest the ReturnRequestType
     */
    updateReturnDraft(draftId: string, returnRequest: ReturnRequestType): Promise<any>;
    /**
     * Update shipment tracking information.
     *
     * @param returnId The unique eBay-assigned ID of the return request.
     * @param payload the UpdateTrackingRequest
     */
    updateShipmentTrackingInfo(returnId: string, payload: UpdateTrackingRequest): Promise<any>;
    /**
     * Upload the files relating to a return draft.
     *
     * @param draftId The unique eBay-assigned ID of the return draft.
     * @param payload the UploadFileRequest
     */
    uploadReturnDraftFile(draftId: string, payload: UploadFileRequest): Promise<any>;
    /**
     * Upload the files relating to a return.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload the UploadFileRequest
     */
    uploadReturnFile(returnId: string, payload: UploadFileRequest): Promise<any>;
    /**
     * Void a shipping label.
     *
     * @param returnId The unique eBay-assigned ID of the return.
     * @param payload the VoidLabelRequest
     */
    voidShippingLabel(returnId: string, payload: VoidLabelRequest): Promise<any>;
}
