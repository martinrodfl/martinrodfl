import { useContext } from 'react';
import Header from './components/Header.jsx';
import ThemeAndLangContext from './context/ThemeAndLangContext.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import { MdKeyboardArrowUp } from 'react-icons/md';
import './App.css';
import './css/main.css';
import Contact from './components/Contact.jsx';
function App() {
	const { theme } = useContext(ThemeAndLangContext);

	return (
		<div
			className={theme}
			id='top'
		>
			<a
				className='toTop'
				href='#top'
			>
				<span>
					<MdKeyboardArrowUp />
				</span>
			</a>
			<div
				className='layout'
				id='layout'
			>
				<Header />
				<main>
					<Skills />
					<Projects />
					<Contact />
				</main>
			</div>
		</div>
	);
}

export default App;
