import { combineReducers, createStore } from 'redux';
import { rabbitCoordinatesReducer, initialRabitCoordinates } from '../features/rabitCoordinates/rabitCoordinatesSlice';
import { changeStartButtonStatus ,initialStatusStartButton } from '../features/startButtonStatus/startButtonStatusSlice';
import { initialboardSize, changeBoadSize } from '../features/boardSize/boardSizeSlice';

const store = createStore(combineReducers({
	rabitCoordinates: rabbitCoordinatesReducer,
	gameStatus: changeStartButtonStatus,
	boardSize:  changeBoadSize,
}), {
	rabitCoordinates: initialRabitCoordinates,
	// wolfCoordinates: initialWolfsCoordinates,
	gameStatus: initialStatusStartButton,
	boardSize: initialboardSize,
})

export default store;