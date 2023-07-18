import './header.css'

import logo from './../../asset/logo.svg'


const Header = () => {


  return(
    <div className="header-container">
        <div className="header-box">

              <div className="header-left">
              <img className='header-logo' src={logo} alt="logo o-des" />
            </div>
            <div className="header-right">
              <nav className='header-menu'>
                <a className='menu menu-item1' href="#">О себе</a>
                <a className='menu menu-item2' href="#">Портфолио</a>
                <a className='menu menu-item3' href="#">Контакты</a>
              </nav>
            </div>
        </div>

      <hr className='header-line'/>

    </div>
  )
}


export default Header