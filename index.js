import { fileURLToPath } from "node:url";

export default function (config) {
  return {
    src: "__site/",
    boilerplate: fileURLToPath(new URL("boilerplate/", import.meta.url)),
    buildCommand: "rm __site/index.js",
    buildOutputFolder: "__site/", // no build necessary, just send it as is
    getDeployCommand: (deployment) => {
      `echo "Deploying to ${deployment.host}"`;
    },
  };
}
