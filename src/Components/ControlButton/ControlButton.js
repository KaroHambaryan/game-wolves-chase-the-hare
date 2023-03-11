
import { useDispatch } from 'react-redux';
import { sendRabbitNewCoodinates } from '../../features/rabbit/rabbitSlice';
import controlButtonStyle from './ControlButton.module.css'

const ControlButton = ({ buttonName, actionName }) => {
	const dispatch = useDispatch();

	const еditRabbitCoordinates = () => {
		dispatch(sendRabbitNewCoodinates(actionName))
	}

	return <>
		<button
			onClick={еditRabbitCoordinates}
			className={`
	${controlButtonStyle.size}
	`}>{buttonName}</button>
	</>
}

export default ControlButton;