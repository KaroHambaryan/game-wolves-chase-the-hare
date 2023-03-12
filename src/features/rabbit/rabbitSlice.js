// Reduser Rabbit coordinates from control buttons block
export function changeRabbitCoordinates(state = {}, action) {
	var ifChangeRabbitCoordinates = false;
	const buttonsName = ["up", "down", "left", "right"];
	const ifDuttonDown = buttonsName.includes(action.type);

	if (ifDuttonDown) {
		const { wolves, barriers, house, rabbit, size } = action.payload.dataForRabbit;
			let ifWolves = includesXYInObject(wolves, rabbit,action.type);
			let ifBarriers = includesXYInObject(barriers, rabbit, action.type);
		ifChangeRabbitCoordinates = ifWolves || ifBarriers
	}
	if (action.type === "up" && !ifChangeRabbitCoordinates) {
		return {
			...state,
			y: state.y - 1
		}
	} else if (action.type === "down" && !ifChangeRabbitCoordinates) {
		return {
			...state,
			y: state.y + 1
		}

	} else if (action.type === "left" && !ifChangeRabbitCoordinates) {
		return {
			...state,
			x: state.x - 1
		}
	} else if (action.type === "right" && !ifChangeRabbitCoordinates) {
		return {
			...state,
			x: state.x + 1
		}
	} else if (action.type === "Send_Rabbit_Random_Coordinates") {
		const [rabbit] = action.payload.rabbitRandomCoordinatesArray;
		return { x: rabbit.x, y: rabbit.y };
	}
	return state;
}
// initial coordinates Rabbit
export const initialRabbitCoordinates = {}
// callback fn useSelector for Rabbit
export function getRabbitCoordinates(state) {
	return state.rabbitCoordinates
}

// Action creator
export function sendRabbitNewCoodinates(actionType, dataForRabbit) {
	return {
		type: actionType,
		payload: {
			dataForRabbit,
		}
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

//=================================================
function includesXYInObject(comparableObject, targetObject, actionType) {
	let newArray = [];
	let currentX = targetObject.x;
	let currentY = targetObject.y;

	for (let element in comparableObject) {
		newArray.push(comparableObject[element]);
	}
	
	function includesXYCoordinates(arrayOfObject, x, y) {
		return arrayOfObject.some((elem, i)=> elem.x === x && elem.y === y)
	}
	if (actionType === "up") {
		let futureY = currentY - 1;
		return includesXYCoordinates(newArray, currentX, futureY);
	} else if (actionType === "down") {
		let futureY = currentY + 1;
		return includesXYCoordinates(newArray, currentX, futureY);
	} else if (actionType === "left") {
		let futureX = currentX - 1;
		return includesXYCoordinates(newArray, futureX, currentY);
	} else if (actionType === "right") {
		let futureX = currentX + 1;
		return includesXYCoordinates(newArray, futureX, currentY);
	}

}
