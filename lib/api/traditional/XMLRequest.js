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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = void 0;
var debug_1 = __importDefault(require("debug"));
var fast_xml_parser_1 = require("fast-xml-parser");
var errors_1 = require("../../errors");
var request_1 = require("../../utils/request");
var Parser_1 = __importDefault(require("./Parser"));
var HEADING = '<?xml version="1.0" encoding="utf-8"?>';
var log = debug_1.default('ebay:xml:request');
var defaultXmlOptions = {
    attributeNamePrefix: '@_',
    textNodeName: '#text',
    ignoreAttributes: false,
    cdataTagName: '__cdata',
    cdataPositionChar: '\\c',
    format: false,
    indentBy: '  ',
    supressEmptyNode: false
};
var parser = new fast_xml_parser_1.j2xParser(defaultXmlOptions);
var defaultParseOptions = {
    textNodeName: 'value'
};
exports.defaultOptions = {
    raw: false,
    cleanup: true,
    parseOptions: defaultParseOptions,
    useIaf: true
};
/**
 * XML request for making eBay API call.
 */
var XMLRequest = /** @class */ (function () {
    /**
     * Creates the new Request object
     *
     * @private
     * @param      {string}  callname the callname
     * @param      {Object}  fields the fields
     * @param      {Object} req the request
     * @param      {Config}  config
     */
    function XMLRequest(callname, fields, config, req) {
        if (req === void 0) { req = request_1.createRequest(); }
        this.defaultHeaders = {
            'Content-Type': 'text/xml'
        };
        if (!callname) {
            throw new errors_1.NoCallError();
        }
        this.callname = callname;
        this.fields = fields || {};
        this.config = config;
        this.req = req;
    }
    Object.defineProperty(XMLRequest.prototype, "responseWrapper", {
        /**
         * returns the expected name of XML node of a Request
         *
         * @private
         * @return     {String}  { description_of_the_return_value }
         */
        get: function () {
            return this.callname + "Response";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XMLRequest.prototype, "credentials", {
        /**
         * returns the XML structure for the SOAP auth
         *
         * @private
         * @return     {Object}  the SOAP
         */
        get: function () {
            return this.config.eBayAuthToken ? {
                RequesterCredentials: {
                    eBayAuthToken: this.config.eBayAuthToken
                }
            } : {};
        },
        enumerable: false,
        configurable: true
    });
    /**
     * returns the XML document for the request
     *
     * @private
     * @param      {Fields}  fields  the fields
     * @return     {String}           The XML string of the Request
     */
    XMLRequest.prototype.toXML = function (fields) {
        var _a;
        return HEADING + parser.parse((_a = {},
            _a[this.callname + 'Request'] = __assign(__assign({ '@_xmlns': this.config.xmlns }, this.credentials), fields),
            _a));
    };
    /**
     * runs the HTTP Post to eBay
     *
     * @private
     * @param      {Options}   options  The options
     * @return     {Promise}           resolves to the response
     *
     */
    XMLRequest.prototype.fetch = function (options) {
        if (options === void 0) { options = exports.defaultOptions; }
        return __awaiter(this, void 0, void 0, function () {
            var requiredOptions, xml, headers, data, json, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requiredOptions = __assign(__assign({}, exports.defaultOptions), options);
                        xml = this.toXML(this.fields);
                        log('XML', xml);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        headers = __assign(__assign({}, this.defaultHeaders), this.config.headers);
                        log('Make request: ' + this.config.endpoint, headers);
                        return [4 /*yield*/, this.req.post(this.config.endpoint, xml, {
                                headers: headers
                            })];
                    case 2:
                        data = _a.sent();
                        log('Response', data);
                        // resolve to raw XML
                        if (options.raw) {
                            return [2 /*return*/, data];
                        }
                        json = Parser_1.default.toJSON(data, requiredOptions.parseOptions);
                        // Unwrap
                        if (json[this.responseWrapper]) {
                            json = Parser_1.default.flatten(json[this.responseWrapper]);
                        }
                        this.handleEBayJsonError(json);
                        // cleans the Ebay response
                        if (options.cleanup) {
                            return [2 /*return*/, Parser_1.default.clean(json)];
                        }
                        return [2 /*return*/, json];
                    case 3:
                        error_1 = _a.sent();
                        this.handleEBayResponseError(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    XMLRequest.prototype.handleEBayJsonError = function (json) {
        if (json.Ack === 'Error' || json.Ack === 'Failure' || json.Errors) {
            switch (json.Errors.ErrorCode) {
                case errors_1.EBayIAFTokenExpired.code:
                    throw new errors_1.EBayIAFTokenExpired(json);
                case errors_1.EBayTokenRequired.code:
                    throw new errors_1.EBayTokenRequired(json);
            }
            throw new errors_1.EbayApiError(json.Errors);
        }
    };
    XMLRequest.prototype.handleEBayResponseError = function (error) {
        log('eBayResponseError', error);
        if (error.response && error.response.data) {
            var json = Parser_1.default.toJSON(error.response.data, defaultParseOptions);
            this.handleEBayJsonError(json);
        }
        else {
            throw error;
        }
    };
    return XMLRequest;
}());
exports.default = XMLRequest;
//# sourceMappingURL=XMLRequest.js.map