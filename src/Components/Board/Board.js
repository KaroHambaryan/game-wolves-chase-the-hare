import React from 'react';

import Cell from '../Cell/Cell';
import useLoop from '../../Hooks/loop.hook';
import Participants from '../Participants/Participants';
import { useSelector } from 'react-redux';
import { getBoardSize } from '../../features/boardSize/boardSizeSlice';

import boardStyle from './Board.module.css';

const Board = () => {
	const {boardSize} = useSelector(getBoardSize);
	const createCells = useLoop();
	const board = createCells(boardSize);

	return <>
		{boardSize && <div className={`
	${boardStyle.wrapper}
	${boardStyle.wrapper_position}
	`}>
			{board.map((row, i) => {
				let x = i
				return <div key={x}>
					{row.map((elem, j) => {
						let y = j
						return <Cell key={`${x + "" + y}`} />
					})}
				</div>
			})}
			<Participants />
		</div>}
	</>
}

export default React.memo(Board);