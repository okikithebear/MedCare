import './App.css';
import Header from './Component/Header';
import Exercises from './Component/UI/Exercises';
import Hero from './Component/UI/Hero';
import Start from './Component/UI/Start';
import About from './Component/UI/About';
import Testimonial from './Component/UI/Testimonial';
import Nutrition from './Component/UI/Nutrition';
import Footer from './Component/UI/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Nutrition />
      <Exercises />
      <Start />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
