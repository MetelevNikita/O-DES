import './portfolio-card.css'

//components

import Mybutton from '../UI/Mybutton'

//

import { useParams } from 'react-router-dom'
import cardServer from '../../server/card-server'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const PortfolioCard = ({}) => {
  const params = useParams()
  const id =  Number(params.id)
  const [page, setPage] = useState(id)
  const card = cardServer[page-1]

  console.log(page)



  const nextPage = () => {

    if(page >= cardServer.length) {
      setPage(cardServer.length)
    } else {
      setPage(page+1)
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  }


  const previusPage = () => {
    if(page === 1) {
      setPage(1)
    } else {
      setPage(page-1)
      window.scroll({
        top: 0,
        behavior: 'smooth'
      })
    }
  }


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
            <Mybutton onClick={() => {previusPage()}}>Назад</Mybutton>
            <Mybutton onClick={() => {nextPage()}}>Вперед</Mybutton>
            <Link to={'/contacts'}><Mybutton>Назад</Mybutton></Link>

          </div>



      </div>
    </div>
  )
}

export default PortfolioCard