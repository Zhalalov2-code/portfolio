import React, { useEffect } from 'react';
import { HashLink as LinkScroll } from 'react-router-hash-link'; // Импортируем HashLink
import '../css/navbar.css';

function Navbar() {
    useEffect(() => {
        // Получаем элемент navbar
        const navbar = document.getElementById('navbar');

        // Функция для отслеживания прокрутки страницы
        const handleScroll = () => {
            if (window.scrollY > 100) { // Когда прокрутка больше 100px
                navbar.classList.add('fixed-navbar'); // Добавляем класс для фиксированного navbar
            } else {
                navbar.classList.remove('fixed-navbar'); // Убираем класс, если прокрутка меньше 100px
            }
        };

        // Добавляем обработчик события scroll
        window.addEventListener('scroll', handleScroll);

        // Убираем обработчик события при размонтировании компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <b>Zhalalov2</b>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <LinkScroll smooth className="nav-link active" to="#about">About</LinkScroll>
                            </li>
                            <li className="nav-item">
                                <LinkScroll smooth className="nav-link" to="#skills">Skills</LinkScroll>
                            </li>
                            <li className="nav-item">
                                <LinkScroll smooth className="nav-link" to="#projects">Projects</LinkScroll>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">
                                    Contact
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item a" href="https://www.linkedin.com/in/zalkarbek-zhalalov-4b0785341" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></li>
                                    <li><a className="dropdown-item a" href="https://github.com/Zhalalov2-code" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-github"></i> GitHub</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item a" href="mailto:zikozhalalov3@gmail.com"><i className="fa-regular fa-envelope"></i> Email Me</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
