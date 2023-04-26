
import greyStar from '../assets/grey_star.png';
import redStar from '../assets/red_star.png';


const Rating = ({ rating }) => {


    return (

        // fragment
        <>
            {/* vérifier 5 fois la notation pour 5 étoiles max */}
            {
                rating >= 1 ? (
                    <img src={redStar} alt="red star" />

                ) : <img src={greyStar} alt="gry star" />

            }
            {
                rating >= 2 ? (
                    <img src={redStar} alt="red star" />

                ) : <img src={greyStar} alt="gry start" />

            }
            {
                rating >= 3 ? (
                    <img src={redStar} alt="red star" />

                ) : <img src={greyStar} alt="gry star" />

            }
            {
                rating >= 4 ? (
                    <img src={redStar} alt="red star" />

                ) : <img src={greyStar} alt="gry star" />

            }
            {
                rating >= 5 ? (
                    <img src={redStar} alt="red star" />

                ) : <img src={greyStar} alt="gry star" />

            }

        </>
    )
}

export default Rating;