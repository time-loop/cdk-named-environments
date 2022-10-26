import 'process';
import { IShard } from '../src';
import { newNamedEnvFactory, NamedEnvFactory, NamedEnvironmentProps } from '../src/NamedEnv';

enum TestOrganizationalUnit {
  Test = 'dev',
}

let fakeEnvProps: NamedEnvironmentProps;

describe('NamedEnv', () => {
  describe('functionality', () => {
    beforeEach(() => {
      fakeEnvProps = {
        name: 'sandbox',
        account: 'fakeAccount',
        defaultRegion: 'fakeRegion',
        zoneName: 'fake.com',
        regionDetails: {},
        organizationalUnit: TestOrganizationalUnit.Test,
      };
    });

    it('warns when has ssoStartUrl, but not ssoRegion', () => {
      const fakeWarn = jest.spyOn(global.console, 'warn').mockImplementation(() => {});
      newNamedEnvFactory({ ...fakeEnvProps, ssoStartUrl: 'fakeStartUrl' });
      expect(fakeWarn).toHaveBeenCalledTimes(1);
      expect(fakeWarn).toHaveBeenCalledWith(
        'Something is wrong for sandbox: ssoStartUrl = "fakeStartUrl" and ssoRegion = undefined, but either both or neither of these should be set.',
      );
    });
    it('throws when has ssoRegion, but not ssoStartUrl', () => {
      const fakeWarn = jest.spyOn(global.console, 'warn').mockImplementation(() => {});
      newNamedEnvFactory({ ...fakeEnvProps, ssoRegion: 'fakeSsoRegion' });
      expect(fakeWarn).toHaveBeenCalledTimes(1);
      expect(fakeWarn).toHaveBeenCalledWith(
        'Something is wrong for sandbox: ssoStartUrl = undefined and ssoRegion = fakeSsoRegion, but either both or neither of these should be set.',
      );
    });
    describe('namedEnvFactory', () => {
      let shard: IShard;
      let factory: NamedEnvFactory;
      beforeEach(() => {
        fakeEnvProps = {
          name: 'sandbox',
          account: 'fakeAccount',
          defaultRegion: 'fakeRegion',
          zoneName: 'fake.com',
          regionDetails: {},
          organizationalUnit: TestOrganizationalUnit.Test,
        };

        shard = {
          region: 'us-west-2',
          name: 'TestShard',
          number: 1,
        };
        factory = newNamedEnvFactory(fakeEnvProps);
      });
      it('takes a shard as input', () => {
        const testEnv = factory(shard);
        expect(testEnv).toHaveProperty('shard');
        expect(testEnv.shard).toEqual(shard);
      });
    });
  });
});
