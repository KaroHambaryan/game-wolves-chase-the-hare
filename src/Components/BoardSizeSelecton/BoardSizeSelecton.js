

import { useDispatch} from 'react-redux';
import { sendNewBoardSize } from '../../features/boardSize/boardSizeSlice';
import { changeButtonStatusFromSelect } from '../../features/button/buttonSlice';
import { sendGameStatus } from '../../features/startButton/startButtonSlice';

import boardSizeSelectonStyle from './BoardSizeSelecton.module.css';



const BoardSizeSelecton = () => {
	const dispatch = useDispatch();

	const changeSizeBoard = (event) => {
		dispatch(sendGameStatus(false));
		dispatch(sendNewBoardSize(+event.target.value));
		dispatch(changeButtonStatusFromSelect());
	};


	return <>
		<select
			onChange={changeSizeBoard}
			name='boardSizeSelecton'
			className={boardSizeSelectonStyle}>
			<option value="5">5x5</option>
			<option value="7">7x7</option>
			<option value="10">10x10</option>
		</select>
	</>
}

export default BoardSizeSelecton;