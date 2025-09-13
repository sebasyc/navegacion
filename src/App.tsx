import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/homePage'
import CatalogPage from './pages/catalogPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<HomePage />}></Route>
          <Route path='catalog' element={<CatalogPage />} ></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
