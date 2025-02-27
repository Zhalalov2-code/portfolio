import '../css/skills.css'
import html from '../img/html.png'
import css3 from '../img/css3.png'
import js from '../img/js.png'
import boostrap from '../img/boostrap.png'
import jquery from '../img/jquery.png'
import react from '../img/react.png'
import fastapi from '../img/fastApi.png'
import nodejs from '../img/nodejs.png'
import git from '../img/git.png'
import github from '../img/github.png'

function Skills() {
    return (
        <div>
            <div className="container skills">
                <div className='div1'>
                    <h4 className='titleSkills'>skills()</h4>
                    <div className='disFrontend'>
                        <div>
                            <h3 className='titleFrontend'>Frontend:</h3>
                            <img className='html' src={html} alt="" />
                            <img className='css' src={css3} alt="" />
                            <img className='js' src={js} alt="" />
                            <img className='boostrap' src={boostrap} alt="" />
                            <img className='jquery' src={jquery} alt="" />
                            <img className='react' src={react} alt="" />
                            <img className='fastapi' src={fastapi} alt="" />
                            <img className='nodejs' src={nodejs} alt="" />
                            <img className='git' src={git} alt="" />
                            <img className='github' src={github} alt="" />
                        </div>
                        <div>
                            <h3 className='titleBackend'>Backend:</h3>
                            <h4 className='process'>In the learning process...</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;