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

  export interface NamedEnv extends Environment {
    /**
     * The asn to be used for TransitGateways
     * @deprecated we aren't using tgw (maybe at the regional level for shard support though)
     */
    readonly asn: number;
    /**
     * Currently the vpc cidr for the region.
     * @deprecated you probably want the shard specific cidrs
     */
    readonly cidr: string;
    /**
     * The shard within a region.
     */
    readonly shard: IShard;
    /**
     * If a region isn't specified, where should we default to.
     * Also considered for centralized resources.
     */
    readonly defaultRegion: string;
    /**
     * The kebab-name of the environment.
     */
    readonly name: string;
    /**
     * What kind of an account is this?
     */
    readonly organizationalUnit: string;
    /**
     * CIDR details for all regions.
     */
    readonly regionDetails: Record<string, RegionalDetails>;
    /**
     * The shorthand for the region.
     *
     * @deprecated use shard.name
     */
    readonly shortRegion: string;
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
    /**
     * The DNS zone for attachments
     */
    readonly attachmentZoneName: string;
  }

  /**
   * Used by newNamedEnvFactory. Is it used elsewhere?
   */
  export interface NamedEnvironmentProps {
    /**
     * The numeric account id as used by cdk.Environment.account
     */
    readonly account: string;
    /**
     * Mapping of regions to CIDR bases.
     * Only override if you need to have subnets from one account not over-lapping subnets from another.
     * This is an anti-pattern and we should avoid it where possible.
     *
     * @default - see belos
     * {
     *  'ap-northeast-2': '10.0.0.0/12',
     *  'ap-south-1': '10.16.0.0/12',
     *  'ap-southeast-2': '10.32.0.0/12',
     *  'eu-central-1': '10.48.0.0/12' ,
     *  'eu-west-1': '10.64.0.0/12',
     *  'sa-east-1': '10.80.0.0/12',
     *  'us-east-1': '10.96.0.0/12',
     *  'us-east-2': '10.112.0.0/12',
     *  'us-west-1': '10.128.0.0/12',
     *  'us-west-2': '10.144.0.0/12',
     * },
     */
    /**
     * If a region isn't specified, where should we default to.
     * Also considered for centralized resources.
     */
    readonly defaultRegion: string;
    /**
     * A map of region => { asn, cidr }
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
     * The name of the route53 zone for this account.
     */
    readonly zoneName: string;
    /**
     * The DNS zone for attachments
     */
    readonly attachmentZoneName: string;
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
  export function newNamedEnvFactory(props: NamedEnvironmentProps): NamedEnvFactory {
    if ((props.ssoStartUrl || props.ssoRegion) && !(props.ssoStartUrl && props.ssoRegion)) {
      console.warn(
        `Something is wrong for ${props.name}: ssoStartUrl = ${JSON.stringify(props.ssoStartUrl)} and ssoRegion = ${
          props.ssoRegion
        }, but either both or neither of these should be set.`,
      );
    }

    const namedEnvFactory = function (shard: IShard, asnOverride?: number): NamedEnv {
      const region = shard.region;
      const regionDetails = props.regionDetails[region];
      const asn = asnOverride || regionDetails?.asn || -1;
      const cidr = shard.cidr;
      const shortRegion = shard.name;

      return {
        ...props,
        asn,
        shard,
        cidr,
        region,
        shortRegion,
      };
    };
    namedEnvFactory.environmentName = props.name;
    namedEnvFactory.regionDetails = props.regionDetails;
    return namedEnvFactory;
  }
}
