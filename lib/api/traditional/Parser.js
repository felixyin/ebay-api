"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fast_xml_parser_1 = __importDefault(require("fast-xml-parser"));
var nodes_1 = require("./nodes");
var EXTRANEOUS = [
    '@',
    'Ack',
    'ack',
    'Version',
    'Build',
    'xmlns'
];
/**
 * XML response parser.
 */
var Parser = /** @class */ (function () {
    function Parser() {
    }
    /**
     * converts an XML response to JSON
     *
     * @param      {xml}     xml     The xml
     * @param      {object}     parseOptions     The parse options
     * @return     {JSON}         resolves to a JSON representation of the HTML
     */
    Parser.toJSON = function (xml, parseOptions) {
        return fast_xml_parser_1.default.parse(xml, parseOptions);
    };
    /**
     * Casts text representations to Javascript representations
     *
     * @param      {String}       value   The value
     * @param      {String}       key   The key
     * @return     {Date|Number}          The cast value
     */
    Parser.cast = function (value, key) {
        if (value === 'true') {
            return true;
        }
        if (value === 'false') {
            return false;
        }
        if (typeof key === 'string') {
            if (nodes_1.dateTimeNodes[key.toLowerCase()]) {
                return new Date(value);
            }
            if (!isNaN(value) && nodes_1.numericNodes[key.toLowerCase()]) {
                return Number(value);
            }
        }
        return value;
    };
    /**
     * recursively flattens `value` keys in the XML -> JSON conversion
     * we can do this because we don't need to worry about XML attributes from eBay
     *
     * @param      {Object}  o       the object output from the XML parser
     * @param      {Object}  key     the key
     * @return     {Object}          the flattened output
     */
    Parser.flatten = function (o, key) {
        if (o && o.value) {
            return Parser.cast(o.value, key);
        }
        if (Array.isArray(o)) {
            return o.map(Parser.flatten);
        }
        if (typeof o !== 'object') {
            return Parser.cast(o, key);
        }
        return Object.keys(o).reduce(function (deflated, fKey) {
            deflated[fKey] = Parser.flatten(o[fKey], fKey);
            return deflated;
        }, {});
    };
    /**
     * flattens the eBay pagination object to be easier to deal with
     *
     * @param      {Object}  obj    the JSON representation of a Response
     * @return     {Object}         the friendly pagination extended Response
     */
    Parser.parsePagination = function (obj) {
        if (!obj.PaginationResult) {
            return {};
        }
        var p = obj.PaginationResult;
        delete obj.PaginationResult;
        return {
            pagination: {
                pages: Number(p.TotalNumberOfPages) || 0,
                length: Number(p.TotalNumberOfEntries) || 0
            }
        };
    };
    /**
     * cleans the Ebay response
     *
     * @param      {Object}  res     The response object
     * @return     {Object}  res     The cleaned response
     */
    Parser.clean = function (res) {
        // Drop extraneous keys
        res = Object.keys(res)
            .filter(function (key) { return !~EXTRANEOUS.indexOf(key); })
            .reduce(function (acc, key) {
            acc[key] = res[key];
            return acc;
        }, {});
        return Parser.fold(res);
    };
    /**
     * recursively folds a response from eBay into something reasonable
     *
     * @param      {Object}  res     The resource
     * @return     {Object}          The folded response
     */
    Parser.fold = function (res) {
        return Object.keys(res).reduce(function (cleaned, key) {
            var value = res[key];
            if (key.match(/List/)) {
                return __assign(__assign(__assign({}, cleaned), Parser.parsePagination(value)), Parser.getList(value));
            }
            if (key.match(/Array/)) {
                return __assign(__assign({}, cleaned), Parser.getList(value));
            }
            cleaned[key] = value;
            return cleaned;
        }, {});
    };
    /**
     * Gets the List element from an eBay response
     *
     * @param      {<type>}  list    The list
     * @return     {Object}          The list.
     */
    Parser.getList = function (list) {
        var parent = Parser.getMatchingKey(list, 'Array');
        var wrapper = Object.keys(parent)[0];
        var entries = parent[wrapper] || [];
        return {
            results: [].concat(entries)
        };
    };
    /**
     * Gets the matching key.
     *
     * @param      {<type>}  obj     The object
     * @param      {<type>}  substr  The substr to match
     * @return     {<type>}          The matching key.
     */
    Parser.getMatchingKey = function (obj, substr) {
        var keys = Object.keys(obj);
        while (keys.length) {
            var key = keys.pop();
            if (key && ~key.indexOf(substr)) {
                return obj[key];
            }
        }
        return obj;
    };
    return Parser;
}());
exports.default = Parser;
//# sourceMappingURL=Parser.js.map