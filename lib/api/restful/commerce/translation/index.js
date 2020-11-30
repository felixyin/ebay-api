"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require("../../"));
/**
 * This API allows 3rd party developers to translate item title, description, search query.
 */
var Translation = /** @class */ (function (_super) {
    __extends(Translation, _super);
    function Translation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Translation.prototype, "basePath", {
        get: function () {
            return '/commerce/translation/v1';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Translates input text inot a given language.
     *
     * @param body TranslateRequest
     */
    Translation.prototype.translate = function (body) {
        return this.post("/translate", body);
    };
    return Translation;
}(__1.default));
exports.default = Translation;
//# sourceMappingURL=index.js.map