import useCoordinateEditing from '../../Hooks/compilerXYCoordinates.hook';
import { useSelector } from 'react-redux';
import { getGameStatus } from '../../features/startButton/startButtonSlice';
import wolfStyle from './Wolf.module.css';

const Wolf = ({ prop }) => {
	const { gameStatus } = useSelector(getGameStatus);
	const createCSSCoordinates = useCoordinateEditing();
	const wolf = prop && createCSSCoordinates(prop.x, prop.y);

	return prop && <div
		style={{
			transform: `translate(
			${wolf.x}px, 
			${wolf.y}px
			)`,
			display: gameStatus ? 'block' : 'none'
		}}
		className={`
${wolfStyle.size}
`}></div>
}

export default Wolf;