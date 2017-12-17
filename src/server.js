import express from 'express'
import proxy from 'express-http-proxy'
import axios from 'axios'

import { createStore, matchRoutes, serverRenderer } from './utils'

import routes from '../src/routes'

// Must be import in ./server.js
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const API_URL = 'http://react-ssr-api.herokuapp.com'

const server = express()
server
	.disable('x-powered-by')
	.use(
		'/api',
		proxy(API_URL, {
			// API specific
			proxyReqOptDecorator: opts => {
				opts.headers['x-forwarded-host'] = 'localhost:3000'
				return opts
			},
		}),
	)
	.use(express.static(process.env.RAZZLE_PUBLIC_DIR))
	.get('*', async (req, res) => {
		const axiosInstance = axios.create({
			baseURL: API_URL,
			headers: { cookie: req.get('cookie') || '' },
		})
		const store = createStore({ thunkExtraArgument: axiosInstance })

		// Find the routes to be rendered and fill in the store with data
		await matchRoutes({ routes, path: req.path, store })

		// Used to retrieve context information about the rendered route
		const context = {}
		const renderedApp = serverRenderer({
			path: req.path,
			store,
			context,
			assets,
		})

		if (context.url) {
			res.redirect(301, context.url)
		} else if (context.notFound) {
			res.status(404).send(renderedApp)
		} else {
			res.send(renderedApp)
		}
	})

export default server
