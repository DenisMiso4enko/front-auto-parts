import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { MainPage } from './components/pages/MainPage'
import { Login } from './components/Login'
import { Dashboard } from './components/Dashboard'
import './App.css'

export default function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path='/admin' element={<Login />} />
            <Route path='/admin/dashboard' element={<Dashboard />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
