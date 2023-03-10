// import { initialRandomCoordinates } from "../rangomCoordinates/randomCoordinatesSlice"

// const coordinatesArray = initialRandomCoordinates.randomCoordinates
export function changeWolfsCoordinates(state = {}, action) {
	if (action.type === "change_wolf") {
		const wolfsObject = createNewObject(action.payload.wolfs, action.payload.coordAray, action.payload.size);
		console.log(action.payload.wolfs, "action");
		return wolfsObject;
	}
	return state;
}

export const initialWolsCoordinates = {
	wolf1: { x: null, y: null },
	wolf2: { x: null, y: null },
	wolf3: { x: null, y: null },
	wolf4: { x: null, y: null },
	wolf5: { x: null, y: null },
}
// createNewObject(wolfs, coordinatesArray, 5);


export function getWolfsState(state) {
	return state.wolfsCoordinates;
}

export function wolfsAction(wolfsObject, coordinatesArray, boardSize, status) {
	return {
		type: "change_wolf",
		payload: {
			wolfs: wolfsObject,
			coordAray: coordinatesArray,
			size: boardSize,
			status
		}
	}
}



export function createNewObject(object, array, length) {
	let i = 0;
	for (let elem in object) {
		if (i <= length) {
			object[elem] = array[i];

		} if (i > length) {
			break
		}
		i++
	}
	// console.log(array, "createFN");
	return object
}