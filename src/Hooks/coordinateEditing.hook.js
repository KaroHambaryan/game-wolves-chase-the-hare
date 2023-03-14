

export default function useCoordinateEditing() {

	const createCSSCoordinates = (elemX, elemY) => {
		const oneCellPersent = 40;
		const cssCoordinates = {
			x: +elemX * oneCellPersent,
			y: +elemY * oneCellPersent
		};
		return cssCoordinates;
	}

	// function checkCoordinatesMatch(elemX, elemY) {
		
	// }


	return createCSSCoordinates;
}