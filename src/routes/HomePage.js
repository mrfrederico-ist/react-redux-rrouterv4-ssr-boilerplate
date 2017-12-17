import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

const Container = styled.div`
	margin-top: 200px;
`

const pageHeader = () => (
	<Helmet>
		<title>Home</title>
		{/* Open Graph protocol - http://ogp.me/ */}
		<meta property="og:title" content="Home" />
	</Helmet>
)

const HomePage = () => (
	<Container className="center-align">
		{pageHeader()}
		<h3>Welcome</h3>
		<p>Check out these awesome features</p>
	</Container>
)

export default {
	component: HomePage,
}
