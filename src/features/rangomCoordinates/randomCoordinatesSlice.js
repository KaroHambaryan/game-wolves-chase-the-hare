
export function generateRandomCoordinate(state = {}, action) {
	if (action.type === "random_coordinates") {
		return {
			randomCoordinates: generatePositions(11, action.payload.boardSize)
		}
	}
	
	return state;
}

export const initialRandomCoordinates = {
	randomCoordinates: generatePositions(11,5),
}

export function getRandomCoordinates(state) {
	return state.randomCoordinates;
}

export function randomActonCreator(value) {
	return {
		type: "random_coordinates",
		payload: {
			boardSize: value
		}
	}
}


function generatePositions(participants, boardSize) {
    const newPositions = [];
    while (newPositions.length < participants) {
      const x = Math.floor(Math.random() * boardSize);
      const y = Math.floor(Math.random() * boardSize);
      const pos = { x, y };
      if (!newPositions.some((p) => p.x === x && p.y === y)) {
        newPositions.push(pos);
      }
    }
    return newPositions;
}
