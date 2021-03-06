"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var types_1 = require("./types");
Object.defineProperty(exports, "EventType", { enumerable: true, get: function () { return types_1.EventType; } });
// https://developer.ebay.com/devzone/client-alerts/docs/CallRef/index.html
var calls;
(function (calls) {
    calls[calls["GetPublicAlerts"] = 0] = "GetPublicAlerts";
    calls[calls["GetUserAlerts"] = 1] = "GetUserAlerts";
    calls[calls["Login"] = 2] = "Login";
    calls[calls["Logout"] = 3] = "Logout";
})(calls || (calls = {}));
exports.default = calls;
//# sourceMappingURL=index.js.map