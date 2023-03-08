export function changeBoadSize(state={},action){
	if (action.type === "board_size") {
		return {
			boardSize: action.payload.boardSize,
			status: state.gameStatus
		}
	}
	return state;
}

export const initialboardSize = {
	boardSize: 5
}

export function getBoardSize(state) {
	return state.boardSize;
}

export function boardSizeActionCreater(value) {
	return {
		type: "board_size",
		payload: {
			boardSize: value
		}
	}
}