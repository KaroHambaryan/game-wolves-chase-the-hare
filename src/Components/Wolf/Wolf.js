import { useSelector } from 'react-redux';
import { getStatusGame } from '../../features/startButtonStatus/startButtonStatusSlice';
import wolfStyle from './Wolf.module.css';

const Wolf = () => {

	const statusButton = useSelector(getStatusGame);
	const { gameStatus } = statusButton;

	
	return <div
	style={{
		transform: `translate(
			${80}px, 
			${120}px
			)`,
			display: gameStatus ?'block' :  'none'
	}}
	className={`
${wolfStyle.size}
`}></div>
}

export default Wolf;