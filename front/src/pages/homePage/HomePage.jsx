import React from 'react'

function HomePage() {
  return (
    <div className='wrapper'>
      <h5>Voqealar</h5>
      <div className="hr_position">
        <hr />
      </div>

      <section>
        <div className="section_border_main">
          <img src="https://picsum.photos/225/180" alt="" />
          <h6>"Ayollar daftari" ro'yxatiga kiritilgan imkoniyati…</h6>
        </div>
        <div className="section_border_main">
          <img src="https://picsum.photos/225/180" alt="" />
          <h6>Bola parvarishlovchilar uchun — “Bebbo” innovatsio…</h6>
        </div>
        <div className="section_border_main">
          <img src="https://picsum.photos/225/180" alt="" />
          <h6>21-oktabr O'zbek tili bayrami</h6>
        </div>
        <div className="section_border_main">
          <img src="https://picsum.photos/225/180" alt="" />
          <h6>“Qonunchilikdagi yangiliklar”</h6>
        </div>
      </section>

    </div>
  )
}

export default HomePage