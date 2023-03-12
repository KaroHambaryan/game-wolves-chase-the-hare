import { useSelector } from "react-redux";
import { getbarriersCoordinates } from "../../features/barrier/barrierSlice";
import useLoop from '../../Hooks/loop.hook'

import Barrier from "./Barrier";

const LogicRenderBarriers = () => {
	const loop = useLoop();
	const barriers = useSelector(getbarriersCoordinates);
	const barriersArray = loop.objectToArray(barriers);

	return (barriersArray[0] && <>
		{barriersArray.map((elem, i) => {
			return <Barrier key={`${i}`} prop={elem} />
		})}
			</>);
}

export default LogicRenderBarriers;
