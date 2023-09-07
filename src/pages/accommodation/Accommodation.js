import './accommodation.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datas from '../../data/data';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/carousel/Carousel"
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';
import Dropdown from '../../components/dropdown/Dropdown';

export default function Accommodation() {
	
	const [imageSlider, setImageSlider] = useState([]);

	const idAccommodation = useParams('id').id;
	const dataCurrentAccommodation = datas.filter(data => data.id === idAccommodation);
	
	useEffect(() => {
		const dataCurrentAccommodation = datas.filter(data => data.id === idAccommodation);
		setImageSlider(dataCurrentAccommodation[0].pictures);
	}, [idAccommodation]);

	const name = dataCurrentAccommodation[0].host.name.split(' '); 
	const rating = dataCurrentAccommodation[0].rating;
	const description  = dataCurrentAccommodation[0].description;
	const equipments = dataCurrentAccommodation[0].equipments;

	return (
		<>
			<Header/>
			<Slider imageSlider={imageSlider}/>
			<main className="acommodation content_size">
				<div className="acommodation_content">
					<div className="accommodation_details">
							<h1>{dataCurrentAccommodation[0].title}</h1>
							<p>{dataCurrentAccommodation[0].location}</p>
							<div>
								{dataCurrentAccommodation[0].tags.map((tag, index) => {
									return (
										<button key={index}>{tag}</button>
									)
								})}
							</div>
					</div>
					<div className="accommodation_host">
						<div className="accommodation_host_inner">
							<div className='accommodation_host_infos'>
								<span>{name[0]}</span>
								<br></br>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAccommodation[0].host.picture} alt="The host" />
						</div>
							
						<div className="accommodation_host_rating">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="Rating stars" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="accommodation_dropdown">
					<div className="accommodation_dropdown_item">
						<Dropdown title={'Description'} content={description} />	
					</div>
					<div className="accommodation_dropdown_item">
						<Dropdown title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
			<Footer/>
		</>
	)
}