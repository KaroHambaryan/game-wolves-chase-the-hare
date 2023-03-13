// Reduser Rabbit coordinates from control buttons block
export function changeRabbitCoordinates(state = {}, action) {
	var ifChangeRabbitCoordinates = false;
	const buttonsName = ["up", "down", "left", "right"];
	const ifDuttonDown = buttonsName.includes(action.type);

	if (ifDuttonDown) {
		const { wolves, barriers, house, rabbit, size } = action.payload.dataForRabbit;

		const ifOutsideOrNot = ifNextStepsMatch(checkOutsideOrNot, [rabbit, size.boardSize, action.type]);
		const ifTransition = ifOutsideOrNot && ifNextStepsMatch(checkFuturePosition, [rabbit, size.boardSize, action.type, action.payload.dataForRabbit]);

		const ifWolves = includesXYInObject(wolves, ifNextStepsMatch, toCompareXYInArray, [rabbit, house, action.type]);
		const ifBarriers = includesXYInObject(barriers, ifNextStepsMatch, toCompareXYInArray, [rabbit, house, action.type]);
		const ifHouse = ifNextStepsMatch(toCompareXYInObject, [rabbit, house, action.type]);
		
		ifChangeRabbitCoordinates = ifWolves || ifBarriers || ifHouse || ifTransition
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
function includesXYInObject(comparableObject, checkTheNextStep, searchInCheckFN, dependArray) {
	let newArray = [];

	for (let element in comparableObject) {
		newArray.push(comparableObject[element]);
	}

	dependArray.splice(1, 1, newArray);

	return checkTheNextStep(searchInCheckFN, dependArray)
}

function ifNextStepsMatch(searchFn, dependArray) {
	let [targetObject, comparedObject, actionType, payload] = dependArray;

	let currentX = targetObject.x;
	let currentY = targetObject.y;

	if (actionType === "up") {
		let futureY = currentY - 1;

		return searchFn(comparedObject, currentX, futureY, payload, actionType);

	} else if (actionType === "down") {
		let futureY = currentY + 1;

		return searchFn(comparedObject, currentX, futureY, payload, actionType);

	} else if (actionType === "left") {
		let futureX = currentX - 1;

		return searchFn(comparedObject, futureX, currentY, payload, actionType);

	} else if (actionType === "right") {
		let futureX = currentX + 1;

		return searchFn(comparedObject, futureX, currentY, payload, actionType);
	}
}

function toCompareXYInArray(arrayOfObject, currentX, currentY) {
	return arrayOfObject.some((elem) => elem.x === currentX && elem.y === currentY)
}

function toCompareXYInObject(copmObj, currentX, currentY) {
	return copmObj.x === currentX && copmObj.y === currentY;
}

function checkOutsideOrNot(boardSize, currentX, currentY) {
	if (currentX === boardSize || currentY === boardSize) {
		return true
	} else if (currentX === -1 || currentY === -1) {
		return true
	} else {
		return false
	}
}

function checkFuturePosition(boardSize, currentX, currentY, payload, actionType) {
	const newPayload = { ...payload };
	let { x, y } = newPayload.rabbit;

	if (currentX === boardSize) {
		x = currentX - (boardSize + 1);
		newPayload.rabbit = { x, y };

		return checkTransition(newPayload, actionType);

	} else if (currentY === boardSize) {
		y = currentY - (boardSize + 1);
		newPayload.rabbit = { x, y };

		return checkTransition(newPayload, actionType);

	} else if (currentX === -1) {
		x = currentX + (boardSize + 1);
		newPayload.rabbit = { x, y };

		return checkTransition(newPayload, actionType);

	} else if (currentY === -1) {
		y = currentY + (boardSize + 1);
		newPayload.rabbit = { x, y };

		return checkTransition(newPayload, actionType);

	}

}

function checkTransition(newPayload, actionType) {
	const { wolves, barriers, house, rabbit } = newPayload;

	const ifWolves = includesXYInObject(wolves, ifNextStepsMatch, toCompareXYInArray, [rabbit, house, actionType]);
	const ifBarriers = includesXYInObject(barriers, ifNextStepsMatch, toCompareXYInArray, [rabbit, house, actionType]);
	const ifHouse = ifNextStepsMatch(toCompareXYInObject, [rabbit, house, actionType]);

	return ifWolves || ifBarriers || ifHouse
}