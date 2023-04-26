

import { Link } from 'react-router-dom'

import "../sass/componentsStyles/box.scss"

const Box = ({ id, title, cover }) => {
    return (

        <Link to={`/location/${id}`} className="box">
            <img src={cover} alt={title} />
            <h3>{title}</h3>
            {/* <div className='box_heading'>
                
            </div> */}
        </Link>
    )

}

export default Box;
