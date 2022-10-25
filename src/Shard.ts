export interface ShardProps {
  /**
   * The cidr for a shard's vpc.
   * Regions typically receive a 10.?.0.0/12 address space,
   * within which there are 16 /16 subnets for shards.
   */
  readonly cidr: string;
  /**
   * The AWS region for a shard.
   */
  readonly region: string;
  /**
   * The shard-number within the region.
   */
  readonly number: number;
}

export interface IShard extends ShardProps {
  /**
   * The proper name for a shard (without numeric suffix).
   */
  readonly name: string;
}

export abstract class Shard implements IShard {
  readonly cidr: string;
  readonly region: string;
  readonly number: number;

  constructor(props: ShardProps) {
    this.cidr = props.cidr;
    this.region = props.region;
    this.number = props.number;
  }

  /**
   * There are numerous different ways to name a shard. Pick one and stick with
   * it.
   */
  abstract get name(): string;
}
