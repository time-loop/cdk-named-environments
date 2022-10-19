export interface IShard {
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
   * The proper name for a shard (without numeric suffix).
   */
  readonly name: string;
  /**
   * The shard-number within the region.
   */
  readonly number: number;

  toString(): string;
}
