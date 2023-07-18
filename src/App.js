import './App.css'

// components

import Header from './components/header/header'
import Mainpage from './components/main/mainpage'


const App = () => {

  return(
    <div className="App">
      <Header />
      <Mainpage></Mainpage>

    </div>
  )
}

export default App