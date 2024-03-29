import { combineReducers, createStore } from 'redux';
import { initialGameStatus, changeGameStatus } from '../features/startButton/startButtonSlice';
import { initialBoardSize, changeBoadSize } from '../features/boardSize/boardSizeSlice';
import { initialRandomCoordinates, changeRandomCoordinates } from '../features/randomCoordinates/randomCoordinatesSlice';
import { initialHouseCoordinates, changeHouseCoordinates } from '../features/house/houseSlice';
import { initialBarriersCoordinates, changebarriersCoordinates } from '../features/barrier/barrierSlice';
import { initialRabbitCoordinates, changeRabbitCoordinates } from '../features/rabbit/rabbitSlice';
import { initialWolvesCoordinates, changeWolvesCoordinates } from '../features/wolves/wolvesSlice';
import { checkButtonStatus, initialButtonStatus } from '../features/button/buttonSlice';

const store = createStore(combineReducers({
	gameStatus: changeGameStatus,
	boardSize: changeBoadSize,
	randomCoordinates: changeRandomCoordinates,
	houseCoordinates: changeHouseCoordinates,
	barriersCoordinates: changebarriersCoordinates,
	rabbitCoordinates: changeRabbitCoordinates,
	wolvesCoordinates: changeWolvesCoordinates,
	button: checkButtonStatus
}), {
	gameStatus: initialGameStatus,
	boardSize: initialBoardSize,
	randomCoordinates: initialRandomCoordinates,
	houseCoordinates: initialHouseCoordinates,
	barriersCoordinates: initialBarriersCoordinates,
	rabbitCoordinates: initialRabbitCoordinates,
	wolvesCoordinates: initialWolvesCoordinates,
	button: initialButtonStatus
})

export default store;