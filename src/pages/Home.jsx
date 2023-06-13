import GirlWithAttitude from '../img/girl_with_attitude.png';
import '../App.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="left-phrase">Ignite Your imagination: Dive into a Wonderland of word soups, puzzles, coloring books, and more!</h2>
      <div className="card-container">
        <h2 className="right-phrase">Embark on a creative adventure: Explore a world of design patterns, digital art and generative.</h2>
      </div>
      <img src={GirlWithAttitude} alt="Girl with Attitude" className="featured-image" />
    </div>
  );
};

export default Home;
