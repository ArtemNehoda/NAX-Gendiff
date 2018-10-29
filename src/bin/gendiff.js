#!/usr/bin/env node

import genDiff from '..';
import program from 'commander';

program
  .version('0.1.1')
  .description('Compares two configuration files and shows a difference')
  .arguments('<firstConfig> <secondConfig>')
  .option('-f, --format [type]', 'output format - default: raw. Supported: raw, plain')
  .action((firstConfig, secondConfig) => (
    console.log(genDiff(firstConfig, secondConfig, program.format))
  ))
  .parse(process.argv);
