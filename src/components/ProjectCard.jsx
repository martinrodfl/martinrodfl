import { IoIosLink } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import '../css/ProjectCard.css';

const ProjectCard = ({
	imgUrl,
	name,
	description,
	details,
	deployUrl,
	githubUrl,
}) => {
	return (
		<div className='card-container'>
			<img
				src={imgUrl}
				alt={'Image from app ' + name}
			/>
			<div className='card-body'>
				<h3 className='card-app-title'>{name}</h3>
				<h6>{description}</h6>

				<h6>Details</h6>
				<p>{details}</p>

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
							Ir a deploy
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
