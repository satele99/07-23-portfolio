import './App.css';
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
    </div>
  );
}

export default App;
