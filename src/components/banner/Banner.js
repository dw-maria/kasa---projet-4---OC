import './banner.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Banner() {

	const [aboutPage, setAboutPage] = useState(false);

	const location = useLocation();
	
	useEffect(() => {
		if(location.pathname === '/about'){
			setAboutPage(true)
		};
	}, [])

	return (
		<section className={aboutPage ? 'about_banner content_size' : 'banner content_size'}>
			{!aboutPage && <h1>Chez vous, partout et ailleurs</h1>}
		</section>
	)
}