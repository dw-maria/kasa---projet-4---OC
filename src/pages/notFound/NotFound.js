import './notFound.css'
import Header from "../../components/header/Header";
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div className='notFound'>
			<Header />
			<div className="notFound_content">
				<h1 className='notFound_content_title'>404</h1>
				<p className='notFound_content_txt'>La page que vous recherchez n'existe pas.</p>
        <Link className='notFound_content_btn' to='/'>Retourner sur la page d'accueil</Link>
			</div>
		</div>
	)
}