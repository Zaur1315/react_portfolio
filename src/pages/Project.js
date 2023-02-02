const Project = () => {
    return ( 
        <main className="section ">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">Video service</h1>
                
                <img src={big2} alt="cover" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>Skills: React, Node.js, MongoDB</p>
                </div>

                <a href="#!" className="btn-outline"><img src={gitHubBlack} alt="github"/>GitHub repo</a>
                
            </div>
        </div>
    </main>
     );
}

export default Project;