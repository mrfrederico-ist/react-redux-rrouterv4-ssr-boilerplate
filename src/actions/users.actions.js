import { FETCH_USERS } from './types'

export const fetchUsers = () => async (dispatch, _, api) => {
	const res = await api.get('/users')

	dispatch({
		type: FETCH_USERS,
		payload: res,
	})
}
