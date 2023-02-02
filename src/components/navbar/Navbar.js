import sun from './../../img/icons/sun.svg'
import moon from './../../img/icons/moon.svg'
import './style.css'

const Navbar = () => {
    return(
        <nav className="nav">
        <div className="container"> 
            <div className="nav-row">
                <a href="./index.html" className="logo"><strong>Freelancer</strong> portfolio</a>

                <button className="dark-mode-btn">
                    <img src={sun} alt="sun" className="dark-mode-btn__icon"/>
                    <img src={moon} alt="moon" className="dark-mode-btn__icon"/>
               </button>

                <ul className="nav-list">
                    <li className="nav-list__item"><a href="./project-page.html" className="nav-list__link ">Projects</a></li>
                    <li className="nav-list__item"><a href="./skills.html" className="nav-list__link">Skills</a></li>
                    <li className="nav-list__item"><a href="./contacts.html" className="nav-list__link">Contacts</a></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;