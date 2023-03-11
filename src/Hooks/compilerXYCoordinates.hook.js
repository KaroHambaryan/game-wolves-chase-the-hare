

export default function useCompilerXYtoCSSCoordinates() {

	const getCSSCoordinates = (elemX, elemY) => {
		const oneCellPersent = 40;
		const cssCoordinates = {
			x: +elemX * oneCellPersent,
			y: +elemY * oneCellPersent
		};
		return cssCoordinates;
	}
	return getCSSCoordinates;
}