import { IShard, Shard, IShardProps } from '../src';

const env = 'QA';
class TestShardImpl extends Shard {
  get name(): string {
    const suffix = this.identifier ?? this.number;
    return `${env}_${this.region}_${suffix}`;
  }
}

interface TestCase {
  shardsProps: IShardProps;
  expectedShardName: string;
  isShardIdentifierUndefined?: boolean;
}
const testCases: TestCase[] = [
  {
    shardsProps: { cidr: 'fakeCidr', region: 'us-west-2', number: 1 },
    expectedShardName: 'QA_us-west-2_1',
    isShardIdentifierUndefined: true,
  },
  {
    shardsProps: { cidr: 'fakeCidr', region: 'us-east-2', number: 1, identifier: 'global' },
    expectedShardName: 'QA_us-east-2_global',
    isShardIdentifierUndefined: false,
  },
];

describe.each<TestCase>(testCases)(
  'Shard implementation: $expectedShardName',
  ({ shardsProps, expectedShardName, isShardIdentifierUndefined }) => {
    let shard: IShard;

    beforeEach(() => {
      shard = new TestShardImpl(shardsProps);
    });

    it('sets cidr correctly', () => {
      expect(shard.cidr).toEqual(shardsProps.cidr);
    });
    it('sets region correctly', () => {
      expect(shard.region).toEqual(shardsProps.region);
    });
    it('sets number correctly', () => {
      expect(shard.number).toEqual(shardsProps.number);
    });
    it('sets name correctly', () => {
      expect(shard.name).toEqual(expectedShardName);
    });
    if (isShardIdentifierUndefined) {
      it('identifier is undefined', () => {
        expect(shard.identifier).toBeUndefined();
      });
    } else {
      it('sets identifier correctly', () => {
        expect(shard.identifier).toEqual(shardsProps.identifier);
      });
    }
  },
);
