import './portfolio-page.css'

//

import { Link } from 'react-router-dom'
import { useState } from 'react'


const PortfolioPage = (props) => {
  const styleArr = ['animation-hover ', 'portfolio-page-hidden'].join('')
  const [style, setStyle] = useState(styleArr)

  return(

    <Link to={`/page/${props.id}`} onMouseEnter = {() => {setStyle(['animation-hover '])}} onMouseLeave={() => {setStyle(['animation-hover ','portfolio-page-hidden'].join(' '))}}>

    <div className={style}>
      <div className="animation-black"></div>
      <div className="animation-title">{props.title}</div>
    </div>

      <div className="portfolio-page-container">
        <div className="portfolio-page-box">
          <img src={props.img} alt={`${props.title}`} />
        </div>
      </div>

    </Link>
  )
}

export default PortfolioPage