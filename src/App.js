import Gameground from './Components/Gameground/Gameground';
import app from './App.module.css';

function App() {

	return (
		<div className={`
		${app.flexible_centering_w} 
		`}>
			<Gameground />
		</div>
	);
}

export default App;
