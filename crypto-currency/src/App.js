import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/HeroSection';
import ServiceSection from './Components/ServiceSection';
import AboutSection from './Components/AboutSection';
import WhySection from './Components/WhySection';
import TeamSection from './Components/TeamSection';
import ClientSection from './Components/ClientSection';
import InfoSection from './Components/InfoSection';
import FooterSection from './Components/FooterSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ServiceSection />
      <AboutSection />
      <WhySection />
      <TeamSection />
      <ClientSection />
      <InfoSection />
      <FooterSection />
    </div>
  );
}

export default App;
