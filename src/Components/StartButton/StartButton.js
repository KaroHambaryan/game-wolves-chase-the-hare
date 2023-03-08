

import { useSelector, useDispatch } from 'react-redux';
import {statusGameActionCreator, getStatusGame } from '../../features/startButtonStatus/startButtonStatusSlice';

import startButtonStyle from './StartButton.module.css';

const StartButton = () => {
	const dispatch = useDispatch();

	const changeGameStatus = () => {
		dispatch(statusGameActionCreator())
	}
	const gameStatus = useSelector(getStatusGame)
console.log(gameStatus);
		return <>
			<button
				onClick = {changeGameStatus}
				className={startButtonStyle}
			>
				Start
			</button>
		</>
	}


export default StartButton;