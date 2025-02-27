import { useState } from 'react';
import '../css/projects.css';
import { projectData } from '../data/project-data'; // Импортируем данные

function Projects() {
    const [isExpanded, setIsExpanded] = useState(false);

    // Функция для переключения состояния
    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    const project = projectData?.project1 || {}; // Если данных нет, то будет пустой объект


    return (
        <div id='projects'>
            <div className="container projects">
                <div className="row">
                    {/* Заголовок проекта */}
                    <div className="col-12 mb-4">
                        <h4 className='titleProjects'><b>Projects()</b></h4>
                    </div>
                </div>

                <div className="row">
                    {/* Проект */}
                    <div className="col-12 col-md-6 mb-4">
                        <div className="project1 d-flex flex-column align-items-center">
                            {/* Изображение проекта */}
                            <img className='landing1 mb-3' src={project.img} alt="Landing Page" />

                            {/* Заголовок проекта */}
                            <p><b>Title:</b> {project.title}</p>

                            {/* Описание проекта */}
                            <p><b>Description:</b> read the description</p>
                            <div className={`description ${isExpanded ? 'expanded' : ''}`}>
                                <p>{project.description}</p>
                            </div>

                            {/* Кнопка для раскрытия текста */}
                            <button className="btn btn-link btn1" onClick={toggleText}>
                                {isExpanded ? "Show Less" : "Show More"}
                            </button>

                            {/* Ссылки на проект */}
                            <div className="project-links mt-2">
                                <a href={project.links.previewSite} target='_blank' rel="noopener noreferrer"><b>Preview Site()</b></a>
                                <br />
                                <a href={project.links.viewCode} target='_blank' rel="noopener noreferrer"><b>View the code()</b></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
