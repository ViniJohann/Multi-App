import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LanguageTranslator from "./components/LanguageTranslator/LanguageTranslator.jsx"
import MovieSearchEngine from "./components/MovieSearchEngine/MovieSearchEngine.jsx"
import QRCodeGenerator from "./components/QRCodeGenerator/QRCodeGenerator.jsx"
import IPAddressFinder from "./components/IPAddressFinder/IPAddressFinder.jsx"
import Login from "./components/Login/Login.jsx"

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Translator" element={<LanguageTranslator/>}/>
          <Route path="/Movie" element={<MovieSearchEngine/>}/>
          <Route path="/QRCode" element={<QRCodeGenerator/>}/>
          <Route path="/IPFinder" element={<IPAddressFinder/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
