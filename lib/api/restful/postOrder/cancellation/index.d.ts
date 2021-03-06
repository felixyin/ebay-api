import Api from '../../';
import { CancellationSearchParams, ConfirmRefundRequest, CreateCancelRequest, RejectCancelRequest } from '../../../../types/restfulTypes';
/**
 * Post-Order Cancellation API
 */
export default class Cancellation extends Api {
    get basePath(): string;
    useIaf(): boolean;
    /**
     * Seller approves a cancellation request
     *
     * @param cancelId The unique eBay-assigned identifier of the cancellation request to be approved.
     */
    approveCancellationRequest(cancelId: string): Promise<any>;
    /**
     * Check the eligibility of an order cancellation
     *
     * @param legacyOrderId The unique ID of the order being canceled or the order being considered for cancellation.
     */
    checkCancellationEligibility(legacyOrderId: string): Promise<any>;
    /**
     * Buyer confirms the refund from a cancellation was received
     *
     * @param cancelId The unique eBay-assigned identifier of the cancellation/refund being confirmed.
     * @param payload the ConfirmRefundReceivedPayload
     */
    confirmRefundReceived(cancelId: string, payload?: ConfirmRefundRequest): Promise<any>;
    /**
     * Request or perform an order cancellation.
     *
     * @param payload the CreateCancelRequest
     */
    createCancellation(payload: CreateCancelRequest): Promise<any>;
    /**
     * Retrieve the details of an order cancellation.
     *
     * @param cancelId Supply in this path parameter the unique eBay-assigned ID of the cancellation request to
     *     retrieve.
     * @param fieldGroups    The value set in this query parameter controls the level of detail that is returned in the
     *     response.
     */
    getCancellation(cancelId: string, fieldGroups?: string): Promise<any>;
    /**
     * Seller rejects a cancellation request.
     *
     * @param cancelId The unique eBay-assigned identifier of the cancellation request to be rejected.
     * @param payload the RejectCancelRequest
     */
    rejectCancellationRequest(cancelId: string, payload?: RejectCancelRequest): Promise<any>;
    /**
     * Search for cancellations.
     *
     * @param params the SearchParams
     */
    search(params: CancellationSearchParams): Promise<any>;
}
