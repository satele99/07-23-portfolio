import './App.css';
import Footer from './components/Footer';
import MidSection from './components/MidSection';
import Nav from './components/Navbar';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Section/>
      <MidSection/>
      <Section/>
      <Footer/>
    </div>
  );
}

export default App;
