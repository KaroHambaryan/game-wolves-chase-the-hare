// Start button Reducer
export function changeStartButtonStatus(state ={}, action) {
	if (action.type === "game_Status") {
		return {
			gameStatus: !state.gameStatus,
		};
	}
	return state;
}
// Initial status Start Button
export const initialStatusStartButton = {
	gameStatus: false
}

// for useSelection Start Button
export function getStatusGame(state) {
	return state.gameStatus;
}

// Action Creator
export function statusGameActionCreator() {
	return {
		type: "game_Status"
	}
}
