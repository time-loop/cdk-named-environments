import 'process';
import { IShard } from '../src';
import { newNamedEnvFactory, NamedEnvFactoryProps, NamedEnvFactory, NamedEnv } from '../src/NamedEnv';

enum TestOrganizationalUnit {
  Test = 'dev',
}

const fakeEnvProps: NamedEnvFactoryProps = {
  account: 'fakeAccount',
  defaultRegion: 'fakeRegion',
  name: 'sandbox',
  organizationalUnit: TestOrganizationalUnit.Test,
  shards: [],
  zoneName: 'fake.com',
};

describe('NamedEnv', () => {
  describe('newNamedEnvFactory', () => {
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
    it('appropriately sets environmentName', () => {
      const factory = newNamedEnvFactory(fakeEnvProps);
      expect(factory).toHaveProperty('environmentName', fakeEnvProps.name);
    });
    it('appropriately sets shards', () => {
      const factory = newNamedEnvFactory(fakeEnvProps);
      expect(factory).toHaveProperty('shards', fakeEnvProps.shards);
    });
    it('returns a callable NamedEnv generator function', () => {
      const factory = newNamedEnvFactory(fakeEnvProps);
      expect(factory).toBeInstanceOf(Function);
    });

    describe('NamedEnvFactory', () => {
      const shard: IShard = {
        cidr: 'fakeCidr',
        region: 'us-west-2',
        name: 'TestShard',
        number: 1,
      };
      let factory: NamedEnvFactory;
      let env: NamedEnv;

      beforeEach(() => {
        factory = newNamedEnvFactory(fakeEnvProps);
        env = factory(shard);
      });
      it('sets shard according to props', () => {
        expect(env).toHaveProperty('shard', shard);
      });
      it('sets name according to props', () => {
        expect(env).toHaveProperty('name', factory.environmentName);
      });
      it("sets region to shard's region", () => {
        expect(env.region).toBeDefined();
        expect(env.region).toEqual(shard.region);
      });
    });
  });
});
