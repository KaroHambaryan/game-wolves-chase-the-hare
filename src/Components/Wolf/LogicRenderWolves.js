
import { useSelector } from "react-redux";
import { getBoardSize } from "../../features/boardSize/boardSizeSlice";
import { getWolvesCoordinates } from "../../features/wolves/wolvesSlice";

import Wolf from "./Wolf";

const LogicRenderWolves = () => {
	const { boardSize } = useSelector(getBoardSize);
	const { wolf1, wolf2, wolf3, wolf4, wolf5 } = useSelector(getWolvesCoordinates);
	return (
		wolf1 && <>
			{boardSize === 5 ? <>
				<Wolf key={"w1"} prop={wolf1} />
				<Wolf key={"w2"} prop={wolf2} />
				<Wolf key={"w3"} prop={wolf3} />
			</> : boardSize === 7 ? <>
				<Wolf key={"w1"} prop={wolf1} />
				<Wolf key={"w2"} prop={wolf2} />
				<Wolf key={"w3"} prop={wolf3} />
				<Wolf key={"w4"} prop={wolf4} />
			</> : boardSize === 10 ? <>
				<Wolf key={"w1"} prop={wolf1} />
				<Wolf key={"w2"} prop={wolf2} />
				<Wolf key={"w3"} prop={wolf3} />
				<Wolf key={"w4"} prop={wolf4} />
				<Wolf key={"w5"} prop={wolf5} />
			</> : null}
		</>
	);
}

export default LogicRenderWolves;
