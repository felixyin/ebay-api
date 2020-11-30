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
 * Use the Taxonomy API to discover the most appropriate eBay categories under which sellers can offer inventory items
 * for sale, and the most likely categories under which buyers can browse or search for items to purchase.
 */
var Taxonomy = /** @class */ (function (_super) {
    __extends(Taxonomy, _super);
    function Taxonomy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Taxonomy.prototype, "basePath", {
        get: function () {
            return '/commerce/taxonomy/v1_beta';
        },
        enumerable: false,
        configurable: true
    });
    /**
     * A given eBay marketplace might use multiple category trees, but one of those trees is considered to be the
     * default for that marketplace.
     *
     * @param marketplaceId The ID of the eBay marketplace for which the category tree ID is being requested.
     */
    Taxonomy.prototype.getDefaultCategoryTreeId = function (marketplaceId) {
        return this.get("/get_default_category_tree_id", {
            params: {
                marketplace_id: marketplaceId
            }
        });
    };
    /**
     * This call retrieves the complete category tree that is identified by the category_tree_id parameter.
     *
     * @param categoryTreeId
     */
    Taxonomy.prototype.getCategoryTree = function (categoryTreeId) {
        var cId = encodeURIComponent(categoryTreeId);
        return this.get("/category_tree/" + cId);
    };
    /**
     * This call retrieves the details of all nodes of the category tree hierarchy (the subtree) below a specified
     * category of a category tree.
     *
     * @param categoryTreeId The unique identifier of the eBay category tree from which a category subtree is being
     *     requested.
     * @param categoryId The unique identifier of the category at the top of the subtree being requested.
     */
    Taxonomy.prototype.getCategorySubtree = function (categoryTreeId, categoryId) {
        var cId = encodeURIComponent(categoryTreeId);
        return this.get("/category_tree/" + cId + "/get_category_subtree", {
            params: {
                category_id: categoryId
            }
        });
    };
    /**
     * This call returns an array of category tree leaf nodes in the specified category tree that are considered by eBay
     *  to most closely correspond to the query string q.
     *
     * @param categoryTreeId The unique identifier of the eBay category tree for which suggested nodes are being
     *     requested.
     * @param q A quoted string that describes or characterizes the item being offered for sale.
     */
    Taxonomy.prototype.getCategorySuggestions = function (categoryTreeId, q) {
        return this.get("/category_tree/" + categoryTreeId + "/get_category_suggestions", {
            params: {
                q: q
            }
        });
    };
    /**
     * This call returns a list of aspects that are appropriate or necessary for accurately describing items in the
     * specified leaf category.
     *
     * @param categoryTreeId The unique identifier of the eBay category tree from which the specified category's
     *     aspects are being requested.
     * @param categoryId The unique identifier of the leaf category for which aspects are being requested.
     */
    Taxonomy.prototype.getItemAspectsForCategory = function (categoryTreeId, categoryId) {
        var cId = encodeURIComponent(categoryTreeId);
        return this.get("/category_tree/" + cId + "/get_item_aspects_for_category", {
            params: {
                category_id: categoryId
            }
        });
    };
    /**
     * This call retrieves the compatible vehicle aspects that are used to define a motor vehicle that is compatible
     * with a motor vehicle part or accessory.
     *
     * @param categoryTreeId This is the unique identifier of category tree. The following is the list of
     * category_tree_id values and the eBay marketplaces that they represent.
     *
     * @param categoryId The unique identifier of an eBay category.
     */
    Taxonomy.prototype.getCompatibilityProperties = function (categoryTreeId, categoryId) {
        var cId = encodeURIComponent(categoryTreeId);
        return this.get("/category_tree/" + cId + "/get_compatibility_properties", {
            params: {
                category_id: categoryId
            }
        });
    };
    /**
     * This call retrieves applicable compatible vehicle property values based on the specified eBay marketplace,
     * specified eBay category, and filters used in the request.
     *
     * @param categoryTreeId This is the unique identifier of the category tree.
     * @param categoryId The unique identifier of an eBay category.
     * @param compatibilityProperty One compatible vehicle property applicable to the specified eBay marketplace and
     *     eBay category is specified in this required filter.
     */
    Taxonomy.prototype.getCompatibilityPropertyValues = function (categoryTreeId, categoryId, compatibilityProperty) {
        var cId = encodeURIComponent(categoryTreeId);
        return this.get("/category_tree/" + cId + "/get_compatibility_property_values", {
            params: {
                category_id: categoryId,
                compatibility_property: compatibilityProperty
            }
        });
    };
    return Taxonomy;
}(__1.default));
exports.default = Taxonomy;
//# sourceMappingURL=index.js.map