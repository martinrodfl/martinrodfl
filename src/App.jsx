import { useContext } from 'react';
import Header from './components/Header.jsx';
import ThemeAndLangContext from './context/ThemeAndLangContext.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import './App.css';
import './css/main.css';
function App() {
	const { theme } = useContext(ThemeAndLangContext);

	return (
		<div className={theme}>
			<div
				className='layout'
				id='layout'
			>
				<Header />
				<main>
					<Skills />
					<Projects />
				</main>
			</div>
		</div>
	);
}

export default App;
