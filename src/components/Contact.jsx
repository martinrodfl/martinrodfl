import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ThemeAndLangContext from '../context/ThemeAndLangContext.jsx';
import { BsEnvelope } from 'react-icons/bs';
import { FaWhatsapp } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { AiOutlineMessage } from 'react-icons/ai';
import '../css/Contact.css';

const Contact = () => {
	const { texts } = useContext(ThemeAndLangContext);
	const form = useRef();
	const [sendMessage, setSendMessage] = useState('');

	const sendEmail = (e) => {
		e.preventDefault();
		setSendMessage('');

		emailjs
			.sendForm(
				'service_rsev4m8',
				'template_ql7d8oo',
				form.current,
				'lPV_OOJWE5ktont1J'
			)
			.then(
				(result) => {
					console.log(result.text);
					setSendMessage(
						'✈️  Mensaje enviado! Gracias por comunicarte conmigo. 🥳 '
					);
				},
				(error) => {
					console.log(error.text);
					setSendMessage('❗ No se envió el mensaje. Vuelve a intentarlo. 💪');
				}
			);

		e.target.reset();
	};

	setTimeout(() => {
		setSendMessage('');
	}, 3000);

	return (
		<section
			className='contact'
			id='contact'
		>
			<div className='container-contacts'>
				<h3 className='section-title'>
					<span className='skill-icon-text'>
						<BsEnvelope />
						{texts.contact}
					</span>
				</h3>
				<div className='container-contact-options'>
					<div className='contact-email'>
						<BsEnvelope size={30} />
						<h5>Email</h5>
						<h6>martinrodfl@gmail.com</h6>
						<a href='mailto:martinrofl@gmail.com'>
							<span className='icon-send'>
								<BiMailSend />
								{texts.sendEmail}
							</span>
						</a>
					</div>
					<div className='contact-whatsapp'>
						<FaWhatsapp size={30} />
						<h5>WhatsApp</h5>
						<h6>+598 099 029 327</h6>
						<a href='https://api.whatsapp.com/send?phone=598099029327'>
							<span className='icon-send'>
								<AiOutlineMessage /> {texts.sendWhatsApp}
							</span>
						</a>
					</div>
				</div>
				<div className='container-contact-form'>
					<h5>{texts.sendMessage}</h5>
					<form
						ref={form}
						onSubmit={sendEmail}
					>
						<input
							placeholder={texts.yourName}
							required
							type='text'
							name='name'
							id='name'
							autoComplete='off'
						/>
						<input
							placeholder={texts.yourEmail}
							required
							type='email'
							name='email'
							id='email'
							autoComplete='off'
						/>
						<textarea
							placeholder={texts.yourMessage}
							required
							name='message'
							id='message'
							cols='30'
							rows='8'
							autoComplete='off'
						></textarea>
						<button
							type='submit'
							className='submit-button'
						>
							{texts.send}
						</button>
						<div className='send-message'>
							<span>{sendMessage}</span>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
