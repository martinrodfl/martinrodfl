import { IoIosLink } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import ThemeAndLangContext from '../context/ThemeAndLangContext.jsx';
import '../css/ProjectCard.css';

const ProjectCard = ({
	imgUrl,
	name,
	description,
	details,
	deployUrl,
	githubUrl,
	techUsedIcons,
}) => {
	const { texts } = useContext(ThemeAndLangContext);

	return (
		<div className='card-container hiddenR'>
			<img
				src={imgUrl}
				alt={'Image from app ' + name}
			/>
			<div className='card-body '>
				<h3 className='card-app-title'>{name}</h3>
				<h6 className='card-app-description'>{description}</h6>

				<h6>{texts.details}</h6>
				<p>{details}</p>

				<div className='tech-used'>
					<span className='tech-text'>{texts.techUsed}</span>
					<div className='tech-icons-used'>
						{techUsedIcons.map((item) => (
							<span
								className='icon-techs'
								key={item.id}
							>
								<img
									className='icon-image'
									src={item.img}
									alt={item.name}
								/>
							</span>
						))}
					</div>
				</div>

				<div className='repo-links'>
					<span>
						<a
							href={deployUrl}
							className='repo-links-a'
							target='_blank'
							rel='noreferrer'
						>
							<IoIosLink />
							<span className='repos-link-separator'></span>
							{texts.gotoDeploy}
						</a>
					</span>
					<span>
						<a
							href={githubUrl}
							className='repo-links-a'
							target='_blank'
							rel='noreferrer'
						>
							<FaGithub />
							<span className='repos-link-separator'></span>
							Github
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
