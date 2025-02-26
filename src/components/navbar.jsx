import '../css/navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='div1'>
            <div className="container navbar">
                <div className='col-2 text-center'>
                    <p className='zhalalov2'><b>Zhalalov2</b></p>
                </div>
                <div className='col-6'>
                    <div className='row justify-content-center'>
                        <div className='col-2'>
                            <Link to={'/'}><b>About</b></Link>
                        </div>
                        <div className='col-2'>
                            <Link><b>Skills</b></Link>
                        </div>
                        <div className='col-2'>
                            <Link><b>Projects</b></Link>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <a href="https://www.linkedin.com/in/zalkarbek-zhalalov-4b0785341" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin iconlinkedln "></i><b> Linkedln</b></a>
                    <a href="https://github.com/Zhalalov2-code" target="_blank" rel="noopener noreferrer"> <i className="fa-brands fa-square-github iconlinkedln ms-3"></i><b> GitHub</b></a>
                    <Link><button className='ms-3'><i class="fa-regular fa-envelope"></i> contact me</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;