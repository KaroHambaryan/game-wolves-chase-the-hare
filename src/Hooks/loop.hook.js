

export default function useLoop() {

	const createCells = (size) => {
		const row = [];
		for (let i = 0; i < size; i++) {
			const newRow = [];
			for (let j = 0; j < size; j++) {
				newRow.push(0)
			}
			row.push(newRow);
		}
		return row;
	}

	function objectToArray(object) {
		const newArray = [];
		for (let element in object) {
			newArray.push(object[element]);
		}
		return newArray;
	}

	return {createCells, objectToArray}
}