// tslint:disable:no-console
import EBay from '../../ebay';
import {EventType} from '../../ebay/api/traditional/clientAlerts';

const ebay = EBay.fromEnv();

ebay.clientAlerts.GetPublicAlerts({
    ChannelDescriptor: [
        {
            ChannelType: 'Item',
            ChannelID: 174028462015,
            EventType: [EventType.ItemEnded]
        },
        {
            ChannelType: 'Item',
            ChannelID: 180434053857,
            EventType: [EventType.ItemEnded]
        }
    ]
}).then(alerts => {
    console.log(JSON.stringify(alerts));
}).catch(e => {
    console.log(e);
});
