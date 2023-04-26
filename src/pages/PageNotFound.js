import '../sass/componentsStyles/pagenotfound.scss'
// import Header from "../components/Header";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='page'>
            {/* <Header /> */}
            <div className="page_notfound">
                <h1 className='page_notfound_title'>404</h1>
                <p className='page_notfound_paragraph'>Oups! La page que vous demandez n'existe pas.</p>
                <Link className='page_notfound_redirect' to='/'>Retourner sur la page d'accueil</Link>
            </div>

        </div>
    )

}

export default PageNotFound;



