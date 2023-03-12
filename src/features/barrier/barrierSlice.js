
export function changebarriersCoordinates(state = {}, action) {
	if (action.type === "Send_Barrier_Random_Coordinates") {
		const  [barrier1,barrier2,barrier3,barrier4] = action.payload.barriersRandomCoordinates;
		const size = action.payload.boardSize;
		if (size === 5) {
			return {barrier1,barrier2};
		} else if (size === 7) {
			return {barrier1,barrier2,barrier3}
		} else if (size === 10) {
			return {barrier1,barrier2,barrier3,barrier4}
		}
	}
	return state
}

export const initialBarriersCoordinates = {};

export function getbarriersCoordinates(state) {
	return state.barriersCoordinates;
}

export function sendBarriersRandomCoordinates(barriersRandomCoordinates,boardSize){
	return {
		type: "Send_Barrier_Random_Coordinates",
		payload: {
			barriersRandomCoordinates,
			boardSize
		}
	}
}


