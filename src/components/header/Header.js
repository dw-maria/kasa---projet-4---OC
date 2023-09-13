import './header.css'
import Logo from '../../assets/logo.png'
import Navbar from '../navbar/Navbar'

export default function Header() {
	return (
		<header className='header content_size'>
			<div class="logo">
				<a href='/' title="Home page"><img src={Logo} alt="Logo de Kasa, une agende de gestion de locations" /></a>
			</div>
			<Navbar />
		</header>
	)
}
