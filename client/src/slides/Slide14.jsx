import React from 'react'
import { macedonski, petica, minulescu, bacovia } from '../assets/img/assets'

const Slide14 = () => {
  return (
    <div className='window'>
      <h1 className="rep">
        IV. Reprezentanti ai simbolismului european in Romania
      </h1>
      <div className="cards-container">
        <div className="poet-card">
          <img src={macedonski} alt="Alexandru Macedonski" />
          <h3>Alexandru Macedonski</h3>
          <p><strong>📖 Opera principală:</strong> Rondeluri</p>
          <p><strong>🎭 Tematici:</strong> Melancolia, natura efemeră a vieții, iubirea idealizată</p>
          <p><strong>✍️ Contribuție:</strong> Considerat părintele simbolismului românesc, Macedonski este primul poet român care a adus ideile simbolismului în literatura română. Este cunoscut pentru inovarea formelor poetice, fiind autorul unui număr mare de rondeluri.</p>
        </div>

        <div className="poet-card">
          <img src={petica} alt="Ștefan Petică" />
          <h3>Ștefan Petică</h3>
          <p><strong>📖 Opera principală:</strong> Fecioara în alb</p>
          <p><strong>🎭 Tematici:</strong> Efemeritatea, visul, misterul</p>
          <p><strong>✍️ Contribuție:</strong> Un reprezentant al simbolismului românesc, Petică adoptă o poezie plină de imagini misterioase și simboluri. Stilul său este caracterizat printr-o subtilitate aparte, cu o mare încărcătură emoțională.</p>
        </div>

        <div className="poet-card">
          <img src={minulescu} alt="Ion Minulescu" />
          <h3>Ion Minulescu</h3>
          <p><strong>📖 Opera principală:</strong> Romanțe pentru mai târziu</p>
          <p><strong>🎭 Tematici:</strong> Visul, melancolie, dorința neîmplinită</p>
          <p><strong>✍️ Contribuție:</strong> Cunoscut pentru combinația dintre simbolism și modernism, poezia sa se remarcă printr-o mare putere sugestivă și o atmosferă de vis, textele sale fiind încărcate de simboluri ce sugerează stări melancolice.</p>
        </div>

        <div className="poet-card">
          <img src={bacovia} alt="George Bacovia" />
          <h3>George Bacovia</h3>
          <p><strong>📖 Opera principală:</strong> Plumb</p>
          <p><strong>🎭 Tematici:</strong> Pesimism, melancolie, atmosferă sumbră</p>
          <p><strong>✍️ Contribuție:</strong> Cunoscut pentru stilul său unic, care combină simbolismul cu o atmosferă sumbră și pesimistă. Poezii precum „Plumb" sau „Lacustră" sunt celebre pentru imagistica lor sumbră și apocaliptică.</p>
        </div>
      </div>
    </div>
  )
}

export default Slide14