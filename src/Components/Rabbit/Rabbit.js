

import { useSelector } from 'react-redux';
import { getRabbitCoordinates } from '../../features/rabbit/rabbitSlice';
import { getGameStatus } from '../../features/startButton/startButtonSlice';
import useCompilerXYtoCSSCoordinates from '../../Hooks/compilerXYCoordinates.hook';

import rabbitStyle from './Rabbit.module.css';

const Rabbit = () => {
	const { gameStatus } = useSelector(getGameStatus);
	const getCSSCoordinates = useCompilerXYtoCSSCoordinates();
	const rabbitCoordinates = useSelector(getRabbitCoordinates);

	let conditionalRendering = rabbitCoordinates.x !== null && rabbitCoordinates.x !== undefined;
	const { x, y } = conditionalRendering && getCSSCoordinates(rabbitCoordinates.x, rabbitCoordinates.y);
	conditionalRendering && console.log(x, y);
	return conditionalRendering && <div
		style={{
			transform: `translate(
				${x}px, 
				${y}px
				)`,
			display: gameStatus ? 'block' : 'none'
		}}
		className={`
	${rabbitStyle.size}
	`}></div>
}

export default Rabbit;