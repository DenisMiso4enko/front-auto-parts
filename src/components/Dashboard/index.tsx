import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../store'
import { fetchGetMe } from '../../store/slices/userSlice'

export const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()
  const { userId } = useSelector((state: RootState) => state.user)

  const handlerOnClick = () => {
    navigate('/admin/dashboard/create-post')
    }

  useEffect(() => {
    dispatch(fetchGetMe())
  }, [])

  if (!userId) return <h1>Авторизуйтесь!</h1>

  return (
    <>
      <h2>Dashboard</h2>
      <p>{userId}</p>
      <button onClick={handlerOnClick}>Добавить обьявление</button>
    </>
  )
}
