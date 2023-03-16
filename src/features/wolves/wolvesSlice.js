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
	const boardSize = 0;
	const matrix = createMatrix(end, boardSize);
	const newMatrix = removeМatchWithMatrix(closed_list, matrix);
	const neighborsArray = createStartNeighbor(start, boardSize);
	const start_neighbor = searchStartNeighbor(newMatrix, neighborsArray);
	const min_coords = createCoordinate(start_neighbor);

	function createMatrix(end, boardSize) {
		const matrix = [];

		for (let i = 0; i < boardSize; i++) {
			const row = [];
			for (let j = 0; j < boardSize; j++) {
				let gx = Math.pow(Math.abs(end.x - i),2);
				let gy = Math.pow(Math.abs(end.y - j),2);
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
				newMatrix.splice(i, 1)
			}
		}
		return newMatrix;
	}

	function createStartNeighbor(start, boardSize) {
		const neighborsArray = [];
	
		if (start.y > 0) {
			let up_coordinates = { x: start.x, y: start.y - 1 };
			neighborsArray.push(up_coordinates);
		}
	
		if (start.y < boardSize - 1) {
			let down_coordinates = { x: start.x, y: start.y + 1 };
			neighborsArray.push(down_coordinates);
		}
	
		if (start.x < boardSize - 1) {
			let right_coordinates = { x: start.x + 1, y: start.y };
			neighborsArray.push(right_coordinates);
		}
	
		if (start.x > 0) {
			let left_coordinates = { x: start.x - 1, y: start.y };
			neighborsArray.push(left_coordinates);
		}
	
		return neighborsArray;
	}

	function searchStartNeighbor(newMatrix, neighborsArray) {
		const start_neighbor = [];
		for (let i = 0; i < newMatrix.length; i++) {
			let ifInArray = neighborsArray.some((elem) => elem.x === newMatrix[i].x && elem.y === newMatrix[i].y)
			if (ifInArray) {
				start_neighbor.push(newMatrix[i]);
			}
		}
		return start_neighbor;
	}

	function createCoordinate(start_neighbor) {
		let min = start_neighbor[0];
		for (let i = 0; i < start_neighbor.length; i++) {
			if (start_neighbor[i].g < min.g) {
				min = start_neighbor[i];
			}
			
		}
		return min;
	}

return min_coords

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