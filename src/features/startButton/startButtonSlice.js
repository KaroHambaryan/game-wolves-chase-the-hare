// Start button Reducer
export function changeGameStatus(state = {}, action) {
	if (action.type === "Send_New_Game_Status") {
		return {
			gameStatus: action.payload.status,
		};
	}
	return state;
}
// Initial status Start Button
export const initialGameStatus = {
	gameStatus: false,
}

// for useSelection Start Button
export function getGameStatus(state) {
	return state.gameStatus;
}

// Action Creator
export function sendGameStatus(status) {
	return {
		type: "Send_New_Game_Status",
		payload: {
			status,
		}
	}
}
