import { useContext } from 'react';
import ThemeAndLangContext from '../context/ThemeAndLangContext.jsx';
import { skills, tech } from '../data/skills-tech.js';
import { AiOutlineCode } from 'react-icons/ai';
import { RiCodeSSlashLine } from 'react-icons/ri';
import '../css/Skills.css';
const Skills = () => {
	const { theme, texts } = useContext(ThemeAndLangContext);
	// console.log('img:', skills);
	// console.log('img:', tech);
	return (
		<div className='skills'>
			<div className='container-skills-technologies'>
				<h3>
					<span className='skill-icon-text'>
						<RiCodeSSlashLine />
						{texts.mySkills}
					</span>
				</h3>
				<div className='my-skills'>
					{skills.map((item) => (
						<div
							className='skill'
							key={item?.id}
						>
							<img
								className='skills-tech-img'
								src={theme === 'light' ? item?.url : item.urlDark}
								alt={item?.nombre}
							/>
							<span>{item.nombre}</span>
						</div>
					))}
				</div>
				<h3>
					<span className='skill-icon-text'>
						<AiOutlineCode />
						{texts.myTechs}
					</span>
				</h3>
				<div className='my-technolgies'>
					{tech.map((item) => (
						<div
							className='tech'
							key={item?.id}
						>
							<img
								className='skills-tech-img'
								src={theme === 'light' ? item?.url : item.urlDark}
								alt={item?.nombre}
							/>
							<span>{item.nombre}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
