import React from 'react'
import Products from './Pages/Products'
import Navbar from './Components/Navbar'
import { BrowserRouter , Routes ,Route } from "react-router-dom"
import Home from './Pages/Home'
import Footer from './Pages/Footer'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import SingleProduct from './Components/Section/SingleProduct'
import Login from './Pages/Login'
import Signup from './Pages/SignUp'
import VerifyOtp from './Pages/VerifyOTP'
import ForgotPassword from './Pages/ForgotPassword'
import CreateNewPassword from './Pages/CreateNewPassword'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      {/* <Products/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:id' element={<SingleProduct/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/newpassword' element={<CreateNewPassword/>}/>
          <Route path='/verifyotp' element={<VerifyOtp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App