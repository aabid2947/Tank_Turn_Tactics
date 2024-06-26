import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import PlayField from './pages/PlayField';
import Footer from './components/Footer';
import './assets/backgound.jpg'
import './output.css'
import PlayerList from './components/PlayerList';
function App() {
  return (
    <div  className="bg-[url('./assets/backgound.jpg')]">
      {/* <Home/> */}.
      <PlayField/>
      <Home></Home>
      <PlayerList></PlayerList>
      <Footer></Footer>
    </div>
  )
}

export default App;
