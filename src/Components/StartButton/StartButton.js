

import { useDispatch } from 'react-redux';
import {statusGameActionCreator } from '../../features/startButtonStatus/startButtonStatusSlice';

import startButtonStyle from './StartButton.module.css';

const StartButton = () => {
	const dispatch = useDispatch();

	const changeGameStatus = () => {
		dispatch(statusGameActionCreator())
	}


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