// Reduser Rabbit coordinates from control buttons block
export function changeRabbitCoordinates(state = {}, action) {
	if (action.type === "up") {
		return {
			...state,
			y: state.y -= 1
		}
	} else if (action.type === "dw") {
		return {
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
	} else if (action.type === "Send_Rabbit_Random_Coordinates") {
		const [rabbit] = action.payload.rabbitRandomCoordinatesArray;
		return { x: rabbit.x, y: rabbit.y };
	}
	return state;
}
// initial coordinates Rabbit
export const initialRabbitCoordinates = {
	x: null,
	y: null
}
// callback fn useSelector for Rabbit
export function getRabbitCoordinates(state) {
	return state.rabbitCoordinates
}

// Action creator
export function sendRabbitNewCoodinates(actionType) {
	return {
		type: actionType,
	}
}

export function sendRabbitRandomCoodinates(rabbitRandomCoordinatesArray) {
	return {
		type: "Send_Rabbit_Random_Coordinates",
		payload: {
			rabbitRandomCoordinatesArray,
		}
	}
}
