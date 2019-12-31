import { actions } from '../constants/actions'
import { longListFetch } from '../../api/longList'

export const fetchListAction = () => dispatch => {

	return longListFetch().then(async response => {
		if (response.status === 200) {
			const longListData = await response.json()

			dispatch({
				type: actions.FETCH_LIST,
				payload: longListData,
			})
		} else {
			console.log('Error: ', response.status)
		}
	})
}
