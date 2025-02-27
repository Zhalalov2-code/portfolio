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
                            <p className=''>
                                My name is Zalkarbek, and I am a front-end developer with a passion for building responsive and user-friendly web applications. I started my journey in IT in 2018 as a self-taught Python programmer and later pursued a degree in "Automated Systems and Control" at college, graduating in 2021. Afterward, I continued my education at university, completing a degree in "Internet Technologies and Management" in 2024.
                                I have hands-on experience with HTML, CSS, Bootstrap, JavaScript, jQuery, React, and FastAPI. In 2023, I completed a 3-month internship at Deutsche Post, where I gained valuable real-world experience. I continued my internship in 2024, further developing my front-end skills and learning how to collaborate effectively in a team environment. I am also actively expanding my knowledge of back-end development and aspire to grow into a full-stack developer.
                                I am passionate about learning new technologies and continuously improving my skills to build high-quality and scalable web applications.
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
