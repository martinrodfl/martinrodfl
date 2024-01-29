import { useContext } from 'react';
import ThemeAndLangContext from '../context/ThemeAndLangContext.jsx';
import { PiDevices } from 'react-icons/pi';
import '../css/Projects.css';

const Projects = () => {
	const { texts } = useContext(ThemeAndLangContext);
	return (
		<div
			className='projects'
			id='projects'
		>
			<div className='container-projects'>
				<h3 className='project-title'>
					<span className='skill-icon-text'>
						<PiDevices />
						{texts.projects}
					</span>
				</h3>
			</div>
		</div>
	);
};

export default Projects;
