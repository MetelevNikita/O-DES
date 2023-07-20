import './portfolio-card.css'

//components

import Mybutton from '../UI/Mybutton'

//

import { useParams } from 'react-router-dom'
import cardServer from '../../server/card-server'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const PortfolioCard = ({}) => {

  const [page, setPage] = useState(1)

  const params = useParams(page)
  const id =  params.id
  console.log(id)
  const card = cardServer[id]







  return(
    <div className="portfolio-card-container">
      <div className="portfolio-card-box">

        <div className="portfolio-card-title">{card.title}</div>
        <img className="portfolio-card-img-title" src={card.imgTitle} alt="" />
        <div className="portfolio-card-description">{card.description}</div>

        <div className="portfolio-card-img-pallets">
            <img className="portfolio-card-img img-pallete-1" src={card.palletOne} alt="img-pallete-1" />
            <img className="portfolio-card-img img-pallete-2" src={card.palletTwo}  alt="img-pallete-2" />
            <img className="portfolio-card-img img-pallete-3" src={card.palletThree}  alt="img-pallete-3" />
            <img className="portfolio-card-img img-pallete-4" src={card.palletFour}  alt="img-pallete-4" />
        </div>


        <div className="portfolio-card-btn-box">
            <Mybutton onClick={() => {console.log('Назад')}}>Назад</Mybutton>
            <Mybutton onClick={() => {console.log('Вперед')}}>Вперед</Mybutton>
            <Link to={'/contacts'}><Mybutton>Назад</Mybutton></Link>

          </div>



      </div>
    </div>
  )
}

export default PortfolioCard