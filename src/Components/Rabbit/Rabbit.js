import { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { getbarriersCoordinates } from '../../features/barrier/barrierSlice';
import { getBoardSize } from '../../features/boardSize/boardSizeSlice';
import { getButtonStatus } from '../../features/button/buttonSlice';
import { getHouseCoordinates } from '../../features/house/houseSlice';
import { getRabbitCoordinates} from '../../features/rabbit/rabbitSlice';
import { getGameStatus } from '../../features/startButton/startButtonSlice';
import { getWolvesCoordinates, startNextWalk } from '../../features/wolves/wolvesSlice';
import useCoordinateEditing from '../../Hooks/coordinateEditing.hook';

import rabbitStyle from './Rabbit.module.css';

const Rabbit = () => {

	const dispatch = useDispatch()
	const { gameStatus } = useSelector(getGameStatus);
	const{ button }= useSelector(getButtonStatus);
	const rabbit = useSelector(getRabbitCoordinates);
	const wolves = useSelector(getWolvesCoordinates);
	const barriers = useSelector(getbarriersCoordinates);
	const house = useSelector(getHouseCoordinates);
	const size = useSelector(getBoardSize);
	const dataForWolves = { rabbit, house, wolves, barriers, size };

	const createCSSCoordinates = useCoordinateEditing();
	let conditionalRendering = rabbit.x !== null && rabbit.x !== undefined;
	const { x, y } = conditionalRendering && createCSSCoordinates(rabbit.x, rabbit.y);
	useEffect(() => {
		if (button && gameStatus) {
			dispatch(startNextWalk(dataForWolves));
		};
	},[rabbit.x, rabbit.y])


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