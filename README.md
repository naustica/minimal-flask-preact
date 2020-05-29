# minimal-flask-preact

[![Build Status](https://travis-ci.org/naustica/minimal-flask-preact.svg?branch=master)](https://travis-ci.org/github/naustica/minimal-flask-preact)
[![License](https://img.shields.io/github/license/naustica/minimal-flask-preact)](https://github.com/naustica/minimal-flask-preact/blob/master/LICENSE.txt)

This repo contains a minimalistic template for creating a full-stack web application with Flask and Preact.

## 🔥 Features

- [Preact 10.x](https://preactjs.com/)
- [Flask 1.1.x](https://flask.palletsprojects.com/en/1.1.x/)
- [Typescript 3.9.x](https://www.typescriptlang.org/)
- [Webpack 4.x](https://webpack.js.org/)
- [Jest 26.x](https://jestjs.io/)

## 💁 Getting Started
First you will need to clone this repository. This can be done with the following command.

```bash
git clone https://github.com/naustica/minimal-flask-preact.git
```

After downloading, change your directory to minimal-flask-preact and install all dependencies.

```bash
cd minimal-flask-preact && npm install
```

## 🚀 Frontend
You can start the webpack development server with this command.
```bash
npm run build
```

To create a javascript bundle file for production use the provided script `production`.
```bash
npm run production
```

## 🤖 Backend
It is a good practice to create a virtual environment when working on the backend. You can create an environment in Python with `python -m venv {name}`.

A Flask app rely on some environment variables which must be set in order to safely deploy the application on a public server then.

```bash
cd api
python3 -m venv venv
source venv/bin/activate
export SECRET_KEY=XXX
export APP_SETTINGS=config.DevelopementConfig
```

To start the Flask server call `server.py`.
```bash
python server.py
```