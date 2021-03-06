import Api from '../../';
import { AlsoBoughtByProductParams, AlsoViewedByProductParams, MerchandisedProductsParams } from '../../../../types/restfulTypes';
/**
 * The Marketing API retrieves eBay products based on a metric, such as Best Selling, as well as products that were
 * also bought and also viewed.
 */
export default class Marketing extends Api {
    get basePath(): string;
    /**
     * This call returns products that were also bought when shoppers bought the product specified in the request.
     * @param params
     */
    getAlsoBoughtByProduct(params: AlsoBoughtByProductParams): Promise<any>;
    /**
     * This call returns products that were also viewed when shoppers viewed the product specified in the request.
     *
     * @param params
     */
    getAlsoViewedByProduct(params: AlsoViewedByProductParams): Promise<any>;
    /**
     * This call returns an array of products based on the category and metric specified.
     *
     * @param params
     */
    getMerchandisedProducts(params: MerchandisedProductsParams): Promise<any>;
}
