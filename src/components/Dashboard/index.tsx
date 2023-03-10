import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

export const Dashboard = () => {
  const {login} = useSelector((state: RootState) => state.user)

  return (
    <>
      <h2>Dashboard</h2>
      <p>{login}</p>
    </>
  )
}
