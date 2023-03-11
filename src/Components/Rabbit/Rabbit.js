

import { useSelector } from 'react-redux';
import { getGameStatus } from '../../features/startButton/startButtonSlice';

import rabbitStyle from './Rabbit.module.css';

const Rabbit = () => {
	const { gameStatus } = useSelector(getGameStatus);


	return <div
		style={{
			transform: `translate(
				${40}px, 
				${120}px
				)`,
			display: gameStatus ? 'block' : 'none'
		}}
		className={`
	${rabbitStyle.size}
	`}></div>
}

export default Rabbit;