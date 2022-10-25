# API Reference <a name="API Reference" id="api-reference"></a>


## Structs <a name="Structs" id="Structs"></a>

### NamedEnv <a name="NamedEnv" id="@time-loop/cdk-named-environments.environments.NamedEnv"></a>

#### Initializer <a name="Initializer" id="@time-loop/cdk-named-environments.environments.NamedEnv.Initializer"></a>

```typescript
import { environments } from '@time-loop/cdk-named-environments'

const namedEnv: environments.NamedEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnv.property.account">account</a></code> | <code>string</code> | The AWS account ID for this environment. |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnv.property.region">region</a></code> | <code>string</code> | The AWS region for this environment. |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnv.property.defaultRegion">defaultRegion</a></code> | <code>string</code> | If a region isn't specified, where should we default to. |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnv.property.name">name</a></code> | <code>string</code> | The proper name of the environment in kebab-format. |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnv.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | What kind of an account is this? |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnv.property.regionDetails">regionDetails</a></code> | <code>{[ key: string ]: @time-loop/cdk-named-environments.environments.RegionalDetails}</code> | A map of region => { asn, cidr }, for each region of the environment. |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnv.property.shard">shard</a></code> | <code><a href="#@time-loop/cdk-named-environments.IShard">IShard</a></code> | The shard within a region. |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnv.property.zoneName">zoneName</a></code> | <code>string</code> | The DNS zone into which services should be deployed. |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnv.property.ssoRegion">ssoRegion</a></code> | <code>string</code> | In which region does SSO live in? |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnv.property.ssoStartUrl">ssoStartUrl</a></code> | <code>string</code> | Is this an SSO accessible account? |

---

##### `account`<sup>Optional</sup> <a name="account" id="@time-loop/cdk-named-environments.environments.NamedEnv.property.account"></a>

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

##### `region`<sup>Optional</sup> <a name="region" id="@time-loop/cdk-named-environments.environments.NamedEnv.property.region"></a>

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

##### `defaultRegion`<sup>Required</sup> <a name="defaultRegion" id="@time-loop/cdk-named-environments.environments.NamedEnv.property.defaultRegion"></a>

```typescript
public readonly defaultRegion: string;
```

- *Type:* string

If a region isn't specified, where should we default to.

Also considered for centralized resources.

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/cdk-named-environments.environments.NamedEnv.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The proper name of the environment in kebab-format.

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@time-loop/cdk-named-environments.environments.NamedEnv.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

What kind of an account is this?

---

##### `regionDetails`<sup>Required</sup> <a name="regionDetails" id="@time-loop/cdk-named-environments.environments.NamedEnv.property.regionDetails"></a>

```typescript
public readonly regionDetails: {[ key: string ]: RegionalDetails};
```

- *Type:* {[ key: string ]: @time-loop/cdk-named-environments.environments.RegionalDetails}

A map of region => { asn, cidr }, for each region of the environment.

---

##### `shard`<sup>Required</sup> <a name="shard" id="@time-loop/cdk-named-environments.environments.NamedEnv.property.shard"></a>

```typescript
public readonly shard: IShard;
```

- *Type:* <a href="#@time-loop/cdk-named-environments.IShard">IShard</a>

The shard within a region.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@time-loop/cdk-named-environments.environments.NamedEnv.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

The DNS zone into which services should be deployed.

---

##### `ssoRegion`<sup>Optional</sup> <a name="ssoRegion" id="@time-loop/cdk-named-environments.environments.NamedEnv.property.ssoRegion"></a>

```typescript
public readonly ssoRegion: string;
```

- *Type:* string

In which region does SSO live in?

---

##### `ssoStartUrl`<sup>Optional</sup> <a name="ssoStartUrl" id="@time-loop/cdk-named-environments.environments.NamedEnv.property.ssoStartUrl"></a>

```typescript
public readonly ssoStartUrl: string;
```

- *Type:* string

Is this an SSO accessible account?

If so, what's the start url?

---

### NamedEnvFactory <a name="NamedEnvFactory" id="@time-loop/cdk-named-environments.environments.NamedEnvFactory"></a>

#### Initializer <a name="Initializer" id="@time-loop/cdk-named-environments.environments.NamedEnvFactory.Initializer"></a>

```typescript
import { environments } from '@time-loop/cdk-named-environments'

const namedEnvFactory: environments.NamedEnvFactory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnvFactory.property.environmentName">environmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnvFactory.property.regionDetails">regionDetails</a></code> | <code>{[ key: string ]: @time-loop/cdk-named-environments.environments.RegionalDetails}</code> | *No description.* |

---

##### `environmentName`<sup>Required</sup> <a name="environmentName" id="@time-loop/cdk-named-environments.environments.NamedEnvFactory.property.environmentName"></a>

```typescript
public readonly environmentName: string;
```

- *Type:* string

---

##### `regionDetails`<sup>Required</sup> <a name="regionDetails" id="@time-loop/cdk-named-environments.environments.NamedEnvFactory.property.regionDetails"></a>

```typescript
public readonly regionDetails: {[ key: string ]: RegionalDetails};
```

- *Type:* {[ key: string ]: @time-loop/cdk-named-environments.environments.RegionalDetails}

---

### NamedEnvironmentProps <a name="NamedEnvironmentProps" id="@time-loop/cdk-named-environments.environments.NamedEnvironmentProps"></a>

Used by newNamedEnvFactory.

Is it used elsewhere?

#### Initializer <a name="Initializer" id="@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.Initializer"></a>

```typescript
import { environments } from '@time-loop/cdk-named-environments'

const namedEnvironmentProps: environments.NamedEnvironmentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.account">account</a></code> | <code>string</code> | The numeric account id as used by cdk.Environment.account. |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.defaultRegion">defaultRegion</a></code> | <code>string</code> | If a region isn't specified, where should we default to. |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.name">name</a></code> | <code>string</code> | The proper name of the environment in kebab-format. |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.organizationalUnit">organizationalUnit</a></code> | <code>string</code> | What kind of an account is this? |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.regionDetails">regionDetails</a></code> | <code>{[ key: string ]: @time-loop/cdk-named-environments.environments.RegionalDetails}</code> | A map of region => { asn, cidr }, for each region of the environment. |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.zoneName">zoneName</a></code> | <code>string</code> | The DNS zone into which services should be deployed. |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.ssoRegion">ssoRegion</a></code> | <code>string</code> | In which region does SSO live in? |
| <code><a href="#@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.ssoStartUrl">ssoStartUrl</a></code> | <code>string</code> | Is this an SSO accessible account? |

---

##### `account`<sup>Required</sup> <a name="account" id="@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The numeric account id as used by cdk.Environment.account.

---

##### `defaultRegion`<sup>Required</sup> <a name="defaultRegion" id="@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.defaultRegion"></a>

```typescript
public readonly defaultRegion: string;
```

- *Type:* string

If a region isn't specified, where should we default to.

Also considered for centralized resources.

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The proper name of the environment in kebab-format.

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.organizationalUnit"></a>

```typescript
public readonly organizationalUnit: string;
```

- *Type:* string

What kind of an account is this?

---

##### `regionDetails`<sup>Required</sup> <a name="regionDetails" id="@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.regionDetails"></a>

```typescript
public readonly regionDetails: {[ key: string ]: RegionalDetails};
```

- *Type:* {[ key: string ]: @time-loop/cdk-named-environments.environments.RegionalDetails}

A map of region => { asn, cidr }, for each region of the environment.

---

##### `zoneName`<sup>Required</sup> <a name="zoneName" id="@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.zoneName"></a>

```typescript
public readonly zoneName: string;
```

- *Type:* string

The DNS zone into which services should be deployed.

---

##### `ssoRegion`<sup>Optional</sup> <a name="ssoRegion" id="@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.ssoRegion"></a>

```typescript
public readonly ssoRegion: string;
```

- *Type:* string

In which region does SSO live in?

---

##### `ssoStartUrl`<sup>Optional</sup> <a name="ssoStartUrl" id="@time-loop/cdk-named-environments.environments.NamedEnvironmentProps.property.ssoStartUrl"></a>

```typescript
public readonly ssoStartUrl: string;
```

- *Type:* string

Is this an SSO accessible account?

If so, what's the start url?

---

### RegionalDetails <a name="RegionalDetails" id="@time-loop/cdk-named-environments.environments.RegionalDetails"></a>

#### Initializer <a name="Initializer" id="@time-loop/cdk-named-environments.environments.RegionalDetails.Initializer"></a>

```typescript
import { environments } from '@time-loop/cdk-named-environments'

const regionalDetails: environments.RegionalDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-named-environments.environments.RegionalDetails.property.asn">asn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@time-loop/cdk-named-environments.environments.RegionalDetails.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |

---

##### `asn`<sup>Required</sup> <a name="asn" id="@time-loop/cdk-named-environments.environments.RegionalDetails.property.asn"></a>

```typescript
public readonly asn: number;
```

- *Type:* number

---

##### ~~`cidr`~~<sup>Required</sup> <a name="cidr" id="@time-loop/cdk-named-environments.environments.RegionalDetails.property.cidr"></a>

- *Deprecated:* you should probably be using the shard's cidr.

```typescript
public readonly cidr: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### Shard <a name="Shard" id="@time-loop/cdk-named-environments.Shard"></a>

- *Implements:* <a href="#@time-loop/cdk-named-environments.IShard">IShard</a>

#### Initializers <a name="Initializers" id="@time-loop/cdk-named-environments.Shard.Initializer"></a>

```typescript
import { Shard } from '@time-loop/cdk-named-environments'

new Shard(props: IShardProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-named-environments.Shard.Initializer.parameter.props">props</a></code> | <code><a href="#@time-loop/cdk-named-environments.IShardProps">IShardProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@time-loop/cdk-named-environments.Shard.Initializer.parameter.props"></a>

- *Type:* <a href="#@time-loop/cdk-named-environments.IShardProps">IShardProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-named-environments.Shard.property.cidr">cidr</a></code> | <code>string</code> | The cidr for a shard's vpc. |
| <code><a href="#@time-loop/cdk-named-environments.Shard.property.name">name</a></code> | <code>string</code> | There are numerous different ways to name a shard. |
| <code><a href="#@time-loop/cdk-named-environments.Shard.property.number">number</a></code> | <code>number</code> | The shard-number within the region. |
| <code><a href="#@time-loop/cdk-named-environments.Shard.property.region">region</a></code> | <code>string</code> | The AWS region for a shard. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@time-loop/cdk-named-environments.Shard.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

The cidr for a shard's vpc.

Regions typically receive a 10.?.0.0/12 address space,
within which there are 16 /16 subnets for shards.

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/cdk-named-environments.Shard.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

There are numerous different ways to name a shard.

Pick one and stick with
it.

---

##### `number`<sup>Required</sup> <a name="number" id="@time-loop/cdk-named-environments.Shard.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

The shard-number within the region.

---

##### `region`<sup>Required</sup> <a name="region" id="@time-loop/cdk-named-environments.Shard.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region for a shard.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IShard <a name="IShard" id="@time-loop/cdk-named-environments.IShard"></a>

- *Extends:* <a href="#@time-loop/cdk-named-environments.IShardProps">IShardProps</a>

- *Implemented By:* <a href="#@time-loop/cdk-named-environments.Shard">Shard</a>, <a href="#@time-loop/cdk-named-environments.IShard">IShard</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-named-environments.IShard.property.cidr">cidr</a></code> | <code>string</code> | The cidr for a shard's vpc. |
| <code><a href="#@time-loop/cdk-named-environments.IShard.property.number">number</a></code> | <code>number</code> | The shard-number within the region. |
| <code><a href="#@time-loop/cdk-named-environments.IShard.property.region">region</a></code> | <code>string</code> | The AWS region for a shard. |
| <code><a href="#@time-loop/cdk-named-environments.IShard.property.name">name</a></code> | <code>string</code> | The proper name for a shard (without numeric suffix). |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@time-loop/cdk-named-environments.IShard.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

The cidr for a shard's vpc.

Regions typically receive a 10.?.0.0/12 address space,
within which there are 16 /16 subnets for shards.

---

##### `number`<sup>Required</sup> <a name="number" id="@time-loop/cdk-named-environments.IShard.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

The shard-number within the region.

---

##### `region`<sup>Required</sup> <a name="region" id="@time-loop/cdk-named-environments.IShard.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region for a shard.

---

##### `name`<sup>Required</sup> <a name="name" id="@time-loop/cdk-named-environments.IShard.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The proper name for a shard (without numeric suffix).

---

### IShardProps <a name="IShardProps" id="@time-loop/cdk-named-environments.IShardProps"></a>

- *Implemented By:* <a href="#@time-loop/cdk-named-environments.Shard">Shard</a>, <a href="#@time-loop/cdk-named-environments.IShard">IShard</a>, <a href="#@time-loop/cdk-named-environments.IShardProps">IShardProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@time-loop/cdk-named-environments.IShardProps.property.cidr">cidr</a></code> | <code>string</code> | The cidr for a shard's vpc. |
| <code><a href="#@time-loop/cdk-named-environments.IShardProps.property.number">number</a></code> | <code>number</code> | The shard-number within the region. |
| <code><a href="#@time-loop/cdk-named-environments.IShardProps.property.region">region</a></code> | <code>string</code> | The AWS region for a shard. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@time-loop/cdk-named-environments.IShardProps.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

The cidr for a shard's vpc.

Regions typically receive a 10.?.0.0/12 address space,
within which there are 16 /16 subnets for shards.

---

##### `number`<sup>Required</sup> <a name="number" id="@time-loop/cdk-named-environments.IShardProps.property.number"></a>

```typescript
public readonly number: number;
```

- *Type:* number

The shard-number within the region.

---

##### `region`<sup>Required</sup> <a name="region" id="@time-loop/cdk-named-environments.IShardProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region for a shard.

---

