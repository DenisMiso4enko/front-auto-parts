import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { fetchGetMe } from '../../store/slices/userSlice'

export const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {login} = useSelector((state: RootState) => state.user)

  const handlerOnClick = () => {
    dispatch(fetchGetMe())
  }

  return (
    <>
      <h2>Dashboard</h2>
      <p>{login}</p>
      <button onClick={handlerOnClick}>CLICK</button>
    </>
  )
}
