import Navbar from './components/Navbar'
import './App.css'
import HeroLine from './components/HeroLine'
import "./styles/navbar.scss"
import "./styles/home.scss"
import "./styles/about.scss"
import "./styles/information.scss"
import "./styles/mission.scss"
import "./styles/footer.scss"

import Information from './components/Information'
import Mission from './components/Mission'
import Footer from './components/Footer'
import About from './components/About'


function App() {

  return (
    <>
<Navbar/>
<HeroLine/>
<About/>
<Information/>
<Mission/>
<Footer/>
</>
  )
}

export default App