import React from 'react' // rfce
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom' // imrr
import Menu from './component/Menu'
import { ToastContainer } from 'react-toastify'
import Home from './component/Home'
import Create from './component/Create'
import Update from './component/Update'
import Pnf from './component/Pnf'


function App() {
  return (
    <Router>
      <Menu />
      <ToastContainer autoClose={4000} position='top-right' />
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/create`} element={<Create />} />
        <Route path={`/edit/:id`} element={<Update />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
    </Router>
  )
}

export default App
