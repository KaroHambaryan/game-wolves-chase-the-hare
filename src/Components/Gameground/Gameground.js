import Board from '../Board/Board';
import BoardSizeSelecton from '../BoardSizeSelecton/BoardSizeSelecton'
import StartButton from '../StartButton/StartButton';
import ControlButtonsBlock from '../ControlButtonsBlock/ControlButtonsBlock';


import gamegroundStyle from './Gameground.module.css';



const Gameground = () => {

	return <div className={`
	${gamegroundStyle.wrapper}
	${gamegroundStyle.flexible_centering_column}
	`}>
		<BoardSizeSelecton />
		<StartButton />
		<Board/>
		<ControlButtonsBlock />
	</div>
}

export default Gameground;