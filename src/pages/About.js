
import { v4 as uuid } from "uuid";
// import '../sass/componentsStyles/about.scss'
import Collaps from "../components/Collaps";
import '../sass/componentsStyles/banner.scss';
import Banner from "../components/Banner"

const About = () => {
    // uuid() fonction  pour générer les id aléatoirement
    const data = [
        {
            "id": uuid(),
            "title": "Fiabilité",
            "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            "id": uuid(),
            "title": "Respect",
            "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.."
        },
        {
            "id": uuid(),
            "title": "Service",
            "content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.."
        },
        {
            "id": uuid(),
            "title": "Sécurité",
            "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]


    return (
        <>
            {/* <section className="banner_About"></section> */}
            <Banner />
            <main className="main" >
                {
                    data.map(element => {
                        return (
                            <div key={element.id} className="container_collapse" >
                                {/* passer comme props id ,title et content */}
                                <Collaps id={element.id} title={element.title} content={element.content} />
                            </div>
                        )
                    })
                }
            </main >
        </>
    )
}

export default About;