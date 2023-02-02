import Header from "../components/header/Header";
import i1 from './../img/projects/01.jpg'
import i2 from './../img/projects/02.jpg'
import i3 from './../img/projects/03.jpg'
import i4 from './../img/projects/04.jpg'
import i5 from './../img/projects/05.jpg'
import i6 from './../img/projects/06.jpg'



const Home = () => {
    return ( 
        <>
                <Header/>
    <main className="section ">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                <li className="project">
                    <a href="project-page.html">
                        <img src={i1} alt="project_img" className="project__img"/>
                        <h3 className="project__title">Gaming streaming portal</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="project-page.html">
                        <img src={i2} alt="project_img" className="project__img"/>
                        <h3 className="project__title">Video service</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="project-page.html">
                        <img src={i3} alt="project_img" className="project__img"/>
                        <h3 className="project__title">Video portal</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="project-page.html">
                        <img src={i4} alt="project_img" className="project__img"/>
                        <h3 className="project__title">Dating app</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="project-page.html">
                        <img src={i5} alt="project_img" className="project__img"/>
                        <h3 className="project__title">Landing</h3>
                    </a>
                </li>
                <li className="project">
                    <a href="project-page.html">
                        <img src={i6} alt="project_img" className="project__img"/>
                        <h3 className="project__title">Gaming community</h3>
                    </a>
                </li>
            </ul>
        </div>
    </main>
        </>
     );
}
 
export default Home;