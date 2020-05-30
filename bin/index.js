#!/usr/bin/env node

const yargs = require('yargs');
const path = require('path');
const fs = require('fs-extra');


const argvs = yargs
  .usage('Usage: minimal-flask-preact create <project-name>')
  .locale('en')
  .showHelpOnFail(true)
  .command('create [name]', 'create a new project', (yargs) => {
    yargs
    .positional('name', {
      describe: 'the application name',
      type: 'string'
    })
  }, (argv) => {
    // name of project
    const name = argv.name;
    // get current working directory
    const dir = process.cwd();

    // destination
    const destination = path.join(dir, name);

    // get current working directory of this package
    const package_dir = __dirname;

    fs.copy(path.join(package_dir, 'app'), path.join(destination), (err) => {
      if (err) return console.log(err)
    })

    console.log('Finished')
    }
  )
  .command({
    command: '*',
    handler: () => {
      yargs.showHelp()
    }
  })
  .options({
    'v': {
      alias: 'version',
      describe: 'show version'
    },
    'h': {
      alias: 'help',
      describe: 'show help'
    }
  })
  .help()
  .fail((msg) => {
    console.error(msg.red);
    yargs.showHelp();
  })
  .argv;
