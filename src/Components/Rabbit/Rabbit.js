import {  useSelector } from 'react-redux';
import { getRabbitCoordinates} from '../../features/rabbit/rabbitSlice';
import { getGameStatus } from '../../features/startButton/startButtonSlice';
import useCoordinateEditing from '../../Hooks/coordinateEditing.hook';

import rabbitStyle from './Rabbit.module.css';

const Rabbit = () => {

	const { gameStatus } = useSelector(getGameStatus);
	const createCSSCoordinates = useCoordinateEditing();
	const rabbit = useSelector(getRabbitCoordinates);


	let conditionalRendering = rabbit.x !== null && rabbit.x !== undefined;
	const { x, y } = conditionalRendering && createCSSCoordinates(rabbit.x, rabbit.y);



	return conditionalRendering && <div
		style={{ transform:`translate(
				${x}px, 
				${y}px
				)`,
			display: gameStatus ? 'block' : 'none',
		}}
		className={`
	${rabbitStyle.size}
	`}></div>
}

export default Rabbit;