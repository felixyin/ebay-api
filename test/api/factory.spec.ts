import {expect} from 'chai';
import 'mocha';
// @ts-ignore
import sinon from 'sinon';
import Factory from '../../ebay/api/factory';
import Auth from '../../ebay/auth/index';
import {eBayConfig} from '../../ebay/types/apiTypes';
import {ILimitedRequest} from '../../ebay/utils/request';

describe('FactoryTest', () => {
    let config: eBayConfig;
    const request: ILimitedRequest = {
        get: sinon.stub(),
        delete: sinon.stub(),
        put: sinon.stub(),
        post: sinon.stub(),
        postForm: sinon.stub()
    };

    beforeEach(() => {
        config = {appId: 'appId', certId: 'certId', sandbox: true, siteId: 0, devId: 'devId'};
    });

    it('Throws an error if devId is not defined', () => {
        delete config.devId;
        const auth: Auth = new Auth(config, request);
        const factory = new Factory(auth, request);
        expect(factory.createTradingApi.bind(factory)).to.throw(/devId/);
    });
});
