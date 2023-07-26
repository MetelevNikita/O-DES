import './portfolio.css'

// img

import arrowRight from './../../asset/arrow-right.svg'
import imgSlider1 from './../../asset/img-1.png'
import imgSlider2 from './../../asset/img-2.png'
import imgSlider3 from './../../asset/img-3.png'

// components

import Mybutton from './UI/Mybutton'
import cardServer from '../server/card-server'



import { useState, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'


const Portfolio = () => {

  const imgArrBrending = [imgSlider1, imgSlider1, imgSlider1, imgSlider1, imgSlider1, imgSlider1, imgSlider1]
  const imgArrWeb = [imgSlider3, imgSlider3, imgSlider3, imgSlider3, imgSlider3, imgSlider3, imgSlider3]
  const imgArrIllustration = [imgSlider2, imgSlider2, imgSlider2, imgSlider2, imgSlider2, imgSlider2, imgSlider2]

  const [title, setTitle] = useState('Брендинг')
  const [counter, setCounter] = useState(0)

  const titleTheme = () => {
    return Array.from(new Set(cardServer.map((item) => {
      return item.theme
    })))
  }



  const cotegoryPage = () => {

    if(title === 'Брендинг') {
      return 'branding'
    } else if (title === 'Веб-дизайн') {
      return 'web'
    } else {
      return 'illustration'
    }
  }





  const sliderMove = (counter) => {

    if(counter <= -1576) {
      return setCounter(0)
    } else {
      setTimeout(() => {
        return setCounter(counter - 385)
      }, 5000)
    }
  }


  const writeImg = (title) => {

    if (title === 'Брендинг') {
      return imgArrBrending && imgArrBrending.map((img, index) => {
        return <img key={index + 1} className={`portfolio-img img${index + 1}`} src={img} alt={`img${index+1}`}></img>
      })
    } else if (title === 'Веб-дизайн') {
      return imgArrWeb && imgArrWeb.map((img, index) => {
        return <img key={index + 1} className={`portfolio-img img${index + 1}`} src={img} alt={`img${index+1}`}></img>
      })
    } else if (title === 'Иллюстрации') {
      return imgArrIllustration && imgArrIllustration.map((img, index) => {
        return <img key={index + 1} className={`portfolio-img img${index + 1}`} src={img} alt={`img${index+1}`}></img>
      })
    } else {
      return
    }
  }


  return(
    <div className="portfolio-container">
      <div className="portfolio-box">
        <div className='portfolio-title-animation'>
            <div className="portfolio-title">{title}</div>
        </div>

        <Link to={`/all/${cotegoryPage()}`}>
            <div className='portfolio-look-box'>
              <div className="portfolio-look-title">Смотреть все</div>
              <img className='portfolio-loog-img' src={arrowRight} alt="" />
            </div>
        </Link>



        <div className="portfolio-slider-container">
          <div className="portfolio-slider-line" style={{left: counter + 'px'}}>

            {
             writeImg(title)
            }


          </div>
        </div>


        <div className="portfolio-menu">
            {titleTheme().map((btn, index) => {
              return <Mybutton key={index} id={btn} onClick={(e) => {setTitle(btn)}}>{btn}</Mybutton>
            })}
        </div>


      </div>
    </div>
  )
}

export default Portfolio