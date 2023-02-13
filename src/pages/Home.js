import Header from "../components/header/Header";

import Project from '../components/project/Project'

import { project } from '../helpers/projectsList'


const Home = () => {
    return ( 
        <>
                <Header/>
    <main className="section ">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
            {project.map((a, i)=>{
                    return <Project 
                        key={i}
                        img={a.img}
                        title={a.title}
                    />
                })}
            </ul>
        </div>
    </main>
        </>
     );
}
 
export default Home;