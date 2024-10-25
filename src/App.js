import logo from './logo.svg';
import './App.css';
import Topbar from './components/Topbar';
import Menubar from './components/Menubar';
import Ourproduct from './components/Ourproduct';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Recomand from './components/Recomand';

function App() {
  return (
    <div >
      <Topbar />
      <Menubar />
      <Slider />
      <Ourproduct />
      <Newsletter />
      <Recomand />
      <Footer />
    </div>
  );
}

export default App;
