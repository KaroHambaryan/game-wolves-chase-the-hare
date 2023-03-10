import { combineReducers, createStore } from 'redux';
import { rabbitCoordinatesReducer, initialRabitCoordinates } from '../features/rabitCoordinates/rabitCoordinatesSlice';
import { changeStartButtonStatus, initialStatusStartButton } from '../features/startButtonStatus/startButtonStatusSlice';
import { initialboardSize, changeBoadSize } from '../features/boardSize/boardSizeSlice';
import { initialWolsCoordinates, changeWolfsCoordinates } from '../features/wolfCoordinates/wolfCoordintesSlice';
import { initialRandomCoordinates, generateRandomCoordinate } from '../features/rangomCoordinates/randomCoordinatesSlice';
// import { initialObstacleCoordinates, changeObstacleCoordinates } from '../features/obstacle/obstacleSlice';

const store = createStore(combineReducers({
	gameStatus: changeStartButtonStatus,
	boardSize: changeBoadSize,
	rabitCoordinates: rabbitCoordinatesReducer,
	randomCoordinates: generateRandomCoordinate,
	wolfsCoordinates: changeWolfsCoordinates,
	// obstacleCoordinates: changeObstacleCoordinates,
}), {
	gameStatus: initialStatusStartButton,
	boardSize: initialboardSize,
	rabitCoordinates: initialRabitCoordinates,
	randomCoordinates: initialRandomCoordinates,
	wolfsCoordinates: initialWolsCoordinates,
	// obstacleCoordinates: initialObstacleCoordinates,
})

export default store;