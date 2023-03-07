import boardSizeSelectonStyle from './BoardSizeSelecton.module.css'

const BoardSizeSelecton = () => {
	return <select name='boardSizeSelecton' className={boardSizeSelectonStyle}>
		<option value="5">5x5</option>
	</select>
}

export default BoardSizeSelecton;