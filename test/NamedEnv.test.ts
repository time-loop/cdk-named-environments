import 'process';
import { IShard } from '../src';
import { environments } from '../src/NamedEnv';

enum TestOrganizationalUnit {
  Test = 'dev',
}

let fakeEnvProps: environments.NamedEnvironmentProps;

describe('NamedEnv', () => {
  describe('functionality', () => {
    beforeEach(() => {
      fakeEnvProps = {
        name: 'sandbox',
        account: 'fakeAccount',
        defaultRegion: 'fakeRegion',
        zoneName: 'fake.com',
        attachmentZoneName: 'fakeAttachment.com',
        regionDetails: {},
        organizationalUnit: TestOrganizationalUnit.Test,
      };
    });

    it('warns when has ssoStartUrl, but not ssoRegion', () => {
      const fakeWarn = jest.spyOn(global.console, 'warn').mockImplementation(() => {});
      environments.newNamedEnvFactory({ ...fakeEnvProps, ssoStartUrl: 'fakeStartUrl' });
      expect(fakeWarn).toHaveBeenCalledTimes(1);
      expect(fakeWarn).toHaveBeenCalledWith(
        'Something is wrong for sandbox: ssoStartUrl = "fakeStartUrl" and ssoRegion = undefined, but either both or neither of these should be set.',
      );
    });
    it('throws when has ssoRegion, but not ssoStartUrl', () => {
      const fakeWarn = jest.spyOn(global.console, 'warn').mockImplementation(() => {});
      environments.newNamedEnvFactory({ ...fakeEnvProps, ssoRegion: 'fakeSsoRegion' });
      expect(fakeWarn).toHaveBeenCalledTimes(1);
      expect(fakeWarn).toHaveBeenCalledWith(
        'Something is wrong for sandbox: ssoStartUrl = undefined and ssoRegion = fakeSsoRegion, but either both or neither of these should be set.',
      );
    });
    describe('namedEnvFactory', () => {
      let shard: IShard;
      let factory: environments.NamedEnvFactory;
      beforeEach(() => {
        fakeEnvProps = {
          name: 'sandbox',
          account: 'fakeAccount',
          defaultRegion: 'fakeRegion',
          zoneName: 'fake.com',
          attachmentZoneName: 'fakeAttachment.com',
          regionDetails: {},
          organizationalUnit: TestOrganizationalUnit.Test,
        };

        shard = {
          cidr: '10.0.0.0/0',
          region: 'us-west-2',
          name: 'TestShard',
          number: 1,
        };
        factory = environments.newNamedEnvFactory(fakeEnvProps);
      });

      it('has default ASN', () => {
        const namedEnv = factory(shard);
        expect(namedEnv.asn).toBe(-1);
      });
      it('respects overrideAsn', () => {
        const namedEnv = factory(shard, 666); // 😈
        expect(namedEnv.asn).toBe(666);
      });
      it('can pull ASN from regionDetails', () => {
        factory = environments.newNamedEnvFactory({
          ...fakeEnvProps,
          regionDetails: {
            'us-west-2': {
              asn: 10,
              cidr: '10.0.0.0/32',
            },
          },
        });
        const namedEnv = factory(shard);
        expect(namedEnv.asn).toBe(10);
      });
    });
  });
});
