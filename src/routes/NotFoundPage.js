import React from 'react'
import { Helmet } from 'react-helmet'

const pageHeader = () => (
	<Helmet>
		<title>Not Found</title>
	</Helmet>
)

const NotFoundPage = ({ staticContext = {} }) => {
	staticContext.notFound = true
	return (
		<div>
			{pageHeader()}
			<h2 className="center">Ooops, route not found</h2>
		</div>
	)
}

export default {
	component: NotFoundPage,
}
