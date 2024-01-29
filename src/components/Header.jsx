import { useContext } from 'react';
import ThemeAndLangContext from '../context/ThemeAndLangContext';
import { LangSwitch } from './LangSwitch.jsx';
import { ThemeSwitch } from './ThemeSwitch.jsx';
import Typewriter from 'typewriter-effect';
import { IoEyeOutline } from 'react-icons/io5';
import man from '../assets/man.png';
import '../css/Header.css';

const Nav = () => {
	return (
		<div className='nav'>
			<a
				className='tab'
				href='#skills'
			>
				Skills
			</a>
			<a
				className='tab'
				href='#projects'
			>
				Projects
			</a>
			<a
				className='tab'
				href=''
			>
				Contact
			</a>
		</div>
	);
};
const Header = () => {
	const { texts, lang } = useContext(ThemeAndLangContext);

	return (
		<div className='header'>
			<div className='header-switches'>
				<ThemeSwitch />
				<a
					className='download-btn'
					href={
						lang === 'es'
							? 'https://drive.google.com/file/d/1NCWH_76Iyo1MPkLtbmbASBhKvvNetW5i/view?usp=sharing'
							: 'https://drive.google.com/file/d/1wMOwgwX2zGGnQnE_xZvDVaBc_77OClUx/view?usp=sharing'
					}
					target='_blank'
					rel='noreferrer'
				>
					<span className='download-icon'>
						<IoEyeOutline />
					</span>{' '}
					<span>
						{texts.view} {texts.resume}
					</span>
				</a>
				<LangSwitch />
			</div>
			<div className='header-main'>
				<div className='header-greetings'>
					<span className='hello'>
						{texts.hello}
						<span className='vibrate'>👋</span>
						{texts.colon}
					</span>
					<h1 className='text-color'>{texts.name}</h1>
					<span>
						<Typewriter
							options={{
								strings: [`<span class='text-color2'>${texts.webdev}</span>`],
								autoStart: true,
								loop: true,
							}}
						/>
					</span>
				</div>
				<div className='header-image'>
					<div className='container-image'>
						<img
							src={man}
							alt='photo'
						/>
					</div>
				</div>
			</div>
			<Nav />
		</div>
	);
};

export default Header;
