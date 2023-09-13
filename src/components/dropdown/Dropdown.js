import './dropdown.css'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

export default function Dropdown({title, content}) {
    // Initialisation de la variable toggle et de la fonction pour la mettre à jour
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="dropdown">
                {/* Titre du dropdown, cliquable pour ouvrir/fermer le contenu */}
                <h3 className='dropdown_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    {/* Flèche indiquant si le dropdown est ouvert ou fermé */}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="Show content from the dropdown" 
                    />
                </h3>
                {/* Contenu du dropdown, affiché ou caché en fonction de 'toggle' */}
                <div className={toggle ? 'dropdown_content' : 'dropdown_content_hidden'}>
                     {/* Si le contenu est un tableau, map pour afficher chaque élément */}
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}