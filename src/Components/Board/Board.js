import Cell from '../Cell/Cell'
import boardStyle from './Board.module.css';

const Board = () => {
	return <div
		className={`
	${boardStyle.wrapper}
	`}>
		<Cell/>
	</div>
}

export default Board;