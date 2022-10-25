import { Environment } from 'aws-cdk-lib';
import { IShard } from './Shard';

export module environments {
  export interface RegionalDetails {
    readonly asn: number;
    /**
     * @deprecated you should probably be using the shard's cidr.
     */
    readonly cidr: string; // in '0.0.0.0/32' format
  }

  interface NamedEnvCommonProps {
    /**
     * If a region isn't specified, where should we default to.
     * Also considered for centralized resources.
     */
    readonly defaultRegion: string;
    /**
     * A map of region => { asn, cidr }, for each region of the environment.
     */
    readonly regionDetails: Record<string, RegionalDetails>;
    /**
     * The proper name of the environment in kebab-format.
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

  export interface NamedEnv extends Environment, NamedEnvCommonProps {
    /**
     * The shard within a region.
     */
    readonly shard: IShard;
  }

  /**
   * Used by newNamedEnvFactory. Is it used elsewhere?
   */
  export interface NamedEnvironmentProps extends NamedEnvCommonProps {
    /**
     * The numeric account id as used by cdk.Environment.account
     */
    readonly account: string;
  }

  export interface NamedEnvFactory {
    // TODO: should we add shardDetails here?
    readonly environmentName: string;
    readonly regionDetails: Record<string, RegionalDetails>;
    (shard: IShard, overrideAsn?: number): NamedEnv;
  }

  /**
   * Generates a function which creates a NamedEnv when given a region
   * @param props
   * @returns NamedEnv
   */
  export function newNamedEnvFactory(
    props: NamedEnvironmentProps,
    factory?: (...args: any[]) => NamedEnv,
  ): NamedEnvFactory {
    if ((props.ssoStartUrl || props.ssoRegion) && !(props.ssoStartUrl && props.ssoRegion)) {
      console.warn(
        `Something is wrong for ${props.name}: ssoStartUrl = ${JSON.stringify(props.ssoStartUrl)} and ssoRegion = ${
          props.ssoRegion
        }, but either both or neither of these should be set.`,
      );
    }

    Object.defineProperties(factory, {
      environmentName: {
        value: props.name,
        writable: false,
      },
      regionDetails: { value: props.regionDetails, writable: false },
    });
    const namedEnvFactory = function (shard: IShard): NamedEnv {
      const region = shard.region;

      return {
        ...props,
        shard,
        region,
      };
    };
    namedEnvFactory.environmentName = props.name;
    namedEnvFactory.regionDetails = props.regionDetails;
    return namedEnvFactory;
  }
}
