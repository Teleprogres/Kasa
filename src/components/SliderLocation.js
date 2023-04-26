
import { useState } from "react";
import ArrowRight from '../assets/chevron_carousel_right.png'
import ArrowLeft from '../assets/chevron_carousel_left.png'
import '../sass/componentsStyles/sliderLocation.scss'

const SliderLocation = ({ picture }) => {
    const [index, setIndex] = useState(0)
    const next = () => {
        setIndex(index + 1)
        if (index === picture.length - 1)
            setIndex(0)
    }
    const prev = () => {
        setIndex(index - 1)
        if (index === 0)
            setIndex(picture.length - 1)
    }
    return (
        <article style={{ backgroundImage: `url(${picture[index]})` }} className='container_'>
            {/* si seulement si la taille de tab picture est >1 */}
            {picture.length > 1 &&
                <>
                    <img
                        className='container__arrow container__arrow_right'
                        src={ArrowRight}
                        alt="show next"
                        onClick={next}
                    />
                    <img
                        className='container__arrow container__arrow_left'
                        src={ArrowLeft}
                        alt="show previous"
                        onClick={prev}
                    />
                    <p className='numImage'>{index + 1} / {picture.length}</p>
                </>}
        </article>
    )
}

export default SliderLocation;