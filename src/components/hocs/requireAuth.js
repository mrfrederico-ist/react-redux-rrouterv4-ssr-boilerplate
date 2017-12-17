import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

const requireAuth = WrappedComponent => {
	class RequireAuth extends Component {
		render() {
			switch (this.props.auth) {
				case null:
					return <div>Loading...</div>
				case false:
					return <Redirect to="/" />
				default:
					return <WrappedComponent {...this.props} />
			}
		}
	}

	return connect(state => ({
		auth: state.auth,
	}))(RequireAuth)
}

export default requireAuth
