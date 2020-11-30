// tslint:disable:no-console
// @ts-ignore
import readline from 'readline';
import EBay from '../../ebay';

const ebay = EBay.fromEnv();
ebay.auth.oAuth2.setScope([
    'https://api.ebay.com/oauth/api_scope',
    'https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly',
    'https://api.ebay.com/oauth/api_scope/sell.fulfillment'
]);

const url = ebay.auth.oAuth2.generateAuthUrl();

console.log('Authorize this app by visiting this url:', url);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter the code from that page here (from the url query ?code=) : ', async (code: string) => {
    rl.close();
    code = decodeURIComponent(code);
    console.log('Enter code', code);
    const token = await ebay.auth.oAuth2.getToken(code);
    console.log('Token: ', token);
    ebay.auth.oAuth2.setCredentials(token);

    ebay.sell.fulfillment.getOrder('12-12345-12345').then(order => {
        console.log('order', JSON.stringify(order, null, 2));
    }).catch(e => {
        console.log('error', {error: e.message});
    });
});
