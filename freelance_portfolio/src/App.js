import './App.css';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import MidSection from './components/MidSection';
import Nav from './components/Navbar';
import Section from './components/Section';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Section/>
      <MidSection/>
      <Skills/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default App;
