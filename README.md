# minimal-flask-preact

[![Build Status](https://travis-ci.org/naustica/minimal-flask-preact.svg?branch=master)](https://travis-ci.org/github/naustica/minimal-flask-preact)
[![npm](https://img.shields.io/npm/dm/minimal-flask-preact)](https://www.npmjs.com/package/minimal-flask-preact)
[![npm](https://img.shields.io/npm/v/minimal-flask-preact)](https://www.npmjs.com/package/minimal-flask-preact)
[![License](https://img.shields.io/github/license/naustica/minimal-flask-preact)](https://github.com/naustica/minimal-flask-preact/blob/master/LICENSE.txt)

This package generates a minimalistic template for building a full-stack web application with Flask and Preact.

## 🔥 Features

- [Preact 10.x](https://preactjs.com/)
- [Flask 1.1.x](https://flask.palletsprojects.com/en/1.1.x/)
- [Typescript 3.9.x](https://www.typescriptlang.org/)
- [Webpack 4.x](https://webpack.js.org/)
- [Jest 26.x](https://jestjs.io/)

## 💁 Getting Started
First you will need to install the package from [npm](https://www.npmjs.com/package/minimal-flask-preact).

```bash
npm install -g minimal-flask-preact
```

After downloading, you can create a new project with the following command.

```bash
minimal-flask-preact create my-project
```

### 📋 Project Structure
Your project directory should now look like this.

```bash
tree my-project
my-project
├── jest.config.js
├── package.json
├── public
│   └── index.html
├── server
│   ├── config.py
│   ├── requirements.txt
│   ├── routes
│   │   └── hello_world.py
│   └── server.py
├── src
│   ├── __tests__
│   │   └── hello_world.test.tsx
│   ├── app.tsx
│   ├── components
│   │   └── button.tsx
│   ├── store
│   │   └── store.tsx
│   └── views
│       └── hello_world.tsx
├── tsconfig.json
├── webpack.dev.js
└── webpack.prod.js
```

## 🚀 Frontend

To initialize your project use `npm init`.

```bash
cd my-project && npm init
npm install
```

You can start the webpack development server with this command.
```bash
npm run dev
```

To create a javascript bundle file for production use the provided script `build`.
```bash
npm run build
```

## 🤖 Backend
It is a good practice to create a virtual environment when working on the backend. You can create an environment in Python with `python -m venv {name}`.

```bash
cd server && python3 -m venv venv
source venv/bin/activate
```

Use `pip` to install the related dependencies for the backend.

```bash
pip install -r requirements.txt
```

A Flask app rely on some environment variables which must be set in order to safely deploy the application on a public server then.

```bash
export SECRET_KEY=XXX
export APP_SETTINGS=config.DevelopementConfig
```

To start the Flask server call `server.py`.
```bash
python server.py
```
