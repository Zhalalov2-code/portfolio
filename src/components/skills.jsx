import '../css/skills.css'

function Skills() {
    const skills = [
        { name: 'HTML', progress: 85 },
        { name: 'CSS3', progress: 75 },
        { name: 'JavaScript', progress: 70 },
        { name: 'Bootstrap', progress: 95 },
        { name: 'jQuery', progress: 90 },
        { name: 'React', progress: 80 },
        { name: 'FastAPI', progress: 75 },
        { name: 'Node.js', progress: 60 },
        { name: 'Git', progress: 60 },
        { name: 'GitHub', progress: 65 }
    ];

    return (
        <div id='skills'>
            <div className="container skills">
                <h4 className='titleSkills'><b>skills()</b></h4>
                <div className='div2 row'>
                    <div className='col-12'>
                        <h3 className='titleFrontend text-center'>Frontend:</h3>
                        <div className="row mt-5">
                            {skills.slice(0, 10).map((skill, index) => (
                                <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                                    <h4>{skill.name}</h4>
                                    <div className="progress" role="progressbar" aria-label={`Progress for ${skill.name}`} aria-valuenow={skill.progress} aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-success" style={{ width: `${skill.progress}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-12 mt-5'>
                        <h3 className='titleBackend text-center'>Backend:</h3>
                        <h4 className='process mt-5 text-center'>In the learning process...</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
