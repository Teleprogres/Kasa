
import '../sass/componentsStyles/menu.scss'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <nav >
            <ul className="menu">
                <li className='menu_item'>
                    <NavLink to="/home" className={({ isActive }) =>
                        (isActive ? "activeLink" : undefined)} aria-label="Accueil">Accueil
                    </NavLink>
                </li>
                <li className='menu_item'>
                    <NavLink to="/about" className={({ isActive }) =>
                        (isActive ? "activeLink" : undefined)} aria-label="à propos">A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}


export default Menu;