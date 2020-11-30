// tslint:disable:no-console
import EBay from '../../../ebay';

const ebay = EBay.fromEnv();

ebay.buy.browse.getShoppingCart().then(cart => {
    console.log(cart);
}).catch(e => {
    console.log(e);
});
