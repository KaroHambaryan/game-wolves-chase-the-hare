import Board from '../Board/Board';
import BoardSizeSelecton from '../BoardSizeSelecton/BoardSizeSelecton'
import StartButton from '../StartButton/StartButton';

import gamegroundStyle from './Gameground.module.css';


const Gameground = () => {
	return <div className={`
	${gamegroundStyle.wrapper}
	${gamegroundStyle.flexible_centering_column}
	`}>

		<StartButton />
		<Board />
		<BoardSizeSelecton />
		
	</div>
}

export default Gameground;