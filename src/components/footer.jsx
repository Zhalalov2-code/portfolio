import '../css/footer.css';

function Footer() {
    return (
        <div>
            <div className="container footer">
                <div className="row">
                    <div className="col-12 col-md-2">
                        <p className="zhalalov"><b>Zhalalov2</b></p>
                    </div>
                    <div className="col-12 col-md-8 text-center">
                        <a href="tel:+997227010089" className="mobnummer">To Call: +996227010089 ,</a>
                        <a href="mailto:fill_flls@icloud.com" className="email">Email: fill_flls@icloud.com</a>
                    </div>
                    <div className="col-12 col-md-2 text-center">
                        <a href="https://www.instagram.com/zhalalov2" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-instagram insta"></i>
                        </a>
                        <a href="https://wa.me/+996227010089" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-whatsapp watsapp"></i>
                        </a>
                        <a href="https://t.me/+996227010089" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-telegram telegram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
