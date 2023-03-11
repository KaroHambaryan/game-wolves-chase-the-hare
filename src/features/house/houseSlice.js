export function changeHouseCoordinates(state = {}, action) {
	if (action.type === "Change_House_Random_Coordinates") {
		const [house] = action.payload.houseRandomCoordinatesArray;
		return { x:house.x, y:house.y };
	}
	return state;
}

export const initialHouseCoordinates = {
	x: null,
	y: null
};

export function getHouseCoordinates(state) {
	return state.houseCoordinates
}

export function sendHouseRandomCoodinates(houseRandomCoordinatesArray) {
	return {
		type: "Change_House_Random_Coordinates",
		payload: {
			houseRandomCoordinatesArray,
		}
	}
}