export function changeWolvesCoordinates(state = {}, action) {
	if (action.type === "Send_Random_Wolves_Coordinates") {
		const [wolf1, wolf2, wolf3, wolf4, wolf5] = action.payload.arrayWithRandomCordinates;
		const size = action.payload.boardSize;
		if (size === 5) {
			return {
				wolf1,
				wolf2,
				wolf3,
			};
		} else if (size === 7) {
			return { wolf1, wolf2, wolf3, wolf4 }
		} else if (size === 10) {
			return { wolf1, wolf2, wolf3, wolf4, wolf5 }
		}
	}
	return state;
}

export const initialWolvesCoordinates = {}



export function getWolvesCoordinates(state) {
	return state.wolvesCoordinates;
}

export function sendWolvesRandomCoordinates(arrayWithRandomCordinates, boardSize) {
	return {
		type: "Send_Random_Wolves_Coordinates",
		payload: {
			arrayWithRandomCordinates,
			boardSize
		}
	}
}