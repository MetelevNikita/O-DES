import './App.css'

// components

import Header from './components/header/header'
import Contacts from './components/main/contacts'
import Mainpage from './components/main/mainpage'
import Portfolio from './components/main/portfolio'
import PortfolioList from './components/main/portfolio-list'
import PortfolioCard from './components/main/portfolio-card/portfolio-card'
import About from './components/main/about'


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
                <Route path='/all/:cotegory' element={<PortfolioList />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/page/:id' element={<PortfolioCard />}></Route>

              </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App