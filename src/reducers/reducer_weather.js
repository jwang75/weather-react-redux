import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {
	// console.log('Action received', action);

	switch (action.type) {
		case FETCH_WEATHER:
			// return state.push(action.payload.data);   always return a new state without changing the old one
			return state.concat([action.payload.data]);
			// return [action.payload.data, ...state] //es6
	}

	return state;
}