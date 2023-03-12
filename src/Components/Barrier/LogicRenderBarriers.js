import { useSelector } from "react-redux";
import { getbarriersCoordinates } from "../../features/barrier/barrierSlice";
import { getBoardSize } from "../../features/boardSize/boardSizeSlice";


import Barrier from "./Barrier";

const LogicRenderBarriers = () => {
	const { boardSize } = useSelector(getBoardSize);
	const {barrier1,barrier2,barrier3,barrier4} = useSelector(getbarriersCoordinates);
	return (
		barrier1 && <>
			{boardSize === 5 ? <>
				<Barrier key={"b1"} prop={barrier1} />
				<Barrier key={"b2"} prop={barrier2} />
			</> : boardSize === 7 ? <>
				<Barrier key={"b1"} prop={barrier1} />
				<Barrier key={"b2"} prop={barrier2} />
				<Barrier key={"b3"} prop={barrier3} />

			</> : boardSize === 10 ? <>
				<Barrier key={"b1"} prop={barrier1} />
				<Barrier key={"b2"} prop={barrier2} />
				<Barrier key={"b3"} prop={barrier3} />
				<Barrier key={"b4"} prop={barrier4} />
			</> : null}
		</>
	);
}

export default LogicRenderBarriers;
