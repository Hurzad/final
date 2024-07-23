import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Shop/Products'
import AddProduct from './pages/dashboard/AddProduct'
import Dashboard from './pages/dashboard/Dashboard'
import EditProduct from './pages/dashboard/EditProduct'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Contact from './pages/Contact/Contact'
import Account from './pages/account/Account'
import ChangePassword from './pages/account/ChangePassword'
import Footer from './layout/Footer'
import Basket from './pages/Basket/Basket'
// import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 
import FAQ from './pages/FAQ/FAQ'
import About from './pages/About/About'
import Wishlist from './components/WishBtn'



const App = () => {
  return (
    <BrowserRouter>
      {/* <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover={false}
        theme="light"
      /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Products />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/add' element={<AddProduct />} />
        <Route path='/dashboard/edit/:slug' element={<EditProduct />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/account' element={<Account />}></Route>
        <Route path='/changepassword' element={<ChangePassword />}></Route>
        <Route path='/basket' element={<Basket />}></Route>
        <Route path='/faq' element={<FAQ />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

