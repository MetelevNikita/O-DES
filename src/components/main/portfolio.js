import './portfolio.css'

// img

import arrowRight from './../../asset/arrow-right.svg'
import imgSlider1 from './../../asset/img-1.png'
import imgSlider2 from './../../asset/img-2.png'
import imgSlider3 from './../../asset/img-3.png'

//



import { useState } from 'react'
import { Link } from 'react-router-dom'


const Portfolio = () => {

  const imgArrBrending = [imgSlider1, imgSlider1, imgSlider1]
  const imgArrWeb = [imgSlider3, imgSlider3, imgSlider3]
  const imgArrIllustration = [imgSlider2, imgSlider2, imgSlider2]



  const [title, setTitle] = useState('Брендинг')
  console.log(title)


  const writeImg = () => {

    if (title === 'Брендинг') {
      return imgArrBrending && imgArrBrending.map((img, index) => {
        return <img className={`portfolio-img img${index + 1}`} src={img} alt={`img${index+1}`}></img>
      })
    } else if (title === 'Веб-дизайн') {
      return imgArrWeb && imgArrWeb.map((img, index) => {
        return <img className={`portfolio-img img${index + 1}`} src={img} alt={`img${index+1}`}></img>
      })
    } else if (title === 'Иллюстрации') {
      return imgArrIllustration && imgArrIllustration.map((img, index) => {
        return <img className={`portfolio-img img${index + 1}`} src={img} alt={`img${index+1}`}></img>
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


        <Link className = "portfolio-look-box">
            <div className="portfolio-look-title">Смотреть все</div>
            <img className="portfolio-loog-img" src={arrowRight} alt="" />
        </Link>

        <div className="portfolio-slider-container">
          <div className="portfolio-clider-line">

            {
              writeImg()
            }


          </div>
        </div>


        <div className="portfolio-menu">
          <button className="portfolio-menu-items portofilio-menu1" value={'Брендинг'} onClick={(e) => {setTitle(e.target.value)}}>Брендинг</button>
          <button className="portfolio-menu-items portofilio-menu2" value={'Веб-дизайн'} onClick={(e) => {setTitle(e.target.value)}}>Веб-дизайн</button>
          <button className="portfolio-menu-items portofilio-menu3" value={'Иллюстрации'} onClick={(e) => {setTitle(e.target.value)}}>Иллюстрации</button>
        </div>


      </div>
    </div>
  )
}

export default Portfolio