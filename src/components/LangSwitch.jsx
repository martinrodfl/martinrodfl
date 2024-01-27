import { useContext } from 'react';
import ThemeAndLangContext from '../context/ThemeAndLangContext.jsx';

export const LangSwitch = () => {
	const { handleLang, lang } = useContext(ThemeAndLangContext);
	return (
		<div onClick={handleLang}>
			{lang === 'es' ? (
				<span className='icon-containers'>EN</span>
			) : (
				<span className='icon-containers'>ES</span>
			)}
		</div>
	);
};
