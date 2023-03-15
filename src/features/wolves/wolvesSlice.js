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

function nextWalk() {
	const start = {};
	const end = {};
	const closed_list = [];

	function createMatrix(end, boardSize) {
		const matrix = [];

		for (let i = 0; i < boardSize; i++) {
			const row = [];
			for (let j = 0; j < boardSize; j++) {
				let gx = Math.abs(end.x - i);
				let gy = Math.abs(end.y - j);
				let g = gx + gy
				let x = i;
				let y = j;
				const cell = { g, x, y };

				row.push(cell);
			}
			matrix.push(row);
		}
		return matrix;
	}

	function removeМatchWithMatrix(closed_list, matrix) {
		const newMatrix = matrix.flat();
		for (let i = 0; i < newMatrix.length; i++) {
			let ifInArray = closed_list.some((elem) => elem.x === newMatrix[i].x && elem.y === newMatrix[i].y)
			if (ifInArray) {
				newMatrix.splice(i,1)
			}
		}
		return newMatrix;
	}

	



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