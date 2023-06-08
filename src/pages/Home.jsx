import GirlWithAttitude from '../img/girl_with_attitude.png';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="left-phrase">Discover Endless Fun and Excitement: Dive into a Wonderland of Word Puzzles, Coloring Books, and More!</h2>
      <div className="card-container">
        <h2 className="right-phrase">Unleash Your Imagination and Explore a World of Fun: Engage in Word Puzzles, Coloring Books, and More!</h2>
      </div>
      <img src={GirlWithAttitude} alt="Girl with Attitude" className="featured-image" />
    </div>
  );
};

export default Home;