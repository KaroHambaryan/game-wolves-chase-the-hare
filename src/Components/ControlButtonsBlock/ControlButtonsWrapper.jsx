import controlButtonsBlockStyle from './ControlButtonsBlock.module.css';
import ControlButton from '../ControlButton/ControlButton'

const ControlButtonsWrapper = () => {
	return <div className={`
	${controlButtonsBlockStyle.wrapper}
	${controlButtonsBlockStyle.flexible_horizone_centering}
	`}>
		<ControlButton
			buttonName={"LF"}
			actionName={"left"}
		/>
		<div className={`
	${controlButtonsBlockStyle.vertical_block_wrapper}
	${controlButtonsBlockStyle.flexible_vertical_centering}
	
	`}>
			<ControlButton
				buttonName={"UP"}
				actionName={"up"} />
			<ControlButton
				buttonName={"DW"}
				actionName={"down"}/>
				
		</div>
		<ControlButton
				buttonName={"RI"}
				actionName={"right"}
		/>
	</div>
}

export default ControlButtonsWrapper;