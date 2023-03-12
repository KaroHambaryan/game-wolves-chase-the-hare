
import useCompilerXYtoCSSCoordinates from '../../Hooks/compilerXYCoordinates.hook';
import { useSelector } from 'react-redux';
import { getGameStatus } from '../../features/startButton/startButtonSlice';
import barrierStyle from './Barrier.module.css';

const Barrier = ({prop}) => {
	const { gameStatus } = useSelector(getGameStatus);
	const getCSSCoordinates = useCompilerXYtoCSSCoordinates();
	const barrier = prop && getCSSCoordinates(prop.x, prop.y);

	return prop && <div
		style={{
			transform: `translate(
			${barrier.x}px, 
			${barrier.y}px
			)`,
			display: gameStatus ? 'block' : 'none'
		}}
		className={`
${barrierStyle.size}
`}></div>
}

export default Barrier;