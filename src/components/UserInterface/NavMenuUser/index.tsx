import React from 'react'
import './index.scss'

export const NavMenuUser = () => {
  return (
    <nav className='navmenu'>
      <ul className='navmenu__list'>
        <li className='navmenu__item'>Главная</li>
        <li className='navmenu__item'>Категории</li>
        <li className='navmenu__item'>Поиск</li>
        <li className='navmenu__item'>О нас</li>
      </ul>
    </nav>
  )
}
