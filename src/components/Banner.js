
import '../sass/componentsStyles/banner.scss';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';


const Banner = () => {

    const [about, setabout] = useState(false)
    // Retourne l'objet d'emplacement actuel, qui représente l'URL actuelle dans les navigateurs Web
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/about') {
            setabout(true)
        };

    }, [location])
    console.log(about)
    return (
        <section className={about ? 'banner_About' : 'banner_Homme'}>
            {/* on affiche le titre si seulement si le state est false */}
            {!about && <h2 >Chez vous, partout et ailleurs</h2>}
        </section>

    )
}

export default Banner;