[![codecov](https://codecov.io/gh/time-loop/cdk-named-environments/branch/main/graph/badge.svg?token=vxIlqfu4hL)](https://codecov.io/gh/time-loop/cdk-named-environments)

# cdk-named-environments

This repo provides an interface for `NamedEnv`, an extension of the [AWS provided Environment interface](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.Environment.html). The goal is to allow the operator to abstract away info associated with an Environment, and make them human-intelligible for consumers. For this reason it is recommended that you create your own library and class implementing `NamedEnv`, to automatically abstract for example networking configuration that the average developer should assume will Just Work.
