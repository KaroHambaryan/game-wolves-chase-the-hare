import { useSelector } from 'react-redux';
import { getStatusGame } from '../../features/startButtonStatus/startButtonStatusSlice';
import ОbstacleStyle from './Оbstacle.module.css';

const Оbstacle = () => {

	const statusButton = useSelector(getStatusGame);
	const { gameStatus } = statusButton;
	
	return <div
	style={{
		transform: `translate(
			${120}px, 
			${80}px
			)`,
			display: gameStatus ?'block' :  'none'
	}}
	className={`
${ОbstacleStyle.size}
`}></div>
}

export default Оbstacle;