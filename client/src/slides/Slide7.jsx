import React from 'react'
import { charles } from '../assets/img/assets'
import { rimbaud } from '../assets/img/assets'
import { verlaine } from '../assets/img/assets'

const Slide7 = () => {
  return (
    <div className='window'>
      <h1 className='rep'>Reprezentanti</h1>
      <div className="cards-container">
        <div className="poet-card">
          <img src={charles} alt="Charles Baudelaire" />
          <h3>Charles Baudelaire</h3>
          <p><strong>📖 Opera principală:</strong> Les Fleurs du mal (1857)</p>
          <p><strong>🎭 Tematici:</strong> Decadență morală, dorință, moarte, frumusețea întunecată a lumii.</p>
          <p><strong>✍️ Contribuție:</strong> Considerat părintele simbolismului francez, poezia sa combină imagini senzuale și simboluri intense, influențând profund literatura modernă.</p>
        </div>

        <div className="poet-card">
          <img src={rimbaud} alt="Arthur Rimbaud" />
          <h3>Arthur Rimbaud</h3>
          <p><strong>📖 Opera principală:</strong> Sezonul în Iad (1873)</p>
          <p><strong>🎭 Tematici:</strong> Haos, viziuni onirice, realitatea umană transfigurată.</p>
          <p><strong>✍️ Contribuție:</strong> Cunoscut pentru stilul său radical, Rimbaud a revoluționat poezia prin imagini puternice și o abordare inovatoare asupra limbajului poetic.</p>
        </div>

        <div className="poet-card">
          <img src={verlaine} alt="Paul Verlaine" />
          <h3>Paul Verlaine</h3>
          <p><strong>📖 Opera principală:</strong> Romances sans paroles (1874)</p>
          <p><strong>🎭 Tematici:</strong> Dragoste, natură, melancolie, introspecție.</p>
          <p><strong>✍️ Contribuție:</strong> Poezia sa este apreciată pentru muzicalitate și sensibilitate lirică, devenind un model de eleganță simbolistă.</p>
        </div>
      </div>
    </div>
  )
}

export default Slide7