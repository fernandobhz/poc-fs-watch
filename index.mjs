import fs from 'fs';
import { configGetNoCache } from './helpers.mjs';

const { log } = console;

const die = (...args) => {
  log(...args);
  process.exit(1);
};

const initialValue = configGetNoCache(`a`);
log({initialValue});

fs.watch(`./config`, `utf8`, (eventType, filename) => {
  log({eventType, filename});

  const newValue = configGetNoCache(`a`);
  log({newValue});
});
