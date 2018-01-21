import { OPEN_HOSPITAL } from '../actions/types';

export default function(state={}, action) {
	switch (action.type) {
		case OPEN_HOSPITAL:
			return action.payload;
		default:
			return state;
	}
}
