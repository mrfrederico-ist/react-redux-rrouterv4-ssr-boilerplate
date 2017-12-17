import React from 'react'
import { Helmet } from 'react-helmet'

const pageHeader = () => (
	<Helmet>
		<title>Home</title>
		{/* Open Graph protocol - http://ogp.me/ */}
		<meta property="og:title" content="Home" />
	</Helmet>
)

const HomePage = () => (
	<div className="center-align" style={{ marginTop: '200px' }}>
		{pageHeader()}
		<h3>Welcome</h3>
		<p>Check out these awesome features</p>
	</div>
)

export default {
	component: HomePage,
}
