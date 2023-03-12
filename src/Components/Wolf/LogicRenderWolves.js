
import { useSelector } from "react-redux";
import { getWolvesCoordinates } from "../../features/wolves/wolvesSlice";
import useLoop from "../../Hooks/loop.hook";

import Wolf from "./Wolf";

const LogicRenderWolves = () => {
	const loop = useLoop()
	const wolves = useSelector(getWolvesCoordinates);
	const wolvesArray = loop.objectToArray(wolves)

	return (
		wolvesArray[0] && 	<>
		{wolvesArray.map((elem, i) => {
			return <Wolf key={`${i}`} prop={elem} />
		})}
	</>
	
	);
}

export default LogicRenderWolves;
