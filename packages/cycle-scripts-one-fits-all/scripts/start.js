'use strict'
const spawn = require('cross-spawn');
const path = require('path');

require('dotenv').config({silent: true});
let env = Object.create( process.env );
env.NODE_ENV = 'development';

let bin = env.BIN || path.join(__dirname, '..', '..', '.bin');
const webpack = path.resolve(bin, 'webpack-dev-server');

let host = env.HOST || 'localhost';
let port = env.PORT || '3000';
spawn.sync(webpack, ['--config', path.join(__dirname, 'configs', 'webpack.config.js'), '--host', host, '--port', port], { env: env, stdio: 'inherit' });
