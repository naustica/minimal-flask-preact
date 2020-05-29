# minimal-flask-preact

[![Build Status](https://travis-ci.org/naustica/minimal-flask-preact.svg?branch=master)](https://travis-ci.org/github/naustica/minimal-flask-preact)
[![License](https://img.shields.io/github/license/naustica/minimal-flask-preact)](https://github.com/naustica/minimal-flask-preact/blob/master/LICENSE.txt)

This repo contains a minimalistic template for creating a full-stack web application with Flask and Preact.

## Features

- [Preact 10.x](https://preactjs.com/)
- [Flask 1.1.x](https://flask.palletsprojects.com/en/1.1.x/)
- [Typescript 3.9.x](https://www.typescriptlang.org/)
- [Webpack 4.x](https://webpack.js.org/)
- [Jest 26.x](https://jestjs.io/)

## Getting Started


```bash
git clone git@github.com:naustica/minimal-flask-preact.git
cd minimal-flask-preact && npm install
```

## Frontend
```bash
npm run build
```

## Backend
```bash
cd api
python3 -m venv venv
source venv/bin/activate
export SECRET_KEY=XXX
export APP_SETTINGS=config.DevelopementConfig
python server.py
```
