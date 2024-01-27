import html from '../assets/skills-tech/html5.svg';
import css from '../assets/skills-tech/css.svg';
import javascript from '../assets/skills-tech/javascript.svg';
import react from '../assets/skills-tech/react.svg';
import laravel from '../assets/skills-tech/laravel.svg';
import phpDark from '../assets/skills-tech/Php.dark.svg';
import php from '../assets/skills-tech/Php.svg';
import nodejs from '../assets/skills-tech/nodejs.svg';
import expressDark from '../assets/skills-tech/Express.js.dark.svg';
import express from '../assets/skills-tech/Express.js.svg';
import github from '../assets/skills-tech/github.svg';
import mysql from '../assets/skills-tech/mysql.svg';

import linux from '../assets/skills-tech/linux.svg';
import windows from '../assets/skills-tech/windows.svg';
import git from '../assets/skills-tech/git.svg';
import vscode from '../assets/skills-tech/vscode.svg';
import docker from '../assets/skills-tech/docker.svg';
import figma from '../assets/skills-tech/figma.svg';
import photoshop from '../assets/skills-tech/photoshop.svg';

const skills = [
	{ id: 1, nombre: 'Html', url: html, urlDark: html },
	{ id: 2, nombre: 'Css', url: css, urlDark: css },
	{ id: 3, nombre: 'JavaScript', url: javascript, urlDark: javascript },
	{ id: 4, nombre: 'React', url: react, urlDark: react },
	{ id: 5, nombre: 'Laravel', url: laravel, urlDark: laravel },
	{ id: 6, nombre: 'Php', url: php, urlDark: phpDark },
	{ id: 7, nombre: 'NodeJs', url: nodejs, urlDark: nodejs },
	{ id: 8, nombre: 'Express', url: express, urlDark: expressDark },
	{ id: 9, nombre: 'Github', url: github, urlDark: github },
	{ id: 10, nombre: 'Mysql', url: mysql, urlDark: mysql },
];

const tech = [
	{ id: 1, nombre: 'Linux', url: linux, urlDark: linux },
	{ id: 2, nombre: 'Windows', url: windows, urlDark: windows },
	{ id: 3, nombre: 'Git', url: git, urlDark: git },
	{ id: 4, nombre: 'Docker', url: docker, urlDark: docker },
	{ id: 5, nombre: 'Vscode', url: vscode, urlDark: vscode },
	{ id: 6, nombre: 'Figma', url: figma, urlDark: figma },
	{ id: 7, nombre: 'Photoshop', url: photoshop, urlDark: photoshop },
];

export { skills, tech };
