import { Navbar, Header, Skills, Projects, Education, Footer } from './components';
import './App.scss';

function App() {
  return (
    <div className='app'>
    <Navbar/>
    <Header/>
    <Projects/>
    <Skills/>
    <Education/>
    <Footer/>
    </div>
  );
}

export default App;
