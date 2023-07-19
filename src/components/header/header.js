import './header.css'


// img

import logo from './../../asset/logo.svg'

//


import { Link } from 'react-router-dom'


const Header = () => {


  return(
    <div className="header-container">
        <div className="header-box">

              <div className="header-left">
                <Link to={'/'}><img className='header-logo' src={logo} alt="logo o-des" /></Link>
            </div>

            <div className="header-right">
              <nav className='header-menu'>
                <Link to={'/about'} className='menu menu-item1'>О себе</Link>
                <Link to={'/portfolio'} className='menu menu-item2'>Портфолио</Link>
                <Link to={'/contacts'} className='menu menu-item3'>Контакты</Link>
              </nav>
            </div>
            
        </div>

      <hr className='header-line'/>

    </div>
  )
}


export default Header