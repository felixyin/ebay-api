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
 * Retrieves the authenticated user's account profile information.
 */
var Identity = /** @class */ (function (_super) {
    __extends(Identity, _super);
    function Identity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Identity.prototype, "basePath", {
        get: function () {
            return '/commerce/identity/v1';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * This method retrieves the account profile information for an authenticated user, which requires a User access
     * token. What is returned is controlled by the scopes.
     */
    Identity.prototype.getUser = function () {
        return this.get("/user/");
    };
    return Identity;
}(__1.default));
exports.default = Identity;
//# sourceMappingURL=index.js.map