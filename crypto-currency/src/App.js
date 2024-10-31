import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/HeroSection';
import ServiceSection from './Components/ServiceSection';
import HeaderSection from './Components/HeaderSection';
import SliderSection from './Components/SliderSection';
import AboutSection from './Components/AboutSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <HeaderSection />
      <SliderSection />
      <ServiceSection />
      <AboutSection />
    </div>
  );
}

export default App;
