import controlButtonsBlockStyle from './ControlButtonsBlock.module.css';
import ControlButton from '../ControlButton/ControlButton'

const ControlButtonsWrapper = () => {
	return <div className={`
	${controlButtonsBlockStyle.wrapper}
	${controlButtonsBlockStyle.flexible_horizone_centering}
	`}>
		<ControlButton
			buttonName={"LF"}
			actionName={"lf"}
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
				actionName={"dw"}/>
				
		</div>
		<ControlButton
				buttonName={"RI"}
				actionName={"ri"}
		/>
	</div>
}

export default ControlButtonsWrapper;