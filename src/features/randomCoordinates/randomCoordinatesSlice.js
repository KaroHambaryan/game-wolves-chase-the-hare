export function changeRandomCoordinates(state = {}, action) {
	if (action.type === "Change_Random_Coordinates") {
		const participants = 11;
		const randomPositionsArray = generateRandomXYPositions(participants,action.payload.size)
		const { wolves, barriers, rabbit, house } = arrangeRandomCoordinates(randomPositionsArray);
		return { wolves, barriers, rabbit, house };
	}
	return state;
}

export const initialRandomCoordinates = {
	wolves: [],
	barriers: [],
	rabbit: [],
	house: []
};

export function getRandomCoordinates(state) {
	return state.randomCoordinates;
}

export function sendRandomCoodinates(size) {
	return {
		type: "Change_Random_Coordinates",
		payload: {
			size,
		}
	}
}

//---------------------------------------------------------

function generateRandomXYPositions(participants, boardSize) {
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

function arrangeRandomCoordinates(array) {
	const wolves = [];
	const barriers = [];
	const rabbit = [];
	const house = [];
	array.forEach((element, i) => {
		if (i <= 4) {
			wolves.push(element);
		} else if (i >= 5 && i <= 8) {
			barriers.push(element);
		} else if (i === 9) {
			rabbit.push(element)
		} else if (i === 10) {
			house.push(element)
		}
	})
	return { wolves, barriers, rabbit, house };
}