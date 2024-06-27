
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import './output.css'
import Header from './components/Header';


function App() {
  return (
    <div  className="bg-[url('./assets/background2.avif')] bg-cover  flex flex-col justify-end">
      {/* <Home/> */}.
      <div>

     <Header/>
      <Home></Home>
      </div>
      {/* <PlayerList></PlayerList> */}
      <Footer></Footer>
    </div>
  )
}

export default App;
