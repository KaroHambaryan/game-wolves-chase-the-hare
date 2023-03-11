export function changeWolvesCoordinates(state = {}, action) {
	if (action.type === "Send_Random_Wolves_Coordinates") {
		const [wolf1,wolf2,wolf3,wolf4,wolf5 ] = action.payload.arrayWithRandomCordinates;
		return {
			wolf1,
			wolf2,
			wolf3,
			wolf4,
			wolf5
		};
	}
	return state;
}

export const initialWolvesCoordinates = {
	wolf1: null,
	wolf2: null,
	wolf3: null,
	wolf4: null,
	wolf5: null,
}



export function getWolvesCoordinates(state) {
	return state.wolvesCoordinates;
}

export function sendWolvesRandomCoordinates(arrayWithRandomCordinates) {
	return {
		type: "Send_Random_Wolves_Coordinates",
		payload: {
			arrayWithRandomCordinates,
		}
	}
}