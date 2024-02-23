import { useContext } from 'react';
import ThemeAndLangContext from '../context/ThemeAndLangContext.jsx';
import { skills, tech } from '../data/skills-tech.js';
import { AiOutlineCode } from 'react-icons/ai';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { Scroller } from './Scroller.jsx';
import '../css/Skills.css';

const Skills = () => {
	const { theme, texts } = useContext(ThemeAndLangContext);
	// console.log({ skills });
	return (
		<section
			className='skills'
			id='skills'
		>
			<div className='container-skills-technologies'>
				<h3 className='section-title'>
					<span className='skill-icon-text'>
						<RiCodeSSlashLine />
						{texts.mySkills}
					</span>
				</h3>
				<Scroller
					arr={skills}
					theme={theme}
					direction='left'
					speed='fast'
				/>
				<h3 className='section-title'>
					<span className='skill-icon-text'>
						<AiOutlineCode />
						{texts.myTechs}
					</span>
				</h3>
				<Scroller
					arr={tech}
					theme={theme}
					direction='right'
					speed='fast'
				/>
			</div>
		</section>
	);
};

export default Skills;
