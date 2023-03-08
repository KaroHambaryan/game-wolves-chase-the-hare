// Reduser Rabit coordinates from control buttons block

export function rabbitCoordinatesReducer(state={}, action) {
	if (action.type === "up") {
		return {
				...state,
				y_Rabit: state.y_Rabit -= 40
			}
	} else if (action.type === "dw") {
		return  {
				...state,
				y_Rabit: state.y_Rabit += 40
			}
		
	} else if (action.type === "lf") {
		return {
				...state,
				x_Rabit: state.x_Rabit -= 40
			}
	} else if (action.type === "ri") {
		return {
				...state,
				x_Rabit: state.x_Rabit += 40
			}
	}
	
	return state;
}
// initial coordinates Rabit
export const initialRabitCoordinates = {
	x_Rabit: 0,
	y_Rabit: 0
}
// callback fn useSelector for Rabit
export function getRabitCoordinates(state) {
	return state.rabitCoordinates
}

// Action creator
export function rabitActionCreator(actionType) {
	return {
		type: actionType,
	}
}