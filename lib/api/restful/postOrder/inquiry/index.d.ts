import Api from '../../';
import { BuyerCloseInquiryRequest, CheckInquiryEligibilityRequest, CreateInquiryRequest, EscalateInquiryRequest, InquirySearchParams, InquiryVoluntaryRefundRequest, SellerProvideRefundInfoRequest, SendMessageRequest, ShipmentInfoRequest } from '../../../../types/restfulTypes';
/**
 * Post-Order Inquiry API
 */
export default class Inquiry extends Api {
    get basePath(): string;
    useIaf(): boolean;
    /**
     * Check if a buyer is eligible to open an inquiry on an order.
     *
     * @param payload the CheckInquiryEligibilityRequest
     */
    checkInquiryEligibility(payload: CheckInquiryEligibilityRequest): Promise<any>;
    /**
     * Close an inquiry for the buyer
     *
     * @param inquiryId The unique ID of the inquiry to be closed.
     * @param payload the BuyerCloseInquiryRequest
     */
    closeInquiry(inquiryId: string, payload?: BuyerCloseInquiryRequest): Promise<any>;
    /**
     * Buyer confirms the refund from an inquiry was received
     *
     * @param inquiryId The unique identifier of a case.
     */
    confirmInquiryRefund(inquiryId: string): Promise<any>;
    /**
     * Create an inquiry for the buyer.
     *
     * @param payload the CreateInquiryRequest
     */
    createInquiry(payload: CreateInquiryRequest): Promise<any>;
    /**
     * Escalate an inquiry to an INR case.
     *
     * @param inquiryId the unique identifier of the inquiry to be escalated.
     * @param payload the EscalateInquiryRequest
     */
    escalateInquiry(inquiryId: string, payload: EscalateInquiryRequest): Promise<any>;
    /**
     * Retrieve the history and details related to a specific inquiry.
     *
     * @param inquiryId the unique ID of the inquiry for which details and history are to be retrieved.
     */
    getInquiry(inquiryId: string): Promise<any>;
    /**
     * Issue a refund for an inquiry.
     *
     * @param inquiryId the unique ID of the inquiry for which a refund is to be issued.
     * @param payload   the InquiryVoluntaryRefundRequest
     */
    issueInquiryRefund(inquiryId: string, payload?: InquiryVoluntaryRefundRequest): Promise<any>;
    /**
     * Provide refund information about an inquiry to the buyer.
     *
     * @param inquiryId The unique ID of the inquiry for which to provide refund information.
     * @param payload   the InquiryVoluntaryRefundRequest
     */
    provideInquiryRefundInfo(inquiryId: string, payload: SellerProvideRefundInfoRequest): Promise<any>;
    /**
     * Provide shipment information for an inquiry.
     *
     * @param inquiryId The unique ID of the inquiry for which to provide shipment information.
     * @param payload the  ShipmentInfoRequest
     */
    provideInquiryShipmentInfo(inquiryId: string, payload?: ShipmentInfoRequest): Promise<any>;
    /**
     * This call is used to search for inquiries using multiple filter types.
     *
     * @param params the  InquirySearchParams
     */
    search(params?: InquirySearchParams): Promise<any>;
    /**
     * Contact the buyer or seller about an inquiry.
     *
     * @param inquiryId The unique ID of the inquiry being discussed.
     * @param payload the SendMessageRequest
     */
    sendInquiryMessage(inquiryId: string, payload: SendMessageRequest): Promise<any>;
}
