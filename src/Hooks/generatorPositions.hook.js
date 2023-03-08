export default function useGeneratePositions() {
	
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
	return generatePositions;
}