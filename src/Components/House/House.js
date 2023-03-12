

import { useSelector } from 'react-redux';
import { getHouseCoordinates } from '../../features/house/houseSlice';
import { getGameStatus } from '../../features/startButton/startButtonSlice';
import useCompilerXYtoCSSCoordinates from '../../Hooks/compilerXYCoordinates.hook';
import houseStyle from './House.module.css';

const House = () => {
	const { gameStatus } = useSelector(getGameStatus);
	const getCSSCoordinates = useCompilerXYtoCSSCoordinates();
	const houseCoordinates = useSelector(getHouseCoordinates);

	let conditionalRendering = houseCoordinates.x !== null && houseCoordinates.x !== undefined;
	const { x, y } = conditionalRendering && getCSSCoordinates(houseCoordinates.x, houseCoordinates.y);

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