import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Quiz from './pages/Quiz'
import ResultPage from './components/Result';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Quiz/>}/>
          <Route path='/result/:score' element={<ResultPage/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
