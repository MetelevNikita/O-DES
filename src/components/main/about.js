import './about.css'

// img

import aboutImg from './../../asset/about-img.png'

// components

import SocialContacts from './UI/social-contacts'


const About = () => {

  return(
    <div className="about-container">
      <div className="about-box">

        <div className="about-left">

        <div className='about-title-animation'>
            <div className="about-title">О себе</div>
        </div>

        <div className="about-subtitle">
        Привет!Привет Привет Привет Привет Привет Привет ПриветПривет Привет Привет Привет Привет Привет ПриветПривет Привет Привет Привет Привет Привет ПриветПривет Привет Привет Привет Привет Привет ПриветПривет Привет Привет Привет Привет Привет ПриветПривет Привет Привет Привет Привет Привет ПривеПривет Привет Привет Привет Привет Привет ПриветПривет Привет Привет Привет Привет Привет ПривеПривет Привет Привет Привет Привет Привет ПриветПривет Привет Привет Привет Привет Привет ПривеПривет Привет Привет Привет Привет Привет Привет
        </div>

        <SocialContacts title={'Давай дружить'}></SocialContacts>


        </div>

        <div className="about-right">
          <div className='about-img-animation'>

              <img className='about-img' src={aboutImg} alt="about-img" />

          </div>
        </div>

      </div>
    </div>
  )
}

export default About