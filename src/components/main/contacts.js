import './contacts.css'

// img

import contactsImg from './../../asset/contacts-img.png'

//

import InfoContacts from './UI/info-contacts'
import SocialContacts from './UI/social-contacts'

const Contacts = () => {

  return(
    <div className="contacts-container">

        <div className="contacts-title-aniamtion">
            <div className="contacts-title">Контакты</div>
        </div>

      <div className="contact-box">


        <div className="contacts-left">
              <img className='contact-img' src={contactsImg} alt="contacts-img"/>
        </div>
        <div className="contacts-right">

          <InfoContacts title={'Позвони'} subtitle={'+7987 617-5706'}/>
          <InfoContacts title={'Напиши'} subtitle={'ol.d3s@yandex.ru'}/>
          <SocialContacts title={'Давай дружить'}></SocialContacts>



        </div>
      </div>

    </div>
  )
}

export default Contacts