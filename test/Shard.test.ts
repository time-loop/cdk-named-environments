import { IShard, Shard, ShardProps } from '../src';

const env = 'QA';
class TestShardImpl extends Shard {
  get name(): string {
    return `${env}_${this.region}_${this.number}`;
  }
}

const testShardProps: ShardProps = { cidr: '10.0.0.0/0', region: 'us-west-2', number: 1 };

let shard: IShard;
describe('Shard', () => {
  beforeEach(() => {
    shard = new TestShardImpl(testShardProps);
  });

  it('sets CIDR correctly', () => {
    expect(shard.cidr).toEqual(testShardProps.cidr);
  });
  it('sets region correctly', () => {
    expect(shard.region).toEqual(testShardProps.region);
  });
  it('sets number correctly', () => {
    expect(shard.number).toEqual(testShardProps.number);
  });
  it('sets name correctly', () => {
    expect(shard.name).toEqual('QA_us-west-2_1');
  });
});
