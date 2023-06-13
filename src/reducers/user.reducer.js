import {
	CREATE_USER,
	DELETE_USER,
	GET_ALL_USERS,
	GET_USER,
	UPDATE_USER,
} from '../actions/types';

import { CLEAR_DATA } from '../actions/types';

const initialState = {
	users: [],
	user: {},
	get_user_loading: true,
	get_users_loading: true,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_ALL_USERS:
			return { ...state, users: action.payload, get_users_loading: false };
		case CREATE_USER:
			return { ...state, user: action.payload };
		case GET_USER:
			return { ...state, user: action.payload, get_user_loading: false };
		case UPDATE_USER:
			return { ...state };
		case CLEAR_DATA:
			return {
				...state,
				users: action.payload,
				get_user_loading: true,
				get_users_loading: true,
			};
		case DELETE_USER:
			return { ...state };
		default:
			return state;
	}
};
