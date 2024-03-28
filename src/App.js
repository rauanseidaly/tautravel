import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import Pic2 from "./assets/tau/istockphoto-1024045506-612x612.jpg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact component={Home}></Route>
      </Routes>
      </Router>

      <section class="section">
                <div class="box-main">
                    <div class="firstHalf">
                        <h1 class="text-big">
                           Who we are?
                        </h1>
                        <p class="text-small">
                            At TauTravel, we're not just a travel company; we're your gateway to unforgettable experiences amidst the breathtaking mountains of Almaty, Kazakhstan. Nestled in the heart of Central Asia, Almaty boasts some of the most awe-inspiring landscapes and exhilarating adventures, and we are here to ensure that you experience it all.
                            Founded by a team of passionate adventurers with a deep love for the mountains, TauTravel is committed to providing you with more than just a vacation. We believe in crafting journeys that stir the soul, awaken the senses, and leave a lasting imprint on your memories.
                            What sets us apart is our intimate knowledge of the region. We understand the hidden gems, the secret trails, and the best-kept secrets of the mountains like no one else. Whether you're an avid trekker seeking the challenge of conquering peaks or a nature enthusiast craving the tranquility of alpine meadows, we have something tailor-made for you.
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                            Shop
                        </h1>
                        <p class="text-small">
                           Here you can buy a tool's for mountain
                        </p>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf">
                        <h1 class="text-big" id="program">
                        WHY YOU SHOULD CHOOSE TAU TRAVEL?
                        </h1>
                        <p class="text-small">
                        1 Expertise 
                        Our team of seasoned guides 
                        ensures safe and fulfilling 
                        mountain experiences. </p>
                        <p>
                       2 Sustainability 
                        We prioritize eco-friendly 
                        practices and respect for local communities. </p>
                        <p>
                        3 Customization
                        Tailored trips cater to 
                        diverse interests and
                        fitness levels. </p>
                        <p>
                        4 Safety 
                        We uphold rigorous safety 
                        standards and provide 
                        comprehensive support throughout the journey
                        </p>
                        <img src={Pic2} alt="pic2" /> 
                        
                    </div>
                </div>
            </section>
            
            <footer className="footer">
                <p className="text-footer">
                    Copyright © TauTravel 2024
                </p>
            </footer>
        </div>
    
  );
}

export default App;
