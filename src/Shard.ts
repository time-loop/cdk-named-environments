export interface IShardProps {
  /**
   * The CIDR block for a shard.
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
  /**
   * The shard-identifier.
   */
  readonly identifier?: string;
}

export interface IShard extends IShardProps {
  /**
   * The proper name for a shard (without numeric suffix).
   */
  readonly name: string;
}

export abstract class Shard implements IShard {
  readonly cidr: string;
  readonly region: string;
  readonly number: number;
  readonly identifier: string | undefined;

  constructor(props: IShardProps) {
    this.cidr = props.cidr;
    this.region = props.region;
    this.number = props.number;
    this.identifier = props.identifier;
  }

  /**
   * There are numerous different ways to name a shard. Pick one and stick with
   * it.
   */
  abstract get name(): string;
}
