import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
export default function APP() {
  return (
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/sign-in" element={<Signin/>}/>

<Route path="/sign-out" element={<SignUp/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/projects" element={<Projects/>}/>


    </Routes>



    
    </BrowserRouter>
  )
}
