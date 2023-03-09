export function createWolfes(size) {
	const wolf = {
		x: null,
		y: null
	}
	let wolfsArray = []
	if (size === 5 ) {
		wolfsArray = createNewArray(wolf, 3);
	} else if (size === 7) {
		wolfsArray = createNewArray(wolf, 4);
	}else if (size === 10) {
		wolfsArray = createNewArray(wolf, 5);
	}
	return wolfsArray
}
console.log(createWolfes(5));

function createNewArray(element,quantity) {
	const newArray = []
	for (let i = 0; i < quantity; i++) {
		newArray.push(element)
	}
	return newArray
}