import PageWrapper from './layouts/PageWrapper'
import { Route, Routes } from 'react-router-dom'
import * as Pages from './pages'
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<PageWrapper/>}>
          <Route index element={<Pages.HomePage/>}/>
          <Route path = '/superheros' element = {<Pages.SuperheroPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
