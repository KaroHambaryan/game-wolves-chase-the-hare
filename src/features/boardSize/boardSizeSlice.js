export function changeBoadSize(state = {}, action) {
	if (action.type === "Send_New_Board_Size") {
		return {
			boardSize: action.payload.boardSize,
		}
	}
	return state;
}

export const initialBoardSize = {
	boardSize: 5,
}

export function getBoardSize(state) {
	return state.boardSize;
}

export function sendNewBoardSize(value) {
	return {
		type: "Send_New_Board_Size",
		payload: {
			boardSize: value
		}
	}
}