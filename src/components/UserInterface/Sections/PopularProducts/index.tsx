import React from 'react'
import '../../../../scss/components/_popularProducts.scss'

export const PopularProducts = () => {
  return (
    <section className='populars'>
      <div className="wrapper">
        <div className="populars__body">
          <h2 className='populars__title'>Популярные товары</h2>
          <div className="populars__list"></div>
          <button className="populars__btn">Смотреть всё</button>
        </div>
      </div>
    </section>
  )
}
