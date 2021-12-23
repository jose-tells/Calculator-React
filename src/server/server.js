/* eslint-disable global-require */
import React from 'react';
import express from 'express';
import webpack from 'webpack';
import { dom } from '@fortawesome/fontawesome-svg-core';
// React-Dom-server
import { renderToString } from 'react-dom/server';
// React-router
import { StaticRouter } from 'react-router';
// Helmet middleware
import helmet from 'helmet';
// Render-routes
import { renderRoutes } from 'react-router-config';
// React-redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// dotenv config
import config from './config';
import reducer from '../frontend/reducers';
import serverRoutes from '../frontend/routes/serverRoutes';
import initialState from '../frontend/initialState';
// Get Manifest
import getManifest from './getManifest';

const { env, port } = config;
const app = express();

if (env === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    publicPath: webpackConfig.output.publicPath,
  };
  app.use(webpackDevMiddleware(compiler, serverConfig)); // app.use() or in default express.use() is a middleware...
  app.use(webpackHotMiddleware(compiler)); // ...which is called everytime a request is sent to the server
} else {
  app.use(express.static(`${__dirname}/public`));
  app.use((req, res, next) => {
    if (!req.hashManifest) {
      req.hashManifest = getManifest();
    }
    next();
  });
  app.use(helmet({
    contentSecurityPolicy: false,
  }));
  app.use((req, res, next) => {
    res.setHeader('content-security-policy-report-only', "base-uri 'self'; connect-src 'self'; default-src 'self'; font-src 'self' https://fonts.gstatic.com; frame-src 'self'; img-src 'self'; manifest-src 'self'; media-src 'self'; object-src 'none'; report-uri https://61c3a1cdb122e1ebfdf74f0d.endpoint.csper.io/; script-src 'report-sample' 'self'; style-src 'report-sample' 'self' https://fonts.googleapis.com; worker-src 'none';");
    next();
  });
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendor.js';

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href=${mainStyles} type="text/css"/>
  <style type="text/css">${dom.css()}</style>
      <title>Calculator</title>
      </head>
      <body>
      <div id="app">${html}</div>
      <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c',
  )}
    </script>
    <script src=${mainBuild} type="text/javascript"></script>
    <script src=${vendorBuild} type="text/javascript"></script>
    </body>
    </html>
  `;
};

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState);
  const preloadedState = store.getState();
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>,
  );

  res.send(setResponse(html, preloadedState, req.hashManifest));
};

app.get('*', renderApp);

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`Server running on http://localhost:${port}`);
});
