import { useContext } from 'react';
import ThemeAndLangContext from '../context/ThemeAndLangContext.jsx';
import ProjectCard from './ProjectCard.jsx';
import { PiDevices } from 'react-icons/pi';
// import simpleTasks from '../assets/simple-tasks.png';
import '../css/Projects.css';

const Projects = () => {
	const { texts } = useContext(ThemeAndLangContext);
	return (
		<section
			className='projects'
			id='projects'
		>
			<div className='container-projects'>
				<h3 className='section-title'>
					<span className='skill-icon-text'>
						<PiDevices />
						{texts.projects}
					</span>
				</h3>
				<div className='projects-list'>
					{texts.apps.map((item) => (
						<ProjectCard
							key={item.id}
							imgUrl={item.imgUrl}
							name={item.name}
							description={item.description}
							details={item.details}
							deployUrl={item.deployUrl}
							githubUrl={item.githubUrl}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
