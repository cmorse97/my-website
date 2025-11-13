import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import Navbar from './components/Navbar';
import AboutSection from './sections/AboutSection';
import HeroSection from './sections/HeroSection';
import ProjectSection from './sections/ProjectSection';
import SkillsSection from './sections/SkillsSection';

function App() {
  return (
    <Container fluid id="main-content">
      {/* <Navbar /> */}
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <SkillsSection />
    </Container>
  );
}

export default App;
