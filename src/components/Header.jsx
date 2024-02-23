import { useContext } from 'react';
import ThemeAndLangContext from '../context/ThemeAndLangContext';
import { LangSwitch } from './LangSwitch.jsx';
import { ThemeSwitch } from './ThemeSwitch.jsx';
import Typewriter from 'typewriter-effect';
import { IoEyeOutline } from 'react-icons/io5';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { MdOutlineEmail } from 'react-icons/md';
import { PiDevices } from 'react-icons/pi';
// import man from '../assets/man.png';
// import progNightWide from '../assets/port_imgs/prog_noche_final_ancha.jpeg';
// import progNight from '../assets/port_imgs/prog_noche_final.png';
import '../css/Header.css';

const Nav = () => {
	const { texts } = useContext(ThemeAndLangContext);
	return (
		<div className='nav'>
			<a
				className='tab'
				href='#skills'
			>
				<span className='skill-icon-text'>
					<RiCodeSSlashLine />
					{texts.mySkills}
				</span>
			</a>
			<a
				className='tab'
				href='#projects'
			>
				<span className='skill-icon-text'>
					<PiDevices />
					{texts.projects}
				</span>
			</a>
			<a
				className='tab'
				href='#contact'
			>
				<span className='skill-icon-text'>
					<MdOutlineEmail />
					{texts.contact}
				</span>
			</a>
		</div>
	);
};

const Header = () => {
	const { texts, lang } = useContext(ThemeAndLangContext);

	return (
		<header className='header'>
			<div className='header-switches'>
				<ThemeSwitch />
				<Nav />

				<LangSwitch />
			</div>
			<div className='header-main'>
				<div className='header-greetings'>
					<span className='hello'>
						{texts.hello}
						<span className='vibrate'>👋</span>
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
						{/* <img
							className=''
							src={progNightWide}
							alt='photo'
						/> */}
						{/* <img
							srcSet={`${progNight} ${progNightWide}`}
							sizes='(min-width: 575px) 575px,
            800px'
							src={progNight}
							alt='image'
						/> */}
					</div>
				</div>
			</div>
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
		</header>
	);
};

export default Header;
