// tslint:disable:no-console
import EBay from '../../../ebay';

const ebay = EBay.fromEnv();

(async () => {
    try {
        const summary = await ebay.postOrder.return.getReturn('5132021997');
        console.log(summary);
    } catch (e) {
        console.error(e);
    }
})();
