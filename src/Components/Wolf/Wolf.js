
import { useSelector } from 'react-redux';
import { getStatusGame } from '../../features/startButtonStatus/startButtonStatusSlice';
import wolfStyle from './Wolf.module.css';

const Wolf = ({x, y}) => {
	const { gameStatus } = useSelector(getStatusGame);
	
	return <div
	style={{
		transform: `translate(
			${x}px, 
			${y}px
			)`,
			display: gameStatus ?'block' :  'none'
	}}
	className={`
${wolfStyle.size}
`}></div>
}

export default Wolf;