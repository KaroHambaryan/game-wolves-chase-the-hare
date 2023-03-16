export function checkButtonStatus(state={}, action) {
	if (action.type === "Clicked_Start_Button") {
		return {
			button: false,
		}
	} else if (action.type === "Change_Select_Button") {
		return {
			button: false,
		}
	} else if (action.type === "Clicked_Control_Button") {
		return {
			button: true,
		}
	}
	return state
}

export const initialButtonStatus = {
	button: false,
}

export function getButtonStatus(state) {
	return state.button;	
}

export function changeButtonStatusFromStart() {
	return {
		type: "Clicked_Start_Button",
	}
}

export function changeButtonStatusFromSelect() {
	return {
		type: "Change_Select_Button",
	}
}

export function changeButtonStatusFromButton() {
	return {
		type: "Clicked_Control_Button",
	}
}