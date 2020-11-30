export enum UserRoleFilter {
    BUYER = 'BUYER',
    SELLER = 'SELLER'
}

export enum InquirySearchFieldGroup {
    DEFAULT = 'DEFAULT',
    SUMMARY = 'SUMMARY'
}

export enum CaseStatusFilter {
    CLOSED = 'CLOSED',
    CS_CLOSED = 'CS_CLOSED',
    ON_HOLD = 'ON_HOLD',
    OPEN = 'OPEN',
    OTHER = 'OTHER',
    REFUND_AGREED_BUT_FAILED = 'REFUND_AGREED_BUT_FAILED',
    WAITING_CS = 'WAITING_CS',
    WAITING_DELIVERY = 'WAITING_DELIVERY'
}

export enum CaseSearchFieldGroup {
    DEFAULT = 'DEFAULT',
    SUMMARY = 'SUMMARY'
}

export enum InquiryStatusFilter {
    CLOSED = 'CLOSED',
    CLOSED_WITH_ESCALATION = 'CLOSED_WITH_ESCALATION',
    CS_CLOSED = 'CS_CLOSED',
    OPEN = 'OPEN',
    OTHER = 'OTHER',
    PENDING = 'PENDING',
    WAITING_BUYER_RESPONSE = 'WAITING_BUYER_RESPONSE',
    WAITING_SELLER_RESPONSE = 'WAITING_SELLER_RESPONSE'
}

export enum ShippingCarrierEnum {
    AUSTRALIA_POST = 'AUSTRALIA_POST',
    BARTOLINI = 'BARTOLINI',
    CANADA_POST = 'CANADA_POST',
    COLISSIMO = 'COLISSIMO',
    COLLECT_PLUS = 'COLLECT_PLUS',
    CORREOS = 'CORREOS',
    DEUTSCHE_POST = 'DEUTSCHE_POST',
    DHL = 'DHL',
    FEDEX = 'FEDEX',
    HERMES = 'HERMES',
    LA_POSTE = 'LA_POSTE',
    MONDIAL_RELAY = 'MONDIAL_RELAY',
    MRW = 'MRW',
    NEXIVE = 'NEXIVE',
    OTHER = 'OTHER',
    PARCEL_FORCE = 'PARCEL_FORCE',
    POSTE = 'POSTE',
    ROYAL_MAIL = 'ROYAL_MAIL',
    SEUR = 'SEUR',
    UNKNOWN = 'UNKNOWN',
    UPS = 'UPS',
    USPS = 'USPS'
}

export enum ReturnReasonEnum {
    ARRIVED_DAMAGED = 'ARRIVED_DAMAGED',
    ARRIVED_LATE = 'ARRIVED_LATE',
    BUYER_CANCEL_ORDER = 'BUYER_CANCEL_ORDER',
    BUYER_NO_SHOW = 'BUYER_NO_SHOW',
    BUYER_NOT_SCHEDULED = 'BUYER_NOT_SCHEDULED',
    BUYER_REFUSED_TO_PICKUP = 'BUYER_REFUSED_TO_PICKUP',
    DEFECTIVE_ITEM = 'DEFECTIVE_ITEM',
    DIFFERENT_FROM_LISTING = 'DIFFERENT_FROM_LISTING',
    EXPIRED_ITEM = 'EXPIRED_ITEM',
    FAKE_OR_COUNTERFEIT = 'FAKE_OR_COUNTERFEIT',
    FOUND_BETTER_PRICE = 'FOUND_BETTER_PRICE',
    IN_STORE_RETURN = 'IN_STORE_RETURN',
    MISSING_PARTS = 'MISSING_PARTS',
    NO_LONGER_NEED_ITEM = 'NO_LONGER_NEED_ITEM',
    NO_REASON = 'NO_REASON',
    NOT_AS_DESCRIBED = 'NOT_AS_DESCRIBED',
    ORDERED_ACCIDENTALLY = 'ORDERED_ACCIDENTALLY',
    ORDERED_DIFFERENT_ITEM = 'ORDERED_DIFFERENT_ITEM',
    ORDERED_WRONG_ITEM = 'ORDERED_WRONG_ITEM',
    OTHER = 'OTHER',
    OUT_OF_STOCK = 'OUT_OF_STOCK',
    RETURNING_GIFT = 'RETURNING_GIFT',
    VALET_DELIVERY_ISSUES = 'VALET_DELIVERY_ISSUES',
    VALET_UNAVAILABLE = 'VALET_UNAVAILABLE',
    WRONG_SIZE = 'WRONG_SIZE'
}

export enum RequestTypeEnum {
    CREATE = 'CREATE',
    REQUEST = 'REQUEST',
    UNKNOWN = 'UNKNOWN'
}

export enum ReturnTypeEnum {
    EXCHANGE = 'EXCHANGE',
    MONEY_BACK = 'MONEY_BACK',
    REPLACEMENT = 'REPLACEMENT',
    UNKNOWN = 'UNKNOWN'
}

export enum GetReturnFieldGroupEnum {
    FULL = 'FULL',
    NONE = 'NONE',
    SUMMARY = 'SUMMARY'
}

export enum EscalateReasonEnum {
    BUYER_NORESPONSE = 'BUYER_NORESPONSE',
    BUYER_RETURNED_WRONG_ITEM = 'BUYER_RETURNED_WRONG_ITEM',
    DISAGREE_WITH_RETURN_REASON = 'DISAGREE_WITH_RETURN_REASON',
    ITEM_NOT_RECEIVED = 'ITEM_NOT_RECEIVED',
    ITEM_RECEIVED_IN_DIFFERENT_CONDITION = 'ITEM_RECEIVED_IN_DIFFERENT_CONDITION',
    NEW_ITEM_NOT_RECEIVED = 'NEW_ITEM_NOT_RECEIVED',
    NO_REFUND_FOR_RETURN_SHIPPING = 'NO_REFUND_FOR_RETURN_SHIPPING',
    NO_REFUND_RECEIVED = 'NO_REFUND_RECEIVED',
    OTHER = 'OTHER',
    RECEIVED_WRONG_ITEM = 'RECEIVED_WRONG_ITEM',
    SELLER_NO_RESPONSE = 'SELLER_NO_RESPONSE',
    TROUBLE_COMMUNICATION_WITH_BUYER = 'TROUBLE_COMMUNICATION_WITH_BUYER',
    TROUBLE_COMMUNICATION_WITH_SELLER = 'TROUBLE_COMMUNICATION_WITH_SELLER'
}

export enum DecisionEnum {
    ACCEPT_PARTIAL_REFUND = 'ACCEPT_PARTIAL_REFUND',
    ACCEPT_REPLACEMENT_OFFER = 'ACCEPT_REPLACEMENT_OFFER',
    APPROVE = 'APPROVE',
    APPROVE_WITHOUT_EBAY_LABEL = 'APPROVE_WITHOUT_EBAY_LABEL',
    DECLINE = 'DECLINE',
    DECLINE_PARTIAL_REFUND = 'DECLINE_PARTIAL_REFUND',
    DECLINE_REPLACEMENT_OFFER = 'DECLINE_REPLACEMENT_OFFER',
    OFFER_PARTIAL_REFUND = 'OFFER_PARTIAL_REFUND',
    OFFER_REPLACEMENT = 'OFFER_REPLACEMENT',
    OFFER_RETURN = 'OFFER_RETURN',
    OFFER_RETURN_WITHOUT_LABEL = 'OFFER_RETURN_WITHOUT_LABEL',
    PROVIDE_RMA = 'PROVIDE_RMA',
    UNKNOWN = 'UNKNOWN'
}

export enum ReturnCountFilterEnum {
    ALL_OPEN = 'ALL_OPEN',
    ALL_OPEN_REPLACEMENT = 'ALL_OPEN_REPLACEMENT',
    ALL_OPEN_RETURN = 'ALL_OPEN_RETURN',
    CLOSED = 'CLOSED',
    EBAY_PLUS = 'EBAY_PLUS',
    ITEM_DELIVERED = 'ITEM_DELIVERED',
    ITEM_SHIPPED = 'ITEM_SHIPPED',
    RETURN_STARTED = 'RETURN_STARTED',
    SELLER_ACTION_DUE = 'SELLER_ACTION_DUE',
    SELLER_ACTION_OVERDUE = 'SELLER_ACTION_OVERDUE',
    SELLER_NO_ACTION = 'SELLER_NO_ACTION',
    UNKNOWN = 'UNKNOWN'
}

export enum ReturnStateEnum {
    AUTO_REFUND_INITIATED = 'AUTO_REFUND_INITIATED',
    CLOSED = 'CLOSED',
    INITIAL = 'INITIAL',
    ITEM_DELIVERED = 'ITEM_DELIVERED',
    ITEM_KEPT = 'ITEM_KEPT',
    ITEM_READY_TO_SHIP = 'ITEM_READY_TO_SHIP',
    ITEM_SHIPPED = 'ITEM_SHIPPED',
    LESS_THAN_A_FULL_REFUND_ISSUED = 'LESS_THAN_A_FULL_REFUND_ISSUED',
    PARTIAL_REFUND_AS_PAYOUT_INITIATED = 'PARTIAL_REFUND_AS_PAYOUT_INITIATED',
    PARTIAL_REFUND_DECLINED = 'PARTIAL_REFUND_DECLINED',
    PARTIAL_REFUND_FAILED = 'PARTIAL_REFUND_FAILED',
    PARTIAL_REFUND_INITIATED = 'PARTIAL_REFUND_INITIATED',
    PARTIAL_REFUND_NON_PAYPAL_INITIATED = 'PARTIAL_REFUND_NON_PAYPAL_INITIATED',
    PARTIAL_REFUND_REQUESTED = 'PARTIAL_REFUND_REQUESTED',
    PARTIAL_REFUNDED = 'PARTIAL_REFUNDED',
    PAYOUT_INITIATED = 'PAYOUT_INITIATED',
    REFUND_AS_PAYOUT_INITIATED = 'REFUND_AS_PAYOUT_INITIATED',
    REFUND_FAILED = 'REFUND_FAILED',
    REFUND_INITIATED = 'REFUND_INITIATED',
    REFUND_SENT_PENDING_CONFIRMATION = 'REFUND_SENT_PENDING_CONFIRMATION',
    REFUND_TIMEOUT = 'REFUND_TIMEOUT',
    REPLACED = 'REPLACED',
    REPLACEMENT_CLOSED = 'REPLACEMENT_CLOSED',
    REPLACEMENT_DELIVERED = 'REPLACEMENT_DELIVERED',
    REPLACEMENT_LABEL_PENDING = 'REPLACEMENT_LABEL_PENDING',
    REPLACEMENT_LABEL_PENDING_TIMEOUT = 'REPLACEMENT_LABEL_PENDING_TIMEOUT',
    REPLACEMENT_LABEL_REQUESTED = 'REPLACEMENT_LABEL_REQUESTED',
    REPLACEMENT_LABEL_REQUESTED_TIMEOUT = 'REPLACEMENT_LABEL_REQUESTED_TIMEOUT',
    REPLACEMENT_OFFER_PENDING = 'REPLACEMENT_OFFER_PENDING',
    REPLACEMENT_REQUEST_TIMEOUT = 'REPLACEMENT_REQUEST_TIMEOUT',
    REPLACEMENT_REQUESTED = 'REPLACEMENT_REQUESTED',
    REPLACEMENT_RMA_PENDING = 'REPLACEMENT_RMA_PENDING',
    REPLACEMENT_SHIPPED = 'REPLACEMENT_SHIPPED',
    REPLACEMENT_STARTED = 'REPLACEMENT_STARTED',
    RETURN_LABEL_PENDING = 'RETURN_LABEL_PENDING',
    RETURN_LABEL_PENDING_TIMEOUT = 'RETURN_LABEL_PENDING_TIMEOUT',
    RETURN_LABEL_REQUESTED = 'RETURN_LABEL_REQUESTED',
    RETURN_LABEL_REQUESTED_TIMEOUT = 'RETURN_LABEL_REQUESTED_TIMEOUT',
    RETURN_REJECTED = 'RETURN_REJECTED',
    RETURN_REQUEST_TIMEOUT = 'RETURN_REQUEST_TIMEOUT',
    RETURN_REQUESTED = 'RETURN_REQUESTED',
    RMA_PENDING = 'RMA_PENDING',
    UNKNOWN = 'UNKNOWN'
}

export enum FilePurposeEnum {
    ITEM_RELATED = 'ITEM_RELATED',
    LABEL_RELATED = 'LABEL_RELATED',
    REFUND_RELATED = 'REFUND_RELATED',
    UNKNOWN = 'UNKNOWN'
}

export enum RefundFeeTypeEnum {
    DOMESTIC_SHIPPING = 'DOMESTIC_SHIPPING',
    IMPORT_CHARGE = 'IMPORT_CHARGE',
    INTERNATIONAL_SHIPPING = 'INTERNATIONAL_SHIPPING',
    ITEM_IMPORT_TAX = 'ITEM_IMPORT_TAX',
    ITEM_TAX = 'ITEM_TAX',
    ORDER_ADJUSTMENT = 'ORDER_ADJUSTMENT',
    ORIGINAL_SHIPPING = 'ORIGINAL_SHIPPING',
    OTHER = 'OTHER',
    PURCHASE_PRICE = 'PURCHASE_PRICE',
    REFUND_FROM_PAYPAL = 'REFUND_FROM_PAYPAL',
    RETURN_SHIPPING = 'RETURN_SHIPPING',
    SHIPPING_IMPORT_TAX = 'SHIPPING_IMPORT_TAX',
    SHIPPING_TAX = 'SHIPPING_TAX'
}

export enum ActivityOptionEnum {
    AUTO_APPROVE_REMORSE = 'AUTO_APPROVE_REMORSE',
    BUYER_ACCEPT_REPLACEMENT_OFFER = 'BUYER_ACCEPT_REPLACEMENT_OFFER',
    BUYER_ACCEPTS_NON_PAYPAL_PARTIAL_REFUND = 'BUYER_ACCEPTS_NON_PAYPAL_PARTIAL_REFUND',
    BUYER_ACCEPTS_PARTIAL_REFUND = 'BUYER_ACCEPTS_PARTIAL_REFUND',
    BUYER_CLOSE_RETURN = 'BUYER_CLOSE_RETURN',
    BUYER_CREATE_RETURN = 'BUYER_CREATE_RETURN',
    BUYER_DECLINE_PARTIAL_REFUND = 'BUYER_DECLINE_PARTIAL_REFUND',
    BUYER_DECLINE_REPLACEMENT_OFFER = 'BUYER_DECLINE_REPLACEMENT_OFFER',
    BUYER_ESCALATE = 'BUYER_ESCALATE',
    BUYER_MARK_AS_RECEIVED = 'BUYER_MARK_AS_RECEIVED',
    BUYER_MARK_REFUND_RECEIVED = 'BUYER_MARK_REFUND_RECEIVED',
    BUYER_MARK_RETURN_SHIPPED = 'BUYER_MARK_RETURN_SHIPPED',
    BUYER_PRINT_SHIPPING_LABEL = 'BUYER_PRINT_SHIPPING_LABEL',
    BUYER_PROVIDE_LABEL = 'BUYER_PROVIDE_LABEL',
    BUYER_PROVIDE_TRACKING_INFO = 'BUYER_PROVIDE_TRACKING_INFO',
    BUYER_SEND_MESSAGE = 'BUYER_SEND_MESSAGE',
    BUYER_UPDATE_TRACKING = 'BUYER_UPDATE_TRACKING',
    BUYER_VOID_LABEL = 'BUYER_VOID_LABEL',
    CHARGEBACK_OPEN = 'CHARGEBACK_OPEN',
    DELETE_FILE = 'DELETE_FILE',
    EMAIL_SHIPPING_LABEL = 'EMAIL_SHIPPING_LABEL',
    EXTERNAL_CLAIM_OPENED = 'EXTERNAL_CLAIM_OPENED',
    GENERAL_TIME_OUT = 'GENERAL_TIME_OUT',
    NOTIFIED_DELIVERED = 'NOTIFIED_DELIVERED',
    NOTIFIED_SHIPPED = 'NOTIFIED_SHIPPED',
    NOTIFY_REPLACEMENT_DELIVERED = 'NOTIFY_REPLACEMENT_DELIVERED',
    NOTIFY_REPLACEMENT_SHIPPED = 'NOTIFY_REPLACEMENT_SHIPPED',
    NOTIFY_UPDATE_REFUND_STATUS = 'NOTIFY_UPDATE_REFUND_STATUS',
    OTHER = 'OTHER',
    REMINDER_BUYER_TO_RESPOND_RE_OFFER = 'REMINDER_BUYER_TO_RESPOND_RE_OFFER',
    REMINDER_BUYER_TO_SHIP = 'REMINDER_BUYER_TO_SHIP',
    REMINDER_FOR_REFUND = 'REMINDER_FOR_REFUND',
    REMINDER_FOR_REFUND_NO_SHIPPING = 'REMINDER_FOR_REFUND_NO_SHIPPING',
    REMINDER_FOR_RMA = 'REMINDER_FOR_RMA',
    REMINDER_FOR_SHIPPING = 'REMINDER_FOR_SHIPPING',
    REMINDER_SELLER_TO_RESPOND = 'REMINDER_SELLER_TO_RESPOND',
    REMINDER_SELLER_TO_SHIP = 'REMINDER_SELLER_TO_SHIP',
    SELLER_APPROVE_REQUEST = 'SELLER_APPROVE_REQUEST',
    SELLER_DECLINE_REQUEST = 'SELLER_DECLINE_REQUEST',
    SELLER_ESCALATE = 'SELLER_ESCALATE',
    SELLER_ISSUE_REFUND = 'SELLER_ISSUE_REFUND',
    SELLER_ISSUE_STORE_CREDIT_REFUND = 'SELLER_ISSUE_STORE_CREDIT_REFUND',
    SELLER_MARK_AS_RECEIVED = 'SELLER_MARK_AS_RECEIVED',
    SELLER_MARK_REFUND_SENT = 'SELLER_MARK_REFUND_SENT',
    SELLER_MARK_REPLACEMENT_SHIPPED = 'SELLER_MARK_REPLACEMENT_SHIPPED',
    SELLER_OFFER_PARTIAL_REFUND = 'SELLER_OFFER_PARTIAL_REFUND',
    SELLER_OFFER_REPLACEMENT = 'SELLER_OFFER_REPLACEMENT',
    SELLER_OFFER_RETURNS = 'SELLER_OFFER_RETURNS',
    SELLER_PRINT_SHIPPING_LABEL = 'SELLER_PRINT_SHIPPING_LABEL',
    SELLER_PROVIDE_LABEL = 'SELLER_PROVIDE_LABEL',
    SELLER_PROVIDE_RMA = 'SELLER_PROVIDE_RMA',
    SELLER_PROVIDE_TRACKING_INFO = 'SELLER_PROVIDE_TRACKING_INFO',
    SELLER_RETRY_REFUND = 'SELLER_RETRY_REFUND',
    SELLER_SEND_MESSAGE = 'SELLER_SEND_MESSAGE',
    SELLER_UPDATE_TRACKING = 'SELLER_UPDATE_TRACKING',
    SELLER_VOID_LABEL = 'SELLER_VOID_LABEL',
    SUBMIT_FILE = 'SUBMIT_FILE',
    SYSTEM_BUYER_PARTIAL_REFUND_AS_PAYOUT = 'SYSTEM_BUYER_PARTIAL_REFUND_AS_PAYOUT',
    SYSTEM_BUYER_REFUND_AS_PAYOUT = 'SYSTEM_BUYER_REFUND_AS_PAYOUT',
    SYSTEM_CLOSE_RETURN = 'SYSTEM_CLOSE_RETURN',
    SYSTEM_CREATE_RETURN = 'SYSTEM_CREATE_RETURN',
    SYSTEM_IMMEDIATE_REFUND = 'SYSTEM_IMMEDIATE_REFUND',
    TIME_OUT_AFTER_DECLINE = 'TIME_OUT_AFTER_DECLINE',
    TIME_OUT_AFTER_REFUNDED = 'TIME_OUT_AFTER_REFUNDED',
    TIME_OUT_AFTER_REFUNDED_AS_PAYOUT = 'TIME_OUT_AFTER_REFUNDED_AS_PAYOUT',
    TIME_OUT_AFTER_REPLACED = 'TIME_OUT_AFTER_REPLACED',
    TIME_OUT_FOR_AUTHORIZE = 'TIME_OUT_FOR_AUTHORIZE',
    TIME_OUT_FOR_AUTO_REFUND = 'TIME_OUT_FOR_AUTO_REFUND',
    TIME_OUT_FOR_BUYER_RECOUP = 'TIME_OUT_FOR_BUYER_RECOUP',
    TIME_OUT_FOR_DELIVERY = 'TIME_OUT_FOR_DELIVERY',
    TIME_OUT_FOR_ESCALATION = 'TIME_OUT_FOR_ESCALATION',
    TIME_OUT_FOR_ESCALATION_AFTER_SMIR = 'TIME_OUT_FOR_ESCALATION_AFTER_SMIR',
    TIME_OUT_FOR_ITEM_REPLACED = 'TIME_OUT_FOR_ITEM_REPLACED',
    TIME_OUT_FOR_MARK_REFUND_RECEIVED = 'TIME_OUT_FOR_MARK_REFUND_RECEIVED',
    TIME_OUT_FOR_MARK_REFUND_SENT = 'TIME_OUT_FOR_MARK_REFUND_SENT',
    TIME_OUT_FOR_MASS_PAYOUT = 'TIME_OUT_FOR_MASS_PAYOUT',
    TIME_OUT_FOR_PAYOUT = 'TIME_OUT_FOR_PAYOUT',
    TIME_OUT_FOR_PROVIDE_LABEL = 'TIME_OUT_FOR_PROVIDE_LABEL',
    TIME_OUT_FOR_REFUND = 'TIME_OUT_FOR_REFUND',
    TIME_OUT_FOR_REPLACEMENT_DELIVERED_ITEM_NOT_RETURNED = 'TIME_OUT_FOR_REPLACEMENT_DELIVERED_ITEM_NOT_RETURNED',
    TIME_OUT_FOR_REPLACEMENT_SHIPPED = 'TIME_OUT_FOR_REPLACEMENT_SHIPPED',
    TIME_OUT_FOR_RETURN_SHIPPING = 'TIME_OUT_FOR_RETURN_SHIPPING',
    TIME_OUT_FOR_RMA = 'TIME_OUT_FOR_RMA',
    TIME_OUT_FOR_SELLER_INVOICE = 'TIME_OUT_FOR_SELLER_INVOICE',
    TIME_OUT_FOR_SELLER_PAYOUT = 'TIME_OUT_FOR_SELLER_PAYOUT',
    TIME_OUT_FOR_SHIPMENT_TRACKING = 'TIME_OUT_FOR_SHIPMENT_TRACKING',
    TIME_OUT_FOR_SHIPPING = 'TIME_OUT_FOR_SHIPPING',
    TIME_OUT_FOR_SHIPPING_SYSTEM_CLOSE = 'TIME_OUT_FOR_SHIPPING_SYSTEM_CLOSE',
}