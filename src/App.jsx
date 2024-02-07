import { useContext, useEffect, useRef } from 'react';
import Header from './components/Header.jsx';
import ThemeAndLangContext from './context/ThemeAndLangContext.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import { MdKeyboardArrowUp } from 'react-icons/md';
import './App.css';
import './css/main.css';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
function App() {
	const { theme } = useContext(ThemeAndLangContext);
	const observer = useRef(null);
	useEffect(() => {
		observer.current = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				} else {
					entry.target.classList.remove('show');
				}
			});
		});

		const hiddenElements = document.querySelectorAll('.hidden, .hiddenR');
		hiddenElements.forEach((el) => observer.current.observe(el));

		return () => {
			hiddenElements.forEach((el) => observer.current.unobserve(el));
		};
	}, []);

	const hiddenElements = document.querySelectorAll('.hidden, .hiddenR');
	hiddenElements.forEach((el) => observer.current.observe(el));

	return (
		<div
			className={theme}
			id='top'
		>
			<a
				className='toTop'
				href='#top'
			>
				<span className='arrowTop'>
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
			<Footer />
		</div>
	);
}

export default App;
