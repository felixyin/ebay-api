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
var __1 = __importDefault(require("../../"));
/**
 * The Feed API provides the ability to download TSV_GZIP feed files containing eBay items and an hourly snapshot file
 * of the items that have changed within an hour for a specific category, date and marketplace.
 */
var Feed = /** @class */ (function (_super) {
    __extends(Feed, _super);
    function Feed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Feed.prototype, "basePath", {
        get: function () {
            return '/buy/feed/v1_beta';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * This method lets you download a TSV_GZIP (tab separated value gzip) Item feed file.
     *
     * @param {FeedParams} params
     * @param marketplaceId The ID of the eBay marketplace where the item is hosted.
     * @param range his header specifies the range in bytes of the chunks of the gzip file being returned.
     *          Format: bytes=startpos-endpos For example, the following retrieves the first 10 MBs of the feed file.
     */
    Feed.prototype.getItemFeed = function (params, marketplaceId, range) {
        return this.get("/item", {
            params: params,
            headers: {
                'X-EBAY-C-MARKETPLACE-ID': marketplaceId,
                'Range': range
            }
        });
    };
    /**
     * This method lets you download a TSV_GZIP (tab separated value gzip) Item Group feed file.
     * @param {FeedParams} params
     * @param marketplaceId The ID of the eBay marketplace where the item is hosted.
     * @param range his header specifies the range in bytes of the chunks of the gzip file being returned.
     *          Format: bytes=startpos-endpos For example, the following retrieves the first 10 MBs of the feed file.
     */
    Feed.prototype.getItemGroupFeed = function (params, marketplaceId, range) {
        return this.get("/item_group", {
            params: params,
            headers: {
                'X-EBAY-C-MARKETPLACE-ID': marketplaceId,
                'Range': range
            }
        });
    };
    /**
     * The Hourly Snapshot feed file is generated each hour every day for all categories.
     *
     * @param {FeedParams} params
     * @param {String} snapshotDate
     * @param marketplaceId The ID of the eBay marketplace where the item is hosted.
     * @param range his header specifies the range in bytes of the chunks of the gzip file being returned.
     *          Format: bytes=startpos-endpos For example, the following retrieves the first 10 MBs of the feed file.
     */
    Feed.prototype.getItemSnapshotFeed = function (params, snapshotDate, marketplaceId, range) {
        return this.get("/item_snapshot", {
            params: __assign(__assign({}, params), { snapshot_date: snapshotDate }),
            headers: {
                'X-EBAY-C-MARKETPLACE-ID': marketplaceId,
                'Range': range
            }
        });
    };
    /**
     * The Hourly Snapshot feed file is generated each hour every day for all categories.
     *
     * @param {FeedParams} params
     * @param {String} snapshotDate
     * @param marketplaceId The ID of the eBay marketplace where the item is hosted.
     * @param range his header specifies the range in bytes of the chunks of the gzip file being returned.
     *          Format: bytes=startpos-endpos For example, the following retrieves the first 10 MBs of the feed file.
     */
    Feed.prototype.getProductFeed = function (params, snapshotDate, marketplaceId, range) {
        return this.get("/product", {
            params: __assign(__assign({}, params), { snapshot_date: snapshotDate }),
            headers: {
                'X-EBAY-C-MARKETPLACE-ID': marketplaceId,
                'Range': range
            }
        });
    };
    return Feed;
}(__1.default));
exports.default = Feed;
//# sourceMappingURL=index.js.map