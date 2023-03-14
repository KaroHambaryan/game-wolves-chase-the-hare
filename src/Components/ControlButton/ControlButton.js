
// import { useEffect } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getbarriersCoordinates } from '../../features/barrier/barrierSlice';
import { getBoardSize } from '../../features/boardSize/boardSizeSlice';
import { getHouseCoordinates } from '../../features/house/houseSlice';
import { getRabbitCoordinates, sendRabbitNewCoodinates} from '../../features/rabbit/rabbitSlice';
import { getWolvesCoordinates } from '../../features/wolves/wolvesSlice';
import controlButtonStyle from './ControlButton.module.css'

const ControlButton = ({ buttonName, actionName }) => {
	const dispatch = useDispatch();
	const wolves = useSelector(getWolvesCoordinates);
	const barriers = useSelector(getbarriersCoordinates);
	const house = useSelector(getHouseCoordinates);
	const rabbit = useSelector(getRabbitCoordinates);
	const size = useSelector(getBoardSize);
	const dataForRabbit = { wolves, barriers, house, rabbit, size };

	const еditRabbitCoordinates = () => {
		console.log("------------------");
		dispatch(sendRabbitNewCoodinates(actionName, dataForRabbit));
		console.log(dataForRabbit);
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