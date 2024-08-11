import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./features/header/components"
import Home from './pages/Home';
import Footer from './features/footer/components';
 
 
function App() { 

  return (
    <Router>
      <Header />  
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
