import '../css/projects.css'
import landing1 from '../img/landing1.png'

function Projects() {
    return (
        <div>
            <div className="container projects">
                <div className='div1'>
                    <h5 className='titleProjects'><b>Projects()</b></h5>
                    <div className='project1'>
                        <img className='landing1' src={landing1} alt="" />
                        <p><b>title:</b> Landing-site</p>
                        <p><b>Description:</b> <br /> This is my pet project – an adaptive landing <br /> page created to showcase my web development <br /> skills. The project uses HTML, CSS, and Bootstrap <br /> to create a stylish and responsive interface. <br /> I applied React and React Hooks to manage state <br /> and build reusable components. For routing, <br /> I used React Router, enabling smooth transitions <br /> between different pages.
                            The project is fully <br /> responsive, thanks to adaptive layout techniques <br /> and the use of Bootstrap. This website is a great <br /> example of my experience in developing modern <br /> and efficient web applications.
                        </p>
                        <a href="https://zhalalov2-landing.netlify.app/" target='blank'><b>Preview Site()</b></a>
                        <br />
                        <a href="https://github.com/Zhalalov2-code/landing" target='blank'><b>View the code()</b></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;