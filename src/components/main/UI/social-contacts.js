
import './social-contacts.css'

// img

import arrowBottom from './../../../asset/arrow-bottom.svg'
import tg from './../../../asset/tg.svg'
import behance from './../../../asset/behance.svg'
import vk from './../../../asset/vk.svg'

//




const SocialContacts = (props) => {


  return(
    <div className="info-phone-container">

    <div className="info-text-block">
      <div className="info-title">{props.title}</div>
      <img className='info-img' src={arrowBottom} alt="arrow-bottom" />
    </div>


    <div className="info-subtitle-animation">
      <div className="info-icon">
        <img className='info-icon icon-tg' src={tg} alt="tg" />
        <img className='info-icon icon-behance' src={behance} alt="behance" />
        <img className='info-icon icon-vk' src={vk} alt="vk" />




      </div>
    </div>

  </div>
  )
}

export default SocialContacts