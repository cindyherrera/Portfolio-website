import {Link} from "react-router-dom";
import "./style.css";

const Home = () => {
    return (
        <div className="home">
        <div className="title">
          <h1>
            <p>Hi,</p>
            <p>I'm Cindy.</p>
          </h1>
          <p>Computer Science student at Georgia State University.</p>
          <Link to="/about">
            <button>More Info</button>
          </Link>
        </div>
        <div className="person">
          <img
            src={`${process.env.PUBLIC_URL}/headshot.jpg`}
            alt="profile picture"
          />
        </div>
      </div>
    );
};

export default Home;
