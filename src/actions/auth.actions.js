import { FETCH_CURRENT_USERS } from './types'

export const fetchCurrentUser = () => async (dispatch, _, api) => {
	const res = await api.get('/current_user')

	dispatch({
		type: FETCH_CURRENT_USERS,
		payload: res,
	})
}
