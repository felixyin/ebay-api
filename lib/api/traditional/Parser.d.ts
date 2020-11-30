/**
 * XML response parser.
 */
export default class Parser {
    /**
     * converts an XML response to JSON
     *
     * @param      {xml}     xml     The xml
     * @param      {object}     parseOptions     The parse options
     * @return     {JSON}         resolves to a JSON representation of the HTML
     */
    static toJSON(xml: string, parseOptions: object): any;
    /**
     * Casts text representations to Javascript representations
     *
     * @param      {String}       value   The value
     * @param      {String}       key   The key
     * @return     {Date|Number}          The cast value
     */
    static cast(value: any, key: any): any;
    /**
     * recursively flattens `value` keys in the XML -> JSON conversion
     * we can do this because we don't need to worry about XML attributes from eBay
     *
     * @param      {Object}  o       the object output from the XML parser
     * @param      {Object}  key     the key
     * @return     {Object}          the flattened output
     */
    static flatten(o: any, key?: any): any;
    /**
     * flattens the eBay pagination object to be easier to deal with
     *
     * @param      {Object}  obj    the JSON representation of a Response
     * @return     {Object}         the friendly pagination extended Response
     */
    static parsePagination(obj: any): {
        pagination?: undefined;
    } | {
        pagination: {
            pages: number;
            length: number;
        };
    };
    /**
     * cleans the Ebay response
     *
     * @param      {Object}  res     The response object
     * @return     {Object}  res     The cleaned response
     */
    static clean(res: any): any;
    /**
     * recursively folds a response from eBay into something reasonable
     *
     * @param      {Object}  res     The resource
     * @return     {Object}          The folded response
     */
    static fold(res: any): any;
    /**
     * Gets the List element from an eBay response
     *
     * @param      {<type>}  list    The list
     * @return     {Object}          The list.
     */
    static getList(list: any): {
        results: never[];
    };
    /**
     * Gets the matching key.
     *
     * @param      {<type>}  obj     The object
     * @param      {<type>}  substr  The substr to match
     * @return     {<type>}          The matching key.
     */
    static getMatchingKey(obj: any, substr: any): any;
}
