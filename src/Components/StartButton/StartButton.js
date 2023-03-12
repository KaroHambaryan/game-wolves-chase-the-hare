

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sendBarriersRandomCoordinates } from '../../features/barrier/barrierSlice';
import { getBoardSize } from '../../features/boardSize/boardSizeSlice';
import { sendHouseRandomCoodinates } from '../../features/house/houseSlice';
import { sendRabbitRandomCoodinates } from '../../features/rabbit/rabbitSlice';
import { getRandomCoordinates, sendRandomCoodinates } from '../../features/randomCoordinates/randomCoordinatesSlice';
import { getGameStatus, sendGameStatus } from '../../features/startButton/startButtonSlice';
import { sendWolvesRandomCoordinates } from '../../features/wolves/wolvesSlice';


import startButtonStyle from './StartButton.module.css';

const StartButton = () => {
	
	const dispatch = useDispatch();
	const { boardSize } = useSelector(getBoardSize);
	const { gameStatus } = useSelector(getGameStatus);


	const randomCoordinates  = useSelector(getRandomCoordinates);

	useEffect(() => {
		if (gameStatus) {
			dispatch(sendWolvesRandomCoordinates(randomCoordinates.wolves));
			dispatch(sendBarriersRandomCoordinates(randomCoordinates.barriers));
			dispatch(sendRabbitRandomCoodinates(randomCoordinates.rabbit));
			dispatch(sendHouseRandomCoodinates(randomCoordinates.house));
		}
	}, [randomCoordinates])

	const changeGameStatus = () => {
		dispatch(sendGameStatus(true));
		dispatch(sendRandomCoodinates(boardSize));
	}

	return <>
		<button
			onClick={changeGameStatus}
			className={startButtonStyle}
		>
			Start
		</button>
	</>
}

export default StartButton;