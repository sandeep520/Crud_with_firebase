import React from 'react'
import { Route, Routes, Switch } from 'react-router-dom'
import About from './Component/pages/About'
import AddEdit from './Component/pages/AddEdit'
import Home from './Component/pages/Home'
import View from './Component/pages/View'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'
import Header from './Component/pages/Header'
import Login from './Component/pages/Login'



const App = () => {
  return (
    <div className='App'>
      <Header/>
      <ToastContainer position='top-center' />
      <Routes>
      <Route exact path='/login' element={<Login/>} />
        <Route exact path='/' element={<Home/>} />
        <Route path='/add' element={<AddEdit/>} />
        <Route path='/update/:id' element={<AddEdit/>} />
        <Route path='/view/:id' element={<View/>} />
        <Route path='/about' element={<About/>} />
      </Routes>

  
    </div>
  )
}

export default App
