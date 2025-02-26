import '../css/aboutMe.css'

function AboutMe() {
    return (
        <div>
            <div className="container aboutMe">
                <div className=''>
                    <h4 className='hello'>Hello, i am</h4>
                    <h1 className='zalkarName'><b>Zalkar <br /> Zhalalov</b></h1>
                    <h3 className='frontend'>Frontend Developer</h3>
                </div>
                <div className='zalkarFoto'>

                </div>
                <div className='about'>
                    <h5 className='nameAbout'><b>aboutMe()</b></h5>
                    <p>Hello! I’m a Front-End Developer with experience <br />  in React, jQuery, Bootstrap, HTML, CSS, JavaScript, <br /> and Node.js. I use Material UI for creating responsive <br /> interfaces and FastAPI for server-side solutions. <br /> I am also skilled in making asynchronous requests with <br />  Axios and applying OOP principles. <br />
                        My strengths include building responsive UIs, working <br /> with APIs, following best practices, and continuously improving. <br /> I am always eager to learn and work in a team to solve problems <br /> and enhance user experiences.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;