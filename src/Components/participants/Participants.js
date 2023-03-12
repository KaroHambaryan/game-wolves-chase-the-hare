import Rabbit from "../Rabbit/Rabbit";
import LogicRenderWolves from "../Wolf/LogicRenderWolves";
import LogicRenderBarriers from '../Barrier/LogicRenderBarriers';
import House from "../House/House";

const Participants = () => {

	return <>
		<Rabbit />
		<LogicRenderWolves />
		<LogicRenderBarriers />
		<House/>
	</>;
}

export default Participants;