import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = ({ auth }) => (
	<nav>
		<div className="nav-wrapper">
			<Link to="/" className="brand-logo left">
				React SSR
			</Link>
			<ul className="right">
				<li>
					<Link to="/users">Users</Link>
				</li>
				<li>
					<Link to="/admins">Admins</Link>
				</li>
				<li>
					{auth ? (
						<a href="/api/logout">Logout</a>
					) : (
						<a href="/api/auth/google">Login</a>
					)}
				</li>
			</ul>
		</div>
	</nav>
)

export default connect(state => ({
	auth: state.auth,
}))(Header)
