import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
function App() {
  return (
    <>
      <Navbar />
      <div>
      <div className='heroimage' style={{position:"relative"}}>
        <img src="hero.png" id='hero' style={{zIndex:"-1", width:"100%",height:"758px",objectFit:"cover",position:"absolute"}} alt="" />
        <Hero/>
         </div>
         <img style={{position:"relative",width:"100%",zIndex:"0", height:"877px",background:"linearGradient(180deg, rgba(5, 11, 20, 0.28) 0%, rgba(1, 13, 32, 0.69) 67.53%, #0A0B1A 85.33%);"}} src="overlay.png" alt="" />
      </div>

    </>
  );
}

export default App;
