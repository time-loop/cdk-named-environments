import { Environment } from 'aws-cdk-lib';
import { IShard } from './Shard';

export interface NamedEnvCommonProps {
  /**
   * If a region isn't specified, where should we default to.
   * Also considered for centralized resources.
   */
  readonly defaultRegion: string;
  /**
   * The proper name of the environment.
   */
  readonly name: string;
  /**
   * What kind of an account is this?
   */
  readonly organizationalUnit: string;
  /**
   * In which region does SSO live in?
   */
  readonly ssoRegion?: string;
  /**
   * Is this an SSO accessible account? If so, what's the start url?
   */
  readonly ssoStartUrl?: string;
  /**
   * The DNS zone into which services should be deployed.
   */
  readonly zoneName: string;
}

interface NamedEnvFactoryCommonProps {
  /**
   * The numeric account id as used by cdk.Environment.account
   */
  readonly account: string;

  /**
   * Enumerates all existing shards grouped in the NamedEnv.
   */
  readonly shards: IShard[];
}

/**
 * Used by newNamedEnvFactory. Is it used elsewhere?
 */
export interface NamedEnvFactoryProps extends NamedEnvCommonProps, NamedEnvFactoryCommonProps {}

export interface NamedEnv extends Environment, NamedEnvCommonProps {
  /**
   * The shard within a region.
   */
  readonly shard: IShard;
}

/**
 * Generator of NamedEnv objects.
 */
export interface NamedEnvFactory extends NamedEnvFactoryCommonProps {
  /**
   * The proper name of the environment.
   */
  readonly environmentName: string;
  /**
   * Callable function to generate a NamedEnv from this factory.
   */
  (shard: IShard): NamedEnv;
}

/**
 * Generates a function which creates a NamedEnv when given a region
 * @param props
 * @returns NamedEnv
 */
export function newNamedEnvFactory(props: NamedEnvFactoryProps): NamedEnvFactory {
  if ((props.ssoStartUrl || props.ssoRegion) && !(props.ssoStartUrl && props.ssoRegion)) {
    console.warn(
      `Something is wrong for ${props.name}: ssoStartUrl = ${JSON.stringify(props.ssoStartUrl)} and ssoRegion = ${
        props.ssoRegion
      }, but either both or neither of these should be set.`,
    );
  }

  const namedEnvFactory = function (shard: IShard): NamedEnv {
    return {
      ...props,
      shard,
      region: shard.region,
    };
  };
  namedEnvFactory.account = props.account;
  namedEnvFactory.environmentName = props.name;
  namedEnvFactory.shards = props.shards;
  return namedEnvFactory;
}
