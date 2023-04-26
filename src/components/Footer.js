import '../sass/componentsStyles/footer.scss'
import logoFooter from '../assets/logo_footer.png'

const Footer = () => {
    return (
        <footer className='footer'>
            <img src={logoFooter} alt="Kasa - Agence de location " />
            <p className='footer_kasa'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer;