import './mainpage.css'

const Mainpage = () => {

  return(
    <div className="mainpage-container">

      <div className="mainpage-left">

            <svg className= 'circle-blue' xmlns="http://www.w3.org/2000/svg" width="145" height="147" viewBox="0 0 145 147" fill="none">
            <ellipse cx="72.5" cy="73.5" rx="72.5" ry="73.5" fill="url(#paint0_radial_76_77)"/>
            <defs>
              <radialGradient id="paint0_radial_76_77" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(72.5 73.5) rotate(90) scale(73.5 72.5)">
                <stop stop-color="#001A9F"/>
                <stop offset="0.390625" stop-color="#000C4E"/>
                <stop offset="0.703125" stop-color="#08103C"/>
              </radialGradient>
            </defs>
          </svg>


          <svg className='circle-yellow' xmlns="http://www.w3.org/2000/svg" width="194" height="195" viewBox="0 0 194 195" fill="none">
          <ellipse cx="97" cy="97.5" rx="97" ry="97.5" fill="url(#paint0_radial_76_75)"/>
          <defs>
            <radialGradient id="paint0_radial_76_75" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(97 97.5) rotate(90) scale(97.5 97)">
              <stop stop-color="#F8EAC6"/>
              <stop offset="0.390625" stop-color="#F0DAA0"/>
              <stop offset="0.703125" stop-color="#E6BC50"/>
            </radialGradient>
          </defs>
        </svg>



        <div className="main-circle"></div>



        <svg className='circle-black' xmlns="http://www.w3.org/2000/svg" width="124" height="126" viewBox="0 0 124 126" fill="none">
          <g filter="url(#filter0_bii_76_78)">
            <ellipse cx="62" cy="63" rx="62" ry="63" fill="#D9D9D9" fill-opacity="0.03"/>
          </g>
          <defs>
            <filter id="filter0_bii_76_78" x="-48" y="-48" width="220" height="222" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="24"/>
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_76_78"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_76_78" result="shape"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_76_78"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset/>
              <feGaussianBlur stdDeviation="34"/>
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"/>
              <feBlend mode="normal" in2="effect2_innerShadow_76_78" result="effect3_innerShadow_76_78"/>
            </filter>
          </defs>
        </svg>


        <div className="main-left-title-animation">
              <div className="mainpage-left-title">Дизайн</div>
        </div>

        <div className="main-left-subtitletitle-animation">
            <div className="mainpage-left-subtitle">портфолио</div>
        </div>


      </div>






      <div className="mainpage-right">
        <div className="mainpage-right-title">Графический дизайн</div>
        <div className="mainpage-right-subtitle">Веб-дизайн</div>
      </div>


    </div>
  )
}

export default Mainpage