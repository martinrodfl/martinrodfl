import { useContext, useState } from 'react';

import ThemeAndLangContext from '../context/ThemeAndLangContext.jsx';
import '../css/Banner.css';

export const Banner = () => {
	const { texts } = useContext(ThemeAndLangContext);
	const [cerrado, setCerrado] = useState(false);

	return (
		<>
			{!cerrado && (
				<div className='banner-contenedor'>
					<label
						htmlFor='cerrar'
						className='cerrar-btn'
					>
						close x
					</label>
					{texts.construction}
				</div>
			)}
			<input
				type='checkbox'
				id='cerrar'
				onChange={() => setCerrado(!cerrado)}
			/>
		</>
	);
};
