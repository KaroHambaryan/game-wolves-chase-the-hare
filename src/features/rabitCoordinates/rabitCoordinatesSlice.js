// Reduser Rabit coordinates from control buttons block

export function rabbitCoordinatesReducer(state={}, action) {
	if (action.type === "up") {
		return {
				...state,
				y: state.y -= 1
			}
	} else if (action.type === "dw") {
		return  {
				...state,
				y: state.y += 1
			}
		
	} else if (action.type === "lf") {
		return {
				...state,
				x: state.x -= 1
			}
	} else if (action.type === "ri") {
		return {
				...state,
				x: state.x += 1
			}
	}
	return state;
}
// initial coordinates Rabit
export const initialRabitCoordinates = {
	x: foo(),
	y: 0
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

function foo() {
	return Math.floor(Math.random()*11)
}