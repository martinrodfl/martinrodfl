import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeAndLangProvider from './context/ThemeAndLangProvider.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeAndLangProvider>
			<App />
		</ThemeAndLangProvider>
	</React.StrictMode>
);
