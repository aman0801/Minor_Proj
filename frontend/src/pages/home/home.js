import './home.css';
import ImageLink from './home_comp/ImageLink';
import NavBar from './home_comp/Navbar';
import Slider from './home_comp/Slider';
export default function Home(){
    return (
        <div className="home">
            <Slider />
            <ImageLink />
            <NavBar />
        </div>
    );
}
