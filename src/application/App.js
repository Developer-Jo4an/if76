import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from '../pages/index/general/Index'
import PersonalData from '../pages/personal-data/general/PersonalData'
import PrivacyPolicy from '../pages/privacy-policy/general/PrivacyPolicy'

import './app.css'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Index/> } />
          <Route path='/privacy-policy' element={ <PrivacyPolicy /> } />
          <Route path='/personal-data' element={ <PersonalData /> } />
        </Routes>
      </BrowserRouter>
  )
}

export default App
