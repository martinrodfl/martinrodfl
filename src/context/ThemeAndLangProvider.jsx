import { useState } from 'react';
import ThemeAndLangContext from './ThemeAndLangContext.jsx';

import { translations } from '../data/texts.js';
let initialLanguage = 'en';
let initialTheme = 'dark';

// const translations = {
// 	es: {
// 		hello: "Hello, I'm Martin",
// 	},
// 	en: {
// 		hello: 'Hola, soy Martin',
// 	},
// };

const ThemeAndLangProvider = ({ children }) => {
	const [lang, setLang] = useState(initialLanguage);
	const [texts, setTexts] = useState(translations[lang]);
	const [theme, setTheme] = useState(initialTheme);

	const handleLang = () => {
		const newLang = lang === 'es' ? 'en' : 'es';
		setLang(newLang);
		setTexts(translations[newLang]);
	};

	const handleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
	};

	const data = { lang, handleLang, texts, theme, handleTheme };

	return (
		<ThemeAndLangContext.Provider value={data}>
			{children}
		</ThemeAndLangContext.Provider>
	);
};

export default ThemeAndLangProvider;
