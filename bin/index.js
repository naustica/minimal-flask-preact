#!/usr/bin/env node

const yargs = require("yargs");
const path = require('path');
const fs = require("fs-extra");

const options = yargs
 .usage("Usage: minimal-flask-preact create <project-name>")
 .option("n", { alias: "name", describe: "The application name", type: "string", demandOption: true })
 .locale('en')
 .argv;

// name of project
const name = options.name;
// get current working directory
const dir = process.cwd();

// destination
const destination = path.join(dir, name);

// get current working directory of this package
const package_dir = __dirname;

fs.copy(path.join(package_dir, 'app'), path.join(destination), function (err) {
  if (err) return console.log(err)
})
