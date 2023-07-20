import './portfolio-list.css'

// components

import PortfolioPage from './portfolio-list-page/portfolio-page'
import cardServer from '../server/card-server'

//


import { useState } from 'react'


const PortfolioList = ({cotegory}) => {

  const [card, setCard] = useState(cardServer)

  console.log(cotegory)




  return(
    <dov className="portfolio-list-container">
      <div className="portfolio-list-box">

        <div className="portfolio-list-title">Брэндинг</div>

        <div className="portfolio-list">
              { card && card.map((item) => {
                  return (item.cotegory === 'branding') ? <PortfolioPage key={item.id} id={item.id} title={item.title} img={item.imgList} ></PortfolioPage> : <></>
                })
              }
        </div>

        <div className="portfolio-list-title">Веб-Дизайн</div>

        <div className="portfolio-list">
              { card && card.map((item) => {
                  return (item.cotegory === 'web') ? <PortfolioPage key={item.id} id={item.id} title={item.title} img={item.imgList} ></PortfolioPage> : <></>
                })
              }
        </div>

        <div className="portfolio-list-title">Иллюстрации</div>

        <div className="portfolio-list">
              { card && card.map((item) => {
                  return (item.cotegory === 'illustration') ? <PortfolioPage key={item.id} id={item.id} title={item.title} img={item.imgList} ></PortfolioPage> : <></>
                })
              }
        </div>


      </div>
    </dov>
  )
}


export default PortfolioList