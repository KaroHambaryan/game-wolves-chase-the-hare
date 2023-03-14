

import { useSelector } from 'react-redux';
import { getHouseCoordinates } from '../../features/house/houseSlice';
import { getGameStatus } from '../../features/startButton/startButtonSlice';
import useCoordinateEditing from '../../Hooks/compilerXYCoordinates.hook';
import houseStyle from './House.module.css';

const House = () => {
	const { gameStatus } = useSelector(getGameStatus);
	const createCSSCoordinates = useCoordinateEditing();
	const houseCoordinates = useSelector(getHouseCoordinates);

	let conditionalRendering = houseCoordinates.x !== null && houseCoordinates.x !== undefined;
	const { x, y } = conditionalRendering && createCSSCoordinates(houseCoordinates.x, houseCoordinates.y);

	return conditionalRendering && <div
		style={{
			transform: `translate(
				${x}px, 
				${y}px
				)`,
			display: gameStatus ? 'block' : 'none'
		}}
		className={`
	${houseStyle.size}
	`}></div>
}

export default House;