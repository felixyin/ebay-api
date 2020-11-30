// const eBayApi=require('../lib/index.js');
// or:

const eBayApi = require('@hendt/ebay-api')

// 生产帐号配置
const eBay = new eBayApi({
    appId: 'felixyin--PRD-c7c01d8ca-7bcc79b0',
    certId: 'PRD-7c01d8caa0a1-06eb-43f6-930d-630a',
    sandbox: true,
    // optional parameters, should be omitted if not used
    siteId: eBayApi.SiteId.EBAY_US, // required for traditional APIs, see https://developer.ebay.com/DevZone/merchandising/docs/Concepts/SiteIDToGlobalID.html
    devId: '15689781-5c35-4f1e-b0d5-e4fb1ad2ee44', // required for traditional trading API
    ruName: '-- eBay Redirect URL name --', // required for authorization code grant
    authToken: 'v^1.1#i^1#p^1#r^0#I^3#f^0#t^H4sIAAAAAAAAAOVYXWwUVRTu9s+UXw2IUkxYhxINdWbvnf0f2Y1bltJV6K7dUqAJaWbu3OlOOzsznbnb7hKltQq+EAISFTFqjYYQ6oMmGAkmEvn3h/gDD8b4oPFBRDFGUXko6Mx2KduKQNiiTdyXzT333HO/851z7j1zwUB1zZLNTZv/mOm4rXxoAAyUOxxwOqiprqqfVVFeW1UGihQcQwN1A5WDFWeWmnxa0bkWbOqaamJnNq2oJpcXhqiMoXIab8omp/JpbHIEccnIqpUcywBONzSiIU2hnLFoiJKgB7IQB7DHi7DAspZUvWyzVQtRCAQDHj4QwD7khZLfY82bZgbHVJPwKglRLGABDSHN+ltBgAOAgwHGzcJ2ytmGDVPWVEuFAVQ4D5fLrzWKsF4bKm+a2CCWESocizQm45FYdHlz61JXka1wgYck4UnGHD9aponY2cYrGXztbcy8NpfMIIRNk3KFR3cYb5SLXAZzE/DzVCMvkPwACTzrhh6vIEwKlY2akebJtXHYElmkpbwqh1Uik9z1GLXYELowIoVRs2UiFnXaf49meEWWZGyEqOUNkXWRRIIKS1iRszlZpelES5RGfgSgGEA87RcQ8gcFUNhg1EqB3gk7LNNUUbbJMp3NGmnAFlo8nhM/5y3ixFKKq3EjIhEbSZEeBJe5g/52O5ij0cuQlGrHE6ctApz54fWZH1tNiCELGYLHLEycyFMTonhdl0Vq4mQ+BwtpkzVDVIoQnXO5+vr6mD43oxmdLhYA6Fq7amUSpXCap8Z05ZBd69ddQMt5VxC2VpoyR3K6hSVr5agFQO2kwh42YC0o8D4eVnii9G+CIp9d4ythsioDs6IEkQCh4BeBH0iTURnhQnK6bBxY4HN0mje6MdEVHmEaWXmWSWNDFjm3V2LdAQnToi8o0Z6gJNGCV/TRUMIYYCwIKBj4PxTIjaZ4EiMDk0nN8ZLzW+mRUu3GuuyKVZ2CLyPixq6Vj6TiKwwxG/U0yXxjS8LdEmttk5u9naEbrYKrO480HSc0RUa5W8CAXeslsOA2xARvkFwSK4olKMlR03Z0agXZXm9aBnhdZuyCZpCWdmm8dZLboo484pJ8juh6LJ3OEF5QcGxyT/F/+QS/qnuy1dtMKZ+s+I0GUhZHmxImH03G7EWMgU0tY1j9GBO37+pWrRur1glIDE1RsNEGSw70fx1fu9Yn8HGDl8TN+Tz5nclUyGmkyFbqdEw1z25pJGV+it2+0Ad8Hp8HwEBJfi3Lx7I1N9XunSbNJFgspXmuvO8f2mfX+I/4cFn+Bwcdb4NBx1vlDgdwgcVwEbi3umJ1ZcWMWlMmmJF5iTHlTtX6NjUw041zOi8b5dUOfTV/dnHRs8HQenD32MNBTQWcXvSKAO65MlMFZ981kwUQsn4QsJgJtINFV2Yr4bzKuW/2OPeffkHNPvfn2votx9f/OLT752/BzDElh6OqrHLQUdaxIHGBXbLG+/sA3r78Yqi+t24XOZV6qWPDnAfcHxgHB+ta3uO+bKffgV3na0J7D9XP3RBxcd+fPT20KHhu96lItG2H0vf5yWO1H37HDD+cnENGnqj95Q3/ReXlk9M+mr9Jv/CTuU0EF569P4u+vv0ovXPPyOnuYOjAggfL71DPPYWeaf5muNebaHh+l/Jalfj+yN6tW+rnnXr9xeOvnl3Y9evh/mRk9rSFa1IP7XJUvPtp2eHUZzDa72zL7N/IvhLaFLn09HDgEr1z37nFjz1ZLwwfOXTnwZ5jX/1QN+N8j+PExi8aDhzZtn3P0SX6SFPXif4ds3p/6/d+fKbv0L5P1p7ZOj/OP85elOKj4fsLpxJDvNARAAA=', // can be set to use traditional API without code grant
    scope: ['https://api.ebay.com/oauth/api_scope']
});

// 开发用测试帐号配置
// const eBay = new eBayApi({
//     appId: 'felixyin--SBX-37b6bd845-24e1f296',
//     certId: 'SBX-7d2479af1c7a-b9e4-4f25-a9bb-3772',
//     sandbox: true,
//     // optional parameters, should be omitted if not used
//     siteId: eBayApi.SiteId.EBAY_US, // required for traditional APIs, see https://developer.ebay.com/DevZone/merchandising/docs/Concepts/SiteIDToGlobalID.html
//     devId: '15689781-5c35-4f1e-b0d5-e4fb1ad2ee44', // required for traditional trading API
//     ruName: '-- eBay Redirect URL name --', // required for authorization code grant
//     authToken: 'AgAAAA**AQAAAA**aAAAAA**TcXAXw**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6wFk4aiDJKLpA6dj6x9nY+seQ**iG8FAA**AAMAAA**D/G3xP+05ou8wFGBs7Hj4G0yB5+6PQa/JVpo/JKTtDiXa4CB8h3UwBNRxkKhauy4roIHHk1OdY4tmaHcJuZOjBpxcNV/M3sXcauSiBZNwUihflsLfbCkDZkQEhs3fQKsVDvjFrX1ohVYh4+Ang7nB7Uf2YS0Ook+CRp1/D9YoFPKd3vQcUnOGWpy1K6yzaJxTxly8gXzOymj/CcKEneEmF4t/ci66KSp1gGwhpmV/ceLse7zwkwfMk+0pIeLIwpv8FYLzjTihyLBbm6v5IdQq6mfTiWN0L9o69OlTX1yR+Dh8hUx6liDeIvWwyoEem91e+cng/roQjq5DtCtxaNNdYm9I82Tdz7FovDkeELmB4JWFjN2jYYrkGEUiBR6vyI12nR+W0fKLjh3iutcxEJoM8OOQDzJKPJkwTT6z1bulv8oE3XuNo1knAKCcwaELHNF45YszBXUoSzJUhdNP1HCrM5mZo1T79XtZFiC0KZWQ5uMu9QMALCmQkJkERJfwOeVEaXseffMBL0W5SEaoA7Y1WBX32OFId/bY10v0EeDNb2aPnPJ46sfcmJ40pyQ9l7I5JMQcyeJGXJ4U+KsoMXdgHjagXHYouvcd7dKrevLLwAMHf5h1kBweiZ5CETrI0IkXrkPb0xgBbCzYChM1y9WyPHOfM3k/Zi+3FrZELjXKU38UPuxmaSwNC0R9obKxaVZvS62s258RNjb8NI0dg1ag9r7QM41hrbn1EkwbUo6bHVgy3oXLvBR/uBSXNMIQ54w'
//     // scope: ['https://api.ebay.com/oauth/api_scope']
// });


async function test()  {
    // eBay.auth.oAuth2.setScope([
    //     'https://api.ebay.com/oauth/api_scope',
    //     'https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly',
    //     'https://api.ebay.com/oauth/api_scope/sell.fulfillment'
    // ]);

//     const url = eBay.auth.oAuth2.generateAuthUrl();
// // 2. Open Url and Grant Access
//     console.log('Open URL', url);
//
//     const token = await eBay.auth.oAuth2.getToken(code);
//     eBay.auth.oAuth2.setCredentials(token);
//
//     console.log('-------------')
//     // let token = await eBay.auth.oAuth2.refreshToken();
//     console.log(token)


    eBay.finding.getVersion().then(result => {
        console.log(result);
    }).catch(e => {
        console.error('error:')
        console.error(e);
    })
}

test();

// eBay.finding.findItemsAdvanced({
//     itemFilter: [{
//         name: 'Seller',
//         value: 'hendt_de'
//     }],
//     keywords: ''
// }).then(result => {
//     console.log(result);
// });
//
eBay.finding.findItemsIneBayStores({
    storeName: 'HENDT'
}, {raw: false}).then(result => {
    // Return raw XML
    console.log(JSON.stringify(result));
});
