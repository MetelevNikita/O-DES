
import './info-contacts.css'

// img

import arrowBottom from './../../../asset/arrow-bottom.svg'

//


const InfoContacts = (props) => {


  return(
    <div className="info-phone-container">

      <div className="info-text-block">
        <div className="info-title">{props.title}</div>
        <img className='info-img' src={arrowBottom} alt="arrow-bottom" />
      </div>


      <div className="info-subtitle-animation">
        <div className="info-subtitle">{props.subtitle}</div>
        
      </div>

    </div>
  )
}

export default InfoContacts