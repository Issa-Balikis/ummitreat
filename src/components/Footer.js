import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return ( 
    <div className="footer">
        <div className="socialmedia">
            <a href="https://wa.me/2348091199916">
            <WhatsAppIcon />
            </a>
            <a href="https://twitter.com">
            <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/ummis_treat">
            <InstagramIcon />
            </a>
        </div>
        <p className='footer--p'>&copy;2023 ummistreat</p>
    </div>
    );
}
 
export default Footer;