import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Characters from '../pages/Characters';
import GameInfo from '../pages/GameInfo';
import GamingContent from '../pages/GamingConten'
import Navbar from '../components/Navbar';
export default function AppRoutes(){
    return(
        
             <Router>
                 <Navbar />
                 <Routes>
                     <Route path="/" element={<About />} />
                     <Route path="/characters" element={<Characters/>}/>
                     <Route path="/gameInfo" element={<GameInfo/>} />
                     <Route path="/gamingcontent" element={<GamingContent/>} />

                 </Routes>
             </Router>
    )
}