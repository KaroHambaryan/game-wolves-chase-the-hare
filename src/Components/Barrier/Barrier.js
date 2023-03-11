
import { useSelector } from 'react-redux';
import { getGameStatus } from '../../features/startButton/startButtonSlice';

import barrierStyle from './Barrier.module.css';

const Barrier = () => {
	const { gameStatus } = useSelector(getGameStatus);
	return <div
		style={{
			transform: `translate(
			${120}px, 
			${80}px
			)`,
			display: gameStatus ? 'block' : 'none'
		}}
		className={`
${barrierStyle.size}
`}></div>
}

export default Barrier;