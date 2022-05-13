import './App.css';
import Navbar from './components/Navbar';
import HeroFooter from './components/HeroFooter'
import Body from './components/Body';
import Title from './components/Title';
function App() {
  return (
    <>

    {/* firstly it displays navbar  */}
      <Navbar />
      
      <div>

        {/* then it displays the hero background image and a overlay image on it for linear gradient back ground */}
        <div className='heroimage' style={{ position: "relative" }}>
          <img src="hero.png" id='hero' style={{ zIndex: "-1", width: "100%", height: "758px", objectFit: "cover", position: "absolute" }} alt="" />

          {/* this herofooter will displays all the circles below of hero image. */}
          <HeroFooter />

        </div>

        {/* this displays the title and tag below the title  */}
        <Title/>

        {/* this is the linear gradient background over the hero image  */}
        <img style={{ position: "relative", width: "100%", zIndex: "0", height: "877px", background: "linearGradient(180deg, rgba(5, 11, 20, 0.28) 0%, rgba(1, 13, 32, 0.69) 67.53%, #0A0B1A 85.33%)" }} src="overlay.png" alt="" />

      </div>
      <Body/>
    </>
  );
}

export default App;
