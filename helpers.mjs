import path from "path";
import url from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const configGetNoCache = (...args) => {
  const configModulePath = path.join(`node_modules`, `config`, `lib`, `config.js`);
  Object.keys(require.cache).filter(item => item.endsWith(configModulePath)).forEach(item => delete require.cache[item]);
  const config = require("config");
  return config.get(...args);
};


