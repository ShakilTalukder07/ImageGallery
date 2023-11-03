import './App.css'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'

function App() {

  return (
    <div className='m-10 shadow-2xl rounded-lg'>
      {/* navbar */}
      <Navbar></Navbar>
      {/* products  */}
      <Products></Products>
    </div>
  )
}

export default App
