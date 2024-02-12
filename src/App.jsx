import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Example1 from './pages/Example1'
import Example2 from './pages/Example2'
import Example3 from './pages/Example3'
import Example4 from './pages/Example4'
import Example5 from './pages/Example5'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/example1' element={<Example1 />} />
        <Route path='/example2' element={<Example2 />} />
        <Route path='/example3' element={<Example3 />} />
        <Route path='/example4' element={<Example4 />} />
        <Route path='/example5' element={<Example5 />} />
      </Routes>
    </>
  )
}

export default App
