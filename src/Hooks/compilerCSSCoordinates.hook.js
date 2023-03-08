

export default function useCompilerCSSCoordinates() {

	const getCSSCoordinates = (x, y) => {
		const oneCellPersent = 40;
		const cssCoordinates = {
			_xCSS: +x * oneCellPersent,
			_yCSS: +y * oneCellPersent
		};
		return cssCoordinates;
	}
	return getCSSCoordinates;
}