import React , { useState } from 'react';

import Rabit from '../Rabit/Rabit';
import Cell from '../Cell/Cell';
import useLoop from '../../Hooks/loop.hook';

import boardStyle from './Board.module.css';

const Board = () => {
	
	const createCells = useLoop();
	const [board] = useState(createCells(10))

	return <div className={`
	${boardStyle.wrapper}
	${boardStyle.wrapper_position}
	`}>
		{board.map((row, i) => {
			let x = i
			return <div key={x}>
				{row.map((elem, j) => {
					let y = j
					return <Cell key={`${x + "" + y}`}/>
				})}
			</div>
		})}
		<Rabit/>
	</div>
}

export default React.memo(Board) ;