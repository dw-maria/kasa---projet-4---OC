import './dropdown.css'
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

export default function Dropdown({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="dropdown" >
                <h3 className='dropdown_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img 
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} 
                        src={arrow} 
                        alt="Show content from the dropdown" 
                    />
                </h3>
                <div className={toggle ? 'dropdown_content' : 'dropdown_content_hidden'}>
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