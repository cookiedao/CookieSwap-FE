import './Footer.scss';
import logo from '../static/images/logo.png'

function Footer() {
    return (
        <div className='footer'>
            <img className='logo'
                src={logo}/>
        </div>
    );
}

export default Footer;
