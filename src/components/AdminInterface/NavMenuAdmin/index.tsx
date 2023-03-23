import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch } from '../../../store'
import { requestLogOut } from '../../../store/slices/userSlice'
import './index.scss'

export const NavMenuAdmin = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const handlerLogOut = () => {
    dispatch(requestLogOut())
    navigate('/')
  }
  return (
    <nav className='navmenu'>
      <ul className='navmenu__list'>
        <li className='navmenu__item' onClick={() => navigate('/admin/dashboard')}>Панель</li>
        <li className='navmenu__item'>Аналитика</li>
        <li className='navmenu__item'>Что-то ещё</li>
        <li className='navmenu__item' onClick={handlerLogOut}>Выйти</li>
      </ul>
    </nav>
  )
}
