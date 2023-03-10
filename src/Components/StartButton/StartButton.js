

import { useDispatch, useSelector } from 'react-redux';
import { statusGameActionCreator, getStatusGame } from '../../features/startButtonStatus/startButtonStatusSlice';
import { getBoardSize } from '../../features/boardSize/boardSizeSlice';
import { getRandomCoordinates, randomActonCreator } from '../../features/rangomCoordinates/randomCoordinatesSlice';
import { getWolfsState, wolfsAction } from '../../features/wolfCoordinates/wolfCoordintesSlice';


import startButtonStyle from './StartButton.module.css';

const StartButton = () => {
	const { gameStatus } = useSelector(getStatusGame);
	const { boardSize } = useSelector(getBoardSize);
	const { randomCoordinates } = useSelector(getRandomCoordinates);
	const wolfsCoordinates = useSelector(getWolfsState);

	const dispatch = useDispatch();

	const changeGameStatus = () => {
		dispatch(statusGameActionCreator());
		dispatch(randomActonCreator(boardSize))
		dispatch(wolfsAction(wolfsCoordinates, randomCoordinates, boardSize, gameStatus))
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