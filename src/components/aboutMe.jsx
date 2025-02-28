import '../css/aboutMe.css'

function AboutMe() {
    return (
        <div id='about'>
            <div className="container aboutMe">
                <div className="div1 row">
                    {/* Левый блок */}
                    <div className="col-5 col-md-12 col">
                        <div>
                            <h4 className="hello">Hello, I am</h4>
                            <h1 className="zalkarName"><b>Zalkar <br /> Zhalalov</b></h1>
                            <h3 className="frontend">Frontend Developer</h3>
                        </div>
                        <div className="about">
                            <h5 className="nameAbout"><b>aboutMe()</b></h5>
                            <p>
    My name is Zalkarbek, a front-end developer with a passion for building responsive and user-friendly web applications. I started in IT in 2018 as a self-taught Python programmer and graduated with a degree in "Automated Systems and Control" in 2021, followed by a degree in "Internet Technologies and Management" in 2024. I have experience with HTML, CSS, JavaScript, React, and FastAPI, and completed internships at Deutsche Post in 2023 and 2024, where I further developed my front-end skills. I'm also expanding my knowledge in back-end development and aiming to become a full-stack developer.
</p>

                        </div>
                    </div>
                    {/* Правый блок */}
                    <div className="col-5 col-md-12 offset-md-2">
                        <div className="zalkarFoto"></div>
                        <div className="learning">
                            <h5 className="titleLearning"><b>Learning()</b></h5>
                            <div className='p'>
                                <p><b>College:</b> International College named after K.Sh.Toktomamatova.</p>
                                <p><b>Specialization (College):</b> Automated systems and controls.</p>
                                <p><b>Bachelor's Degree:</b> International College named after K.Sh.Toktomamatova.</p>
                                <p><b>Specialization (Bachelor's Degree):</b> Internet technology and management.</p>
                                <p><b>Bootcamp - Onet_school:</b> Frontend developer.</p>
                                <p><b>Bootcamp - Skillbox:</b> Fullstack developer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
