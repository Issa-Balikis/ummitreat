import { Link } from "react-router-dom";
import "./home.css";


const Home = () => {
 
    return (
        <div className="home">
            <h3 className="home--h3">Welcome to Ummi's Treat</h3>
            <p className="home--p">Delight In Every Bite</p>
            <Link to="/Menu">
            <button className="btn" >View Menu</button>
            </Link>
        </div>
     );
}
 
export default Home;