#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies */
import { App, Tags } from "aws-cdk-lib";
import { ElbStack } from "./elastic-beanstalk";
import { RdsStack } from "./rds";
import { VpcStack } from "./vpc";

const app = new App();

const env = {
  account: process.env.AWS_ACCOUNT_ID,
  region: process.env.AWS_REGION
};

const vpcStack = new VpcStack(app, "akdenizin-incisi-api-vpc", { env });
const rdsStack = new RdsStack(app, "akdenizin-incisi-api-rds", {
  env,
  myVpc: vpcStack.myVpc,
  dbSecurityGroup: vpcStack.dbSecurityGroup
});

const ebStack = new ElbStack(app, "akdenizin-incisi-api-api", {
  env,
  myRds: rdsStack.myRdsInstance,
  dbUsername:
    rdsStack.myRdsInstance.secret
      ?.secretValueFromJson("username")
      .unsafeUnwrap() || "user-not-set",
  dbPassword:
    rdsStack.myRdsInstance.secret
      ?.secretValueFromJson("password")
      .unsafeUnwrap() || "pwd-not-set",
  webSecurityGroup: vpcStack.webSecurityGroup,
  lbSecurityGroup: vpcStack.lbSecurityGroup,
  vpc: vpcStack.myVpc
});

Tags.of(vpcStack).add("project", "akdenizin-incisi-api");
Tags.of(rdsStack).add("project", "akdenizin-incisi-api");
Tags.of(ebStack).add("project", "akdenizin-incisi-api");

rdsStack.addDependency(vpcStack);
ebStack.addDependency(rdsStack);

app.synth();
