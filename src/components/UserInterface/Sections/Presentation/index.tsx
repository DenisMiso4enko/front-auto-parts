import React from 'react'
import '../../../../scss/components/_presentation.scss'

export const Presentation = () => {
  return (
    <section className='presentation'>
      <div className="wrapper">
        <div className="presentation__body">
          <h1 className='presentation__title'>Автозапчасти в Гомеле Б/У из Европы</h1>
          <h2 className='presentation__description'>Купить автозапчасти в Минске и Беларуси для иномарок и отечественных автомобилей по выгодным ценам с доставкой в любой город Беларуси.</h2>
          <button className="presentation__catalog">Каталог</button>
        </div>
      </div>
    </section>
  )
}