import Navbar from "../components/navbar";
import '../css/home.css'
import AboutMe from "../components/aboutMe";
import Skills from "../components/skills";
import Footer from '../components/footer'

function Home() {
    return (
        <div className="container-fluid body">
            <div className="container">
                <div className="row">
                    <Navbar />
                </div>
                <div className="row mt-3">
                    <AboutMe/>
                </div>
                <div className="row mt-3">
                    <Skills />
                </div>
                <div className="row mt-3 mb-2">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home;