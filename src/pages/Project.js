import { useParams } from 'react-router-dom';

import {project} from './../helpers/projectsList'
import BtnGitHub from '../components/btnGitHub/BtnGitHub';



const Project = () => {
    const {id} = useParams();
    const projects = project[id];

    return ( 
        <main className="section ">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{projects.title}</h1>
                
                <img src={projects.img_big} alt={projects.title} className="project-details__cover"/>

                <div className="project-details__desc">
                <p>{projects.skils}</p>
                    
                </div>

                {projects.gitHubLink &&  (<BtnGitHub link='https://github.com' />)}

                               
            </div>
        </div>
    </main>
     );
}

export default Project;