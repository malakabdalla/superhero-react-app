import PageWrapper from './layouts/PageWrapper'
import { Route, Routes } from 'react-router-dom'
import * as Pages from './pages'
import './App.css'
import { SuperheroProvider } from './contexts'

function App() {


  return (
    <>
      <SuperheroProvider>
        <Routes>
          <Route path='/' element={<PageWrapper />}>
            <Route index element={<Pages.HomePage />} />
            <Route path='/superheros' element={<Pages.SuperheroPage />} />
            <Route path ='/favorites' element = {<Pages.FavPage/>} />
          </Route>
        </Routes>
      </SuperheroProvider>
    </>
  )
}

export default App
