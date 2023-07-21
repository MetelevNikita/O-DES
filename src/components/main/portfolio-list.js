import './portfolio-list.css'

// components

import PortfolioPage from './portfolio-list-page/portfolio-page'
import cardServer from '../server/card-server'
import Mybutton from './UI/Mybutton'

//


import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'



const PortfolioList = () => {

  const [card, setCard] = useState(cardServer)
  const params = useParams()
  const cotegory = params.cotegory


  const themeTitle = () => {

    if (cotegory === 'branding') {
      return 'Брэндинг'
    } else if (cotegory === 'web') {
      return 'Веб-дизайн'
    } else {
      return 'Иллюстрации'
    }
  }



  return(
    <div className="portfolio-list-container">
      <div className="portfolio-list-box">

        <div className="portfolio-list-title">{themeTitle()}</div>

        <div className="portfolio-list">
              { card && card.map((item) => {
                  return (item.cotegory === cotegory) ? <PortfolioPage key={item.id} id={item.id} title={item.title} img={item.imgList} ></PortfolioPage> : <></>
                })
              }
        </div>

        <Link to={'/portfolio'}><Mybutton>назад</Mybutton></Link>
      </div>
    </div>
  )
}


export default PortfolioList