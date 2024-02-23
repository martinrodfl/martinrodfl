import { useEffect } from 'react';
import '../css/Scroller.css';

export const Scroller = ({ arr, theme, direction, speed }) => {
	useEffect(() => {
		const scrollers = document.querySelectorAll('.scroller');
		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			addAnimation(scrollers);
		}
	}, []);

	function addAnimation(scrollers) {
		scrollers.forEach((scroller) => {
			scroller.setAttribute('data-animated', true);

			const scrollerInner = scroller.querySelector('.scroller-inner');
			const scrollerContent = Array.from(scrollerInner.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				duplicatedItem.setAttribute('aria-hidden', true);
				scrollerInner.appendChild(duplicatedItem);
			});
		});
	}

	return (
		<div
			className='scroller'
			data-direction={direction}
			data-speed={speed}
		>
			<div className='scroller-inner'>
				{arr?.map((item) => (
					<div
						className='skill'
						key={item?.id}
					>
						<img
							className='skills-tech-img'
							src={theme === 'light' ? item?.url : item?.urlDark}
							alt={item?.nombre}
						/>
						<span>{item?.nombre}</span>
					</div>
				))}
			</div>
		</div>
	);
};
