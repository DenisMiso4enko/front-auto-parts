import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchAuthAdmin } from '../../../store/slices/userSlice'
import { AppDispatch } from '../../../store'
import'./index.scss'

interface userInfoI {
  email: string,
  password: string,
}

export const Login = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const handlerOnChangeLogin = (e) => {
    setEmail(prev => e.target.value)
  }
  const [password, setPassword] = useState('')
  const handlerOnChangePassword = (e) => {
    setPassword(prev => e.target.value)
  }

  const userInfo: userInfoI = {email, password}

  const onSubmit = (event: any) => {
    event.preventDefault()
    dispatch(fetchAuthAdmin({userInfo, navigate}))
  }

  return (
    <div className='dashboard-container form-container'>
      <h2 className='from-title' >Войдите в аккаунт</h2>
      <form method='post' onSubmit={onSubmit} className='form-login'>
        <label className='form-login__label'>
          E-mail
          <input type="email" required value={email} onChange={handlerOnChangeLogin} />
        </label>
        <label className='form-login__label'>
          Password
          <input type="password" required value={password} onChange={handlerOnChangePassword} />
        </label>
        <button className='btn btn-success' type="submit">Войти</button>
      </form>
    </div>
  )
}
