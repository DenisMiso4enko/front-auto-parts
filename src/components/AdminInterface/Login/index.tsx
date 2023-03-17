import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchAuthAdmin } from '../../../store/slices/userSlice'
import { AppDispatch } from '../../../store'

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
    <div>
      <form method='post' onSubmit={onSubmit}>
        <label>
          E-mail
          <input type="email" required value={email} onChange={handlerOnChangeLogin} />
        </label>
        <label>
          Password
          <input type="password" required value={password} onChange={handlerOnChangePassword} />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  )
}
