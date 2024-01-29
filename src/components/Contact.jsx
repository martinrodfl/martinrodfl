import { useContext } from 'react';
import ThemeAndLangContext from '../context/ThemeAndLangContext.jsx';
import '../css/Contact.css';

const Contact = () => {
	const { texts } = useContext(ThemeAndLangContext);

	return (
		<div
			className='contact'
			id='contact'
		>
			<div className='container-contacts'>
				<h3 className='contact-title'>
					<span className='skill-icon-text'>{texts.contact}</span>
				</h3>
			</div>
		</div>
	);
};

export default Contact;
