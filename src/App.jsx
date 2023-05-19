import { Outlet } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
