import { clickupCdk } from '@time-loop/clickup-projen';
import { javascript } from 'projen';

const name = 'cdk-named-environments';
const project = new clickupCdk.ClickUpCdkConstructLibrary({
  author: 'ClickUp',
  authorAddress: 'devops@clickup.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  devDeps: ['@time-loop/clickup-projen'],
  licensed: true,
  minMajorVersion: 1,
  name,
  projenrcTs: true,
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: '9',
  repositoryUrl: `https://github.com/time-loop/${name}.git`,
});
project.synth();
