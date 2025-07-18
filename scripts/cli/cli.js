import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const { Select } = require('enquirer');

const jsonData = require('./cli.json');

const { spawn } = require('child_process');

const onNpm = (command) => {
  const npmRun = spawn(command, {
    stdio: 'inherit',
    shell: true,
  });

  npmRun.on('close', (code) => {
    if (code !== 0) {
      console.error(`Процесс завершился с кодом ${code}`);
      process.exit(1);
    }
  });
};

const initPrompt = new Select({
  name: 'init',
  message: `${jsonData.name}, добро пожаловать в cli. Выберите опцию:`,
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
