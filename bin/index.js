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

// public
fs.copy(path.join(package_dir, '../public'), path.join(destination, 'public'), function (err) {
  if (err) return console.log(err)
})

// server
fs.copy(path.join(package_dir, '../server'), path.join(destination, 'server'), function (err) {
  if (err) return console.log(err)
})

// src
fs.copy(path.join(package_dir, '../src'), path.join(destination, 'src'), function (err) {
  if (err) return console.log(err)
})
