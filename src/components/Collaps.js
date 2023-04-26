
import { useState } from "react";
import '../sass/componentsStyles/collaps.scss'
import arrow from '../assets/arrow.png';


const Collaps = ({ title, content }) => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className="container_collapse_description" >
            <button className="container_collapse_title" onClick={() => setToggle(!toggle)}>
                {title}
                <img className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} src={arrow} alt="arrow" />
            </button>
            <div className={toggle ? 'container_collapse_content' : 'container_collapse_hidden'}>
                {/* <p>{content}</p> */}
                {content}
            </div>
        </div>
    )
}


export default Collaps;