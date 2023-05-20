import { Outlet } from "react-router-dom"
import Home from "./components/Home"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className='App'>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
