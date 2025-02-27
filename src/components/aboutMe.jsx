import '../css/aboutMe.css'

function AboutMe() {
    return (
        <div>
            <div className="container aboutMe">
                <div className='div1'>
                    <div>
                        <h4 className='hello'>Hello, i am</h4>
                        <h1 className='zalkarName'><b>Zalkar <br /> Zhalalov</b></h1>
                        <h3 className='frontend'>Frontend Developer</h3>
                    </div>
                    <div className='zalkarFoto'>

                    </div>
                    <div className='about'>
                        <h5 className='nameAbout'><b>aboutMe()</b></h5>
                        <p>My name is Zalkarbek, and I am a front-end developer <br /> with a passion for building responsive and user-friendly web applications. <br /> I started my journey in IT in 2018 as a self-taught Python programmer and <br /> later pursued a degree in "Automated Systems and Control" at college, <br /> graduating in 2021. Afterward, I continued my education at university, <br /> completing a degree in "Internet Technologies and Management" in 2024. <br />
                            I have hands-on experience with HTML, CSS, Bootstrap, JavaScript, jQuery, <br /> React, and FastAPI. In 2023, I completed a 3-month internship <br /> at Deutsche Post, where I gained valuable real-world experience. <br /> I continued my internship in 2024, further developing my front-end skills <br /> and learning how to collaborate effectively in a team environment. <br /> I am also actively expanding my knowledge of back-end development <br /> and aspire to grow into a full-stack developer. <br />
                            I am passionate about learning new technologies and continuously <br /> improving my skills to build high-quality and scalable web applications.</p>
                    </div>
                    <div className='learning'>
                        <h5 className='titleLearning'><b>Learning()</b></h5>
                        <p><b>College:</b> International College named after <br /> K.Sh.Toktomamatova.</p>
                        <p><b>Specialalization-College:</b> Automated systems and <br /> controls.</p>
                        <p><b>Bachelor:</b> International College named after <br /> K.Sh.Toktomamatova.</p>
                        <p><b>Specialalization-Bachelor:</b> Internet technology <br /> and management.</p>
                        <p><b>Bootcamp-Onet_school:</b> Frontend-developer.</p>
                        <p><b>Bootcamp-Skillbox:</b> Fullstack-developer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;