
export function changebarriersCoordinates(state = {}, action) {
	if (action.type === "Send_Barrier_Random_Coordinates") {
		const  [barrier1,barrier2,barrier3,barrier4] = action.payload.barriersRandomCoordinates;
		return {barrier1,barrier2,barrier3,barrier4}
	}
	return state
}

export const initialBarriersCoordinates = {
	barrier1: null,
	barrier2: null,
	barrier3: null,
	barrier4: null
}

export function getbarriersCoordinates(state) {
	return state.barriersCoordinates;
}

export function sendBarriersRandomCoordinates(barriersRandomCoordinates){
	return {
		type: "Send_Barrier_Random_Coordinates",
		payload: {
			barriersRandomCoordinates,
		}
	}
}


