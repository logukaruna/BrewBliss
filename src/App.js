
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Menu/>
      <Testimonials/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
