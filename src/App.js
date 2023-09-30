// import { Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
// import Skills from './components/Skills'

function App() {
  return(
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/skills' element={<Skills />} />
        <Route path='/Experience' element={<Experience />} />
        <Route path='/ContactMe' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
