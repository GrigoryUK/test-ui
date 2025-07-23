import { spawn } from 'child_process';

export const onNpm = (command) => {
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
