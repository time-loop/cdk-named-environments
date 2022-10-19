# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### NamedEnv <a name="NamedEnv" id="@time-loop/cdk-environments.environments.NamedEnv"></a>

#### Initializer <a name="Initializer" id="@time-loop/cdk-environments.environments.NamedEnv.Initializer"></a>

```typescript
import { environments } from '@time-loop/cdk-environments'

const namedEnv: environments.NamedEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnv.property.account">account</a></code> | <code>string</code> | The AWS account ID for this environment. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnv.property.region">region</a></code> | <code>string</code> | The AWS region for this environment. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnv.property.asn">asn</a></code> | <code>number</code> | The asn to be used for TransitGateways. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnv.property.attachmentZoneName">attachmentZoneName</a></code> | <code>string</code> | The DNS zone for attachments. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnv.property.cidr">cidr</a></code> | <code>string</code> | Currently the vpc cidr for the region. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnv.property.defaultRegion">defaultRegion</a></code> | <code>string</code> | If a region isn't specified, where should we default to. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnv.property.name">name</a></code> | <code>string</code> | The kebab-name of the environment. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnv.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | What kind of an account is this? |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnv.property.regionDetails">regionDetails</a></code> | <code>{[ key: string ]: @time-loop/cdk-environments.environments.RegionalDetails}</code> | CIDR details for all regions. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnv.property.shard">shard</a></code> | <code><a href="#@time-loop/cdk-environments.IShard">IShard</a></code> | The shard within a region. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnv.property.shortRegion">shortRegion</a></code> | <code>string</code> | The shorthand for the region. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnv.property.zoneName">zoneName</a></code> | <code>string</code> | The DNS zone into which services should be deployed. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnv.property.ssoRegion">ssoRegion</a></code> | <code>string</code> | In which region does SSO live in? |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnv.property.ssoStartUrl">ssoStartUrl</a></code> | <code>string</code> | Is this an SSO accessible account? |

---

##### `account`<sup>Optional</sup> <a name="account" id="@time-loop/cdk-environments.environments.NamedEnv.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string
- *Default:* Aws.accountId which means that the stack will be account-agnostic.

The AWS account ID for this environment.

This can be either a concrete value such as `585191031104` or `Aws.accountId` which
indicates that account ID will only be determined during deployment (it
will resolve to the CloudFormation intrinsic `{"Ref":"AWS::AccountId"}`).
Note that certain features, such as cross-stack references and
environmental context providers require concerete region information and
will cause this stack to emit synthesis errors.

---

##### `region`<sup>Optional</sup> <a name="region" id="@time-loop/cdk-environments.environments.NamedEnv.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string
- *Default:* Aws.region which means that the stack will be region-agnostic.

The AWS region for this environment.

This can be either a concrete value such as `eu-west-2` or `Aws.region`
which indicates that account ID will only be determined during deployment
(it will resolve to the CloudFormation intrinsic `{"Ref":"AWS::Region"}`).
Note that certain features, such as cross-stack references and
environmental context providers require concerete region information and
will cause this stack to emit synthesis errors.

---

##### ~~`asn`~~<sup>Required</sup> <a name="asn" id="@time-loop/cdk-environments.environments.NamedEnv.property.asn"></a>

- *Deprecated:* we aren't using tgw (maybe at the regional level for shard support though)

```typescript
public readonly asn: number;
```

- *Type:* number

The asn to be used for TransitGateways.

---

##### `attachmentZoneName`<sup>Required</sup> <a name="attachmentZoneName" id="@time-loop/cdk-environments.environments.NamedEnv.property.attachmentZoneName"></a>

```typescript
public readonly attachmentZoneName: string;
```

- *Type:* string

The DNS zone for attachments.

---

##### ~~`cidr`~~<sup>Required</sup> <a name="cidr" id="@time-loop/cdk-environments.environments.NamedEnv.property.cidr"></a>

- *Deprecated:* you probably want the shard specific cidrs

```typescript
public readonly cidr: string;
```

- *Type:* string

Currently the vpc cidr for the region.

---

##### `defaultRegion`<sup>Required</sup> <a name="defaultRegion" id="@time-loop/cdk-environments.environments.NamedEnv.property.defaultRegion"></a>

```typescript
public readonly defaultRegion: string;
```

- *Type:* string

If a region isn't specified, where should we default to.

Also considered for centralized resources.

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/cdk-environments.environments.NamedEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The kebab-name of the environment.

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@time-loop/cdk-environments.environments.NamedEnv.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

What kind of an account is this?

---

##### `regionDetails`<sup>Required</sup> <a name="regionDetails" id="@time-loop/cdk-environments.environments.NamedEnv.property.regionDetails"></a>

```typescript
public readonly regionDetails: {[ key: string ]: RegionalDetails};
```

- *Type:* {[ key: string ]: @time-loop/cdk-environments.environments.RegionalDetails}

CIDR details for all regions.

---

##### `shard`<sup>Required</sup> <a name="shard" id="@time-loop/cdk-environments.environments.NamedEnv.property.shard"></a>

```typescript
public readonly shard: IShard;
```

- *Type:* <a href="#@time-loop/cdk-environments.IShard">IShard</a>

The shard within a region.

---

##### ~~`shortRegion`~~<sup>Required</sup> <a name="shortRegion" id="@time-loop/cdk-environments.environments.NamedEnv.property.shortRegion"></a>

- *Deprecated:* use shard.name

```typescript
public readonly shortRegion: string;
```

- *Type:* string

The shorthand for the region.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@time-loop/cdk-environments.environments.NamedEnv.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

The DNS zone into which services should be deployed.

---

##### `ssoRegion`<sup>Optional</sup> <a name="ssoRegion" id="@time-loop/cdk-environments.environments.NamedEnv.property.ssoRegion"></a>

```typescript
public readonly ssoRegion: string;
```

- *Type:* string

In which region does SSO live in?

---

##### `ssoStartUrl`<sup>Optional</sup> <a name="ssoStartUrl" id="@time-loop/cdk-environments.environments.NamedEnv.property.ssoStartUrl"></a>

```typescript
public readonly ssoStartUrl: string;
```

- *Type:* string

Is this an SSO accessible account?

If so, what's the start url?

---

### NamedEnvFactory <a name="NamedEnvFactory" id="@time-loop/cdk-environments.environments.NamedEnvFactory"></a>

#### Initializer <a name="Initializer" id="@time-loop/cdk-environments.environments.NamedEnvFactory.Initializer"></a>

```typescript
import { environments } from '@time-loop/cdk-environments'

const namedEnvFactory: environments.NamedEnvFactory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnvFactory.property.environmentName">environmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnvFactory.property.regionDetails">regionDetails</a></code> | <code>{[ key: string ]: @time-loop/cdk-environments.environments.RegionalDetails}</code> | *No description.* |

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@time-loop/cdk-environments.environments.NamedEnvFactory.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

---

##### `regionDetails`<sup>Required</sup> <a name="regionDetails" id="@time-loop/cdk-environments.environments.NamedEnvFactory.property.regionDetails"></a>

```typescript
public readonly regionDetails: {[ key: string ]: RegionalDetails};
```

- *Type:* {[ key: string ]: @time-loop/cdk-environments.environments.RegionalDetails}

---

### NamedEnvironmentProps <a name="NamedEnvironmentProps" id="@time-loop/cdk-environments.environments.NamedEnvironmentProps"></a>

Used by newNamedEnvFactory.

Is it used elsewhere?

#### Initializer <a name="Initializer" id="@time-loop/cdk-environments.environments.NamedEnvironmentProps.Initializer"></a>

```typescript
import { environments } from '@time-loop/cdk-environments'

const namedEnvironmentProps: environments.NamedEnvironmentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.account">account</a></code> | <code>string</code> | The numeric account id as used by cdk.Environment.account. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.attachmentZoneName">attachmentZoneName</a></code> | <code>string</code> | The DNS zone for attachments. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.defaultRegion">defaultRegion</a></code> | <code>string</code> | If a region isn't specified, where should we default to. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.name">name</a></code> | <code>string</code> | The proper name of the environment in kebab-format. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | What kind of an account is this? |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.regionDetails">regionDetails</a></code> | <code>{[ key: string ]: @time-loop/cdk-environments.environments.RegionalDetails}</code> | A map of region => { asn, cidr }. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.zoneName">zoneName</a></code> | <code>string</code> | The name of the route53 zone for this account. |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.ssoRegion">ssoRegion</a></code> | <code>string</code> | In which region does SSO live in? |
| <code><a href="#@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.ssoStartUrl">ssoStartUrl</a></code> | <code>string</code> | Is this an SSO accessible account? |

---

##### `account`<sup>Required</sup> <a name="account" id="@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The numeric account id as used by cdk.Environment.account.

---

##### `attachmentZoneName`<sup>Required</sup> <a name="attachmentZoneName" id="@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.attachmentZoneName"></a>

```typescript
public readonly attachmentZoneName: string;
```

- *Type:* string

The DNS zone for attachments.

---

##### `defaultRegion`<sup>Required</sup> <a name="defaultRegion" id="@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.defaultRegion"></a>

```typescript
public readonly defaultRegion: string;
```

- *Type:* string

If a region isn't specified, where should we default to.

Also considered for centralized resources.

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The proper name of the environment in kebab-format.

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

What kind of an account is this?

---

##### `regionDetails`<sup>Required</sup> <a name="regionDetails" id="@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.regionDetails"></a>

```typescript
public readonly regionDetails: {[ key: string ]: RegionalDetails};
```

- *Type:* {[ key: string ]: @time-loop/cdk-environments.environments.RegionalDetails}

A map of region => { asn, cidr }.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

The name of the route53 zone for this account.

---

##### `ssoRegion`<sup>Optional</sup> <a name="ssoRegion" id="@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.ssoRegion"></a>

```typescript
public readonly ssoRegion: string;
```

- *Type:* string

In which region does SSO live in?

---

##### `ssoStartUrl`<sup>Optional</sup> <a name="ssoStartUrl" id="@time-loop/cdk-environments.environments.NamedEnvironmentProps.property.ssoStartUrl"></a>

```typescript
public readonly ssoStartUrl: string;
```

- *Type:* string

Is this an SSO accessible account?

If so, what's the start url?

---

### RegionalDetails <a name="RegionalDetails" id="@time-loop/cdk-environments.environments.RegionalDetails"></a>

#### Initializer <a name="Initializer" id="@time-loop/cdk-environments.environments.RegionalDetails.Initializer"></a>

```typescript
import { environments } from '@time-loop/cdk-environments'

const regionalDetails: environments.RegionalDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-environments.environments.RegionalDetails.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@time-loop/cdk-environments.environments.RegionalDetails.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |

---

##### `asn`<sup>Required</sup> <a name="asn" id="@time-loop/cdk-environments.environments.RegionalDetails.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### ~~`cidr`~~<sup>Required</sup> <a name="cidr" id="@time-loop/cdk-environments.environments.RegionalDetails.property.cidr"></a>

- *Deprecated:* you should probably be using the shard's cidr.

```typescript
public readonly cidr: string;
```

- *Type:* string

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IShard <a name="IShard" id="@time-loop/cdk-environments.IShard"></a>

- *Implemented By:* <a href="#@time-loop/cdk-environments.IShard">IShard</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@time-loop/cdk-environments.IShard.toString">toString</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@time-loop/cdk-environments.IShard.toString"></a>

```typescript
public toString(): string
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-environments.IShard.property.cidr">cidr</a></code> | <code>string</code> | The cidr for a shard's vpc. |
| <code><a href="#@time-loop/cdk-environments.IShard.property.name">name</a></code> | <code>string</code> | The proper name for a shard (without numeric suffix). |
| <code><a href="#@time-loop/cdk-environments.IShard.property.number">number</a></code> | <code>number</code> | The shard-number within the region. |
| <code><a href="#@time-loop/cdk-environments.IShard.property.region">region</a></code> | <code>string</code> | The AWS region for a shard. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@time-loop/cdk-environments.IShard.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

The cidr for a shard's vpc.

Regions typically receive a 10.?.0.0/12 address space,
within which there are 16 /16 subnets for shards.

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/cdk-environments.IShard.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The proper name for a shard (without numeric suffix).

---

##### `number`<sup>Required</sup> <a name="number" id="@time-loop/cdk-environments.IShard.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

The shard-number within the region.

---

##### `region`<sup>Required</sup> <a name="region" id="@time-loop/cdk-environments.IShard.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region for a shard.

---

