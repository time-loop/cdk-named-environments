import { clickupCdk } from '@time-loop/clickup-projen';
const project = new clickupCdk.ClickUpCdkConstructLibrary({
  author: 'ClickUp',
  authorAddress: 'devops@clickup.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  devDeps: ['@time-loop/clickup-projen'],
  name: 'cdk-named-environments',
  repositoryUrl: 'https://github.com/time-loop/cdk-named-environments.git',
  projenrcTs: true,

  // deps: [],
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
