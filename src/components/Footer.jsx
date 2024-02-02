import { useContext } from 'react';
import ThemeAndLangContext from '../context/ThemeAndLangContext.jsx';
import { FaLinkedin } from 'react-icons/fa';
import { LuExternalLink } from 'react-icons/lu';
import '../css/Footer.css';

const Footer = () => {
	const { texts } = useContext(ThemeAndLangContext);

	return (
		<footer>
			<span>
				<a
					href='http://www.linkedin.com/in/diego-martin-rodriguez'
					target='_blank'
					rel='noreferrer'
				>
					{texts.vistMyLinkedin}
					<span>
						<FaLinkedin /> {'  '}
					</span>
				</a>
				<LuExternalLink />
			</span>
		</footer>
	);
};

export default Footer;
