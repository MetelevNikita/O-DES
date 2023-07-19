import './App.css'

// components

import Header from './components/header/header'
import Contacts from './components/main/contacts'
import Mainpage from './components/main/mainpage'
import Portfolio from './components/main/portfolio'


//

import { BrowserRouter, Routes, Route } from 'react-router-dom'




const App = () => {

  return(



    <div className="App">

      <BrowserRouter>
          <Header />
              <Routes>

                <Route path='/' element={<Mainpage />}></Route>
                <Route path='/portfolio' element={<Portfolio />}></Route>
                <Route path='/contacts' element={<Contacts />}></Route>

              </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App