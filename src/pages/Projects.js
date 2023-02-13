// import big2 from '../img/projects/02-big.jpg'
// import gitHubBlack from '../img/icons/gitHub-black.svg'


import Project from '../components/project/Project'

import { project } from '../helpers/projectsList'

const Projects = () => {
    return ( 
        <main className="section ">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">

                {project.map((a, i)=>{
                    return <Project 
                        key={i}
                        img={a.img}
                        title={a.title}
                        index={i}
                    />
                })}

            </ul>
        </div>
    </main>
     );
}





 
export default Projects;



