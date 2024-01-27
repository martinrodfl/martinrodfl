import { useContext } from 'react';
import ThemeAndLangContext from '../context/ThemeAndLangContext.jsx';
import { HiLightBulb } from 'react-icons/hi';

export const ThemeSwitch = () => {
	const { handleTheme, theme } = useContext(ThemeAndLangContext);
	return (
		<div onClick={handleTheme}>
			{theme === 'dark' ? (
				<span className='icon-containers'>
					<HiLightBulb />
				</span>
			) : (
				<span className='icon-containers'>
					<HiLightBulb />
				</span>
			)}
		</div>
	);
};
