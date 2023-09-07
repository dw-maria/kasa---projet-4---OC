import './card.css'
import { Link } from 'react-router-dom'

export default function Card({id, title, cover}) {

	return (
		<Link to={`/accommodation/${id}`} className="gallery_card">
			<img src={cover} alt={title} />
			<h2>{title}</h2>	
		</Link>
	)
}