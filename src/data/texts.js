import simpletask from '../assets/simple-tasks_shot_v.png';
import oneliners from '../assets/javascript-one-liners_shot_v.png';

import react from '../assets/skills-tech/react.svg';
import html from '../assets/skills-tech/html5.svg';
import css from '../assets/skills-tech/css.svg';
import javascript from '../assets/skills-tech/javascript.svg';
import pwa from '../assets/skills-tech/pwa.svg';
import vite from '../assets/skills-tech/vitejs.svg';

export const translations = {
	en: {
		hello: 'Hello everyone ',
		name: " I'm Martin",
		webdev: 'Web Developer',
		view: 'View',
		resume: 'Resume',
		colon: '',
		mySkills: 'My Skills',
		myTechs: 'My Technologies',
		projects: 'My Projects',
		contact: 'Contact Me',
		techUsed: 'Techn. Used:',
		details: 'Details',
		gotoDeploy: 'Go to Web Page',

		sendEmail: 'Send Email',
		sendWhatsApp: 'Send a WhatsApp',
		sendMessage: 'Send me a Message',
		yourName: '  Your Name',
		yourEmail: '   Your Email',
		yourMessage: '   Your Mesage',
		send: 'Send Message',
		vistMyLinkedin: 'Visit my Linked',
		construction: 'Website under construction',

		apps: [
			{
				id: 1,
				imgUrl: simpletask,
				name: 'Simple Tasks',
				description: 'TodoApp type task app',
				details: `It is made in React with Vite.
It allows you to add tasks, edit them, delete them, mark them as completed and also drag and drop them in any order. For persistence the tasks are stored in localStorage. Responsive for almost all mobile phone screen sizes. Some animated icons. PWA application was made.`,

				deployUrl: 'https://tareas-simples.vercel.app/',
				githubUrl: 'https://github.com/martinrodfl/Tareas.git',
				techUsedIcons: [
					{
						id: 1,
						name: 'React',
						img: react,
					},
					{
						id: 2,
						name: 'Vite',
						img: vite,
					},
					{
						id: 3,
						name: 'Pwa',
						img: pwa,
					},
				],
			},
			{
				id: 2,
				imgUrl: oneliners,
				name: 'Javascript One-Liners',
				description: 'Web to explain how to use and apply Javascript concepts',
				details: `Javascript One-Liners is inspired on a FreeCodeCamp article, and in this web I try to apply the concepts explained in it. It is built only with Html, Css and JavaScript, without frameworks. It is responsive and has light/dark mode`,
				deployUrl: 'https://java-script-one-liners.vercel.app/',
				githubUrl: 'https://github.com/martinrodfl/JavaScript-One-Liners.git',

				techUsedIcons: [
					{
						id: 1,
						name: 'Html',
						img: html,
					},
					{
						id: 2,
						name: 'Css',
						img: css,
					},
					{
						id: 3,
						name: 'Javascript',
						img: javascript,
					},
				],
			},
		],
	},
	es: {
		hello: 'Hola a todos ',
		name: ' Soy Martin',
		webdev: 'Desarrollador Web',
		view: 'Ver',
		resume: 'CV',
		colon: ' ',
		mySkills: 'Mis Habilidades',
		myTechs: 'Mis Tecnologias',
		projects: 'Mis Proyectos',
		contact: 'Contáctame',
		techUsed: 'Tecn. Usadas:',
		details: 'Detalles',
		gotoDeploy: 'Ir a la Pagina Web',

		sendEmail: 'Enviar Email',
		sendWhatsApp: 'Enviar un WhatsApp',
		sendMessage: 'Envíame un Mensaje',
		yourName: '  Tu Nombre',
		yourEmail: '   Tu Email',
		yourMessage: '   Tu Mensaje',
		send: 'Enviar Mensaje',
		vistMyLinkedin: 'Visita mi Linked',
		construction: 'Web en construcción',

		apps: [
			{
				id: 1,
				imgUrl: simpletask,
				name: 'Tareas Simples',
				description: 'App de tareas del tipo TodoApp',
				details: `Esta realizada en React con Vite.
			Permite agregar tareas, editarlas, eliminarlas, marcarlas como completadas y tambien posicionarlas en cualquier orden mediante "drag and drop".
			Para tener persistencia las tareas se guardan en localStorage.
			Responsiva para casi todos los tamaños de pantallas de telefonos moviles.
			Algunos iconos animados.
			Se hizo la aplicacion PWA.
			App Español-Ingles`,
				deployUrl: 'https://tareas-simples.vercel.app/',
				githubUrl: 'https://github.com/martinrodfl/Tareas.git',
				techUsedIcons: [
					{
						id: 1,
						name: 'React',
						img: react,
					},
					{
						id: 2,
						name: 'Vite',
						img: vite,
					},
					{
						id: 3,
						name: 'Pwa',
						img: pwa,
					},
				],
			},
			{
				id: 2,
				imgUrl: oneliners,
				name: 'Javascript One-Liners',
				description:
					'Web para explicar cómo usar y aplicar conceptos de Javascript ',
				details: `Javascript One-Liners está inspirada en un artículo de FreeCodeCamp, y en esta web intento aplicar los conceptos explicados en él. Está construida sólo con Html, Css y Javascript, sin frameworks. Es responsive y tiene modo claro/oscuro.`,
				deployUrl: 'https://java-script-one-liners.vercel.app/',
				githubUrl: 'https://github.com/martinrodfl/JavaScript-One-Liners.git',
				techUsedIcons: [
					{
						id: 1,
						name: 'Html',
						img: html,
					},
					{
						id: 2,
						name: 'Css',
						img: css,
					},
					{
						id: 3,
						name: 'Javascript',
						img: javascript,
					},
				],
			},
		],
	},
};
