


import { useSelector } from 'react-redux';
import { getRabitCoordinates } from '../../features/rabitCoordinates/rabitCoordinatesSlice';
import rabitStyle from './Rabit.module.css';

const Rabit = () => {
	const rabitCoordinates = useSelector(getRabitCoordinates)
	
	return <div
		style={{transform: `translate(${rabitCoordinates.x_Rabit}px, ${rabitCoordinates.y_Rabit}px)`}}
		className={`
	${rabitStyle.size}
	`}></div>
}

export default Rabit;