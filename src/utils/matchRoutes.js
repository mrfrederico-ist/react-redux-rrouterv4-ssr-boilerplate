import { matchRoutes } from 'react-router-config'

export default ({ routes, path, store }) =>
	Promise.all(
		matchRoutes(routes, path)
			.map(({ route }) => route.getRouteProps && route.getRouteProps(store))
			// Ensures that all promises are resolved
			.map(promise => {
				if (promise) {
					return new Promise(resolve => {
						promise.then(resolve).catch(resolve)
					})
				}
				return null
			}),
	)
