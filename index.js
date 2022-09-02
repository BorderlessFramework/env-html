import { fileURLToPath } from "node:url";

import { BorderlessEnvironment } from "@borderlessjs/borderless";

export default class HTMLEnvironment extends BorderlessEnvironment {
  constructor(name, config) {
    super(
      name,
      config,
      "__site",
      "__site",
      fileURLToPath(new URL("boilerplate/", import.meta.url)),
      "rm __site/index.js"
    );
  }

  getDeployCommand(deploymentConfig) {
    `echo "Deploying static HTML to ${deploymentConfig.host}"`;
  }
}
