

export default function useCompilerXYtoCSSCoordinates() {

	const createCSSCoordinates = (elemX, elemY) => {
		const oneCellPersent = 40;
		const cssCoordinates = {
			x: +elemX * oneCellPersent,
			y: +elemY * oneCellPersent
		};
		return cssCoordinates;
	}

	
	return createCSSCoordinates;
}