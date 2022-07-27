import './App.css';
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import Companydesription from './components/Companydesription';
import Detail from './components/Detail';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Trustable from './components/Trustable';
function App() {
  return (
    <div className="App">
       <Navbar/>
      <Detail/>
      <Trustable/>
      <Carousel/>
      <Cards/>
      <Companydesription/>
      <Footer/>
    </div>
  );
}

export default App;
