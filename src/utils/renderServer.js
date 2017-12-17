import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'
import serialize from 'serialize-javascript'

import routes from '../app/routes'

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const render = ({ path, store, context }) => {
	const markup = renderToString(
		<Provider store={store}>
			<StaticRouter location={path} context={context}>
				<div>{renderRoutes(routes)}</div>
			</StaticRouter>
		</Provider>,
	)

	const helmet = Helmet.renderStatic()

	return `
    <!doctype html>
    <html lang="">
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <meta charSet='utf-8' />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
      </head>
      <body>
        <div id="root">${markup}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        ${
					process.env.NODE_ENV === 'production'
						? `<script src="${assets.client.js}" defer></script>`
						: `<script src="${assets.client.js}" defer crossorigin></script>`
				}
      </body>
    </html>
  `
}

export default render
