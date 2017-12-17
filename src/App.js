import React, { Component } from 'react'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import { fetchCurrentUser } from './actions/auth.actions'

import { Header } from './components'

export class App extends Component {
	componentDidMount() {
		this.props.fetchCurrentUser()
	}

	render() {
		return (
			<div>
				<Header />
				{renderRoutes(this.props.route.routes)}
			</div>
		)
	}
}

export default {
	component: connect(null, { fetchCurrentUser })(App),
	getRouteProps: store => store.dispatch(fetchCurrentUser()),
}
