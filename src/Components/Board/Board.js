import React  from 'react';

import Participants from '../Participants/Participants';
import Cell from '../Cell/Cell';
import useLoop from '../../Hooks/loop.hook';
import boardStyle from './Board.module.css';
import { useSelector } from 'react-redux';
import { getBoardSize } from '../../features/boardSize/boardSizeSlice';

const Board = () => {
	const boardSize = useSelector(getBoardSize)
	const createCells = useLoop();
	const borard = createCells(boardSize.boardSize)

	return <div className={`
	${boardStyle.wrapper}
	${boardStyle.wrapper_position}
	`}>
		{borard.map((row, i) => {
			let x = i
			return <div key={x}>
				{row.map((elem, j) => {
					let y = j
					return <Cell key={`${x + "" + y}`} />
				})}
			</div>
		})}
	<Participants/>
	</div>
}

export default React.memo(Board);