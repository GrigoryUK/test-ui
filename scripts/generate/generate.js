import { createRequire } from 'module';

import { onNpm } from '../common/npm.common.js';

const require = createRequire(import.meta.url);

const { Select } = require('enquirer');

const jsonData = require('./generate.json');

const initPrompt = new Select({
  name: 'init',
  message: `${jsonData.welcome}`,
  choices: jsonData.initOptions,
});

(async () => {
  const menu = await initPrompt
    .run()
    .then((result) => {
      onNpm(`${result}`);
    })
    .catch((_) => {});
})();
