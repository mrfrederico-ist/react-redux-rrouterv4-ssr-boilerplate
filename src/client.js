import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'

import { createStore } from './utils'

import routes from './routes'

const axiosInstance = axios.create({ baseURL: '/api' })

export const store = createStore({
	initialState: window.INITIAL_STATE,
	thunkExtraArgument: axiosInstance,
})

if (typeof document !== 'undefined') {
	ReactDOM.hydrate(
		<Provider store={store}>
			<BrowserRouter>
				<div>{renderRoutes(routes)}</div>
			</BrowserRouter>
		</Provider>,
		document.getElementById('root'),
	)
}

if (module.hot) {
	module.hot.accept()
}
