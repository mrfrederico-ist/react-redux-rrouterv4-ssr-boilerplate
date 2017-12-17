import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'

export default ({ initialState = {}, thunkExtraArgument }) =>
	createStore(
		reducers,
		initialState,
		applyMiddleware(thunk.withExtraArgument(thunkExtraArgument)),
	)
