

import '../sass/componentsStyles/header.scss'
import Menu from './Menu'
import Logo from '../assets/logo.png'



const Header = () => {

    return (

        <header className='header'>
            
                <h1 >
                    <img src={Logo} alt="kasa, Agence de location d'appartements" />
                </h1>
                <Menu />
            
            
        </header>

    )
}

export default Header;