import cellStyle from './Cell.module.css'

const Cell = () => {
	return <div key={"1"} className={`
	${cellStyle.size}
	`}></div>
}

export default Cell;