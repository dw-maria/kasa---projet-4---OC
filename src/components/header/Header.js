import './header.css'
import Logo from '../../assets/logo.png'
import Navbar from '../navbar/Navbar'

export default function Header() {
	return (
		<header className='header content_size'>
			<div class="logo">
				<img src={Logo} alt="kasa, agence de location d'appartements" />
			</div>
			<Navbar />
		</header>
	)
}
