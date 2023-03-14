

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBoardSize } from '../../features/boardSize/boardSizeSlice';
import { getRabbitCoordinates, sendRabbitTransition } from '../../features/rabbit/rabbitSlice';
import { getGameStatus } from '../../features/startButton/startButtonSlice';
import useCoordinateEditing from '../../Hooks/coordinateEditing.hook';

import rabbitStyle from './Rabbit.module.css';

const Rabbit = () => {
	const dispatch = useDispatch()
	const { gameStatus } = useSelector(getGameStatus);
	const createCSSCoordinates = useCoordinateEditing();
	const rabbit = useSelector(getRabbitCoordinates);
	const boardSize = useSelector(getBoardSize).boardSize;

	let conditionalRendering = rabbit.x !== null && rabbit.x !== undefined;
	const { x, y } = conditionalRendering && createCSSCoordinates(rabbit.x, rabbit.y);



	return conditionalRendering && <div
		style={{ transform:`translate(
				${x}px, 
				${y}px
				)`,
			display: gameStatus ? 'block' : 'none',
			// opacity: rabbit.y >= 5 ? "0" : "1",
		}}
		className={`
	${rabbitStyle.size}
	`}></div>
}

export default Rabbit;