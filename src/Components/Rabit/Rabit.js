
import useCompilerCSSCoordinates from '../../Hooks/compilerCSSCoordinates.hook'
import { useSelector } from 'react-redux';
import { getRabitCoordinates } from '../../features/rabitCoordinates/rabitCoordinatesSlice';
import { getStatusGame } from '../../features/startButtonStatus/startButtonStatusSlice';
import rabitStyle from './Rabit.module.css';

const Rabit = () => {
	// game status
	const { gameStatus } = useSelector(getStatusGame);

	// Compiler costom hook
	const getCSSCoordinates = useCompilerCSSCoordinates();

	// rabit Coordinates
	const rabitCoordinates = useSelector(getRabitCoordinates);
	const rabitCSSCoordinates = getCSSCoordinates(rabitCoordinates.x, rabitCoordinates.y)

	return <div
		style={{
			transform: `translate(
				${rabitCSSCoordinates.x}px, 
				${rabitCSSCoordinates.y}px
				)`,
				display: gameStatus ?'block' : 'none'
		}}
		className={`
	${rabitStyle.size}
	`}></div>
}

export default Rabit;