import Wolf from "./Wolf";
import { useSelector } from "react-redux";
import { getBoardSize } from "../../features/boardSize/boardSizeSlice";

const LogicRenderWolves = () => {
	const { boardSize } = useSelector(getBoardSize);
	
	return (
		<>
			{boardSize === 5 ? <>
				<Wolf x={40} y={80} />
				<Wolf x={80} y={40} />
				<Wolf x={120} y={0} />
			</> : boardSize === 7 ? <>
				<Wolf x={40} y={80} />
				<Wolf x={80} y={40} />
				<Wolf x={120} y={0} />
				<Wolf x={200} y={200} />
			</> : boardSize === 10 ? <>
				<Wolf x={40} y={80} />
				<Wolf x={80} y={40} />
				<Wolf x={240} y={40} />
				<Wolf x={320} y={120} />
				<Wolf x={200} y={200} />
			</>: null}
		</>
	);
}

export default LogicRenderWolves;