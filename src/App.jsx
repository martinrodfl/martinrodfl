import { useContext } from 'react';
import Header from './components/Header.jsx';
import ThemeAndLangContext from './context/ThemeAndLangContext.jsx';

import './App.css';
import './css/main.css';
import Skills from './components/Skills.jsx';
function App() {
	const { theme } = useContext(ThemeAndLangContext);

	return (
		<div className={theme}>
			<div className='layout'>
				<Header />
				<main>
					<Skills />
				</main>
			</div>
		</div>
	);
}

export default App;
