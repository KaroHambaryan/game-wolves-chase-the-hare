
import { useDispatch} from 'react-redux';
import { rabitActionCreator } from '../../features/rabitCoordinates/rabitCoordinatesSlice';
import controlButtonStyle from './ControlButton.module.css'

const ControlButton = ({ buttonName, actionName }) => {
	const dispatch = useDispatch();

	const еditRabbitCoordinates = () => {
		dispatch(rabitActionCreator(actionName))
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