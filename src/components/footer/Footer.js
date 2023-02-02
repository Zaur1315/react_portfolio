import gitHub from './../../img/icons/gitHub.svg'
import instagram from './../../img/icons/instagram.svg'
import linkedIn from './../../img/icons/linkedIn.svg'
import twitter from './../../img/icons/twitter.svg'
import vk from './../../img/icons/vk.svg'


const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="footer_wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="sosial"/></a></li>
                    <li className="social__item"><a href="#!"><img src={gitHub} alt="sosial"/></a></li>
                    <li className="social__item"><a href="#!"><img src={instagram} alt="sosial"/></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedIn} alt="sosial"/></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="sosial"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 Zaur1315</p>
                </div>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;