

import { useParams } from "react-router-dom";
import data from '../data/data'
import '../sass/componentsStyles/location.scss'
import SliderLocation from "../components/SliderLocation";
import Collaps from "../components/Collaps";
import PageNotFound from "../pages/PageNotFound"
import Rating from "../components/Rating";



const Location = () => {
    // recuperer id dans la chaine de requete
    const id = useParams('id').id;

    // Chercher id dans le tableau data 
    const record = data.find(element => element.id === id)
    // en cas de modifictaion id manuelement
    if (!record) return (<PageNotFound />)
    
    // variables
    const host = record.host.name.split(' ');

    // parcourir le tableau equipement
    const tabEquipement = record.equipments.map((element, index) => {
        return (
            <p key={index}>{element} </p>
        )
    })

    // jsx
    return (
        <main className="main">
            {/* passer picture comme props  */}
            <SliderLocation picture={record.pictures} />
            <div className="container">
                <div className="container_left" >
                    <h2>{record.title}</h2>
                    <p>{record.location}</p>
                    {/* parcourir le tableau tags */}
                    {
                        record.tags.map((element, index) => {
                            return (<button key={index}>{element} </button>)
                        })
                    }
                </div>
                <div className="container_right">
                    <div className="container_right_host">
                        <div className="container_right_name">
                            <span>{host[0]}</span>
                            <span>{host[1]}</span>
                        </div>
                        <img src={record.host.picture} alt={record.host.name} />
                    </div>
                    <div className="container_right_stars">
                        {/* passer rating comme props */}
                        <Rating rating={record.rating} />
                    </div>
                </div>
            </div>

            <div className="container_collapse">
                {/* passer title et content comme props */}
                <Collaps title='Description' content={record.description} style={{ width: '45%' }} />
                <Collaps title='Équipements' content={tabEquipement} style={{ width: '45%' }} />
            </div>

        </main>
    )
}

export default Location;


