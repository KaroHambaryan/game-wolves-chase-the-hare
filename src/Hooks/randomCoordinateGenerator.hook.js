
export default function useRandomCoordinateGenerator() {
		
	const getRandomCordinate = (boardSize) => {

		const randomCoordinate = Math.floor(Math.random() * boardSize)
		return randomCoordinate
	}

	return getRandomCordinate;
}