import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

//login: adminAvda@gmail.com
//pass: fff400420757

export const fetchAuthAdmin = createAsyncThunk(
  'user/fetchAuthAdmin',
  async function (action: any) {
    const { userInfo, navigate } = action
    const data: Response = await fetch('http://localhost:8888/admin/auth',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userInfo),
    })
    if (data.status === 200) {
        const jwt = await data.json()
        const { accessToken, refreshToken } = jwt
        localStorage.setItem('jwtAccess', accessToken)
        localStorage.setItem('jwtRefresh', refreshToken)
        // await fetchGetUserInfo()
        navigate('/admin/dashboard')
    } else {
        alert(`This "${userInfo.email}" is not registered.`)
    }
    console.log('BINGO!')
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    login: 'adminAdmin',
    pass: '',
    status: null,
    error: null,
  },
  reducers: {
    authAdmin(state, action) {
      state.login = action.payload
    }
  },
  extraReducers: {
    //@ts-ignore
    [fetchAuthAdmin.pending]: (state) => {
      state.status = 'loading',
      state.error = null
    },
    //@ts-ignore
    [fetchAuthAdmin.fulfilled]: (state, action) => {
      state.status = 'resolved',
      state.login = action.payload
    },
    //@ts-ignore
    [fetchAuthAdmin.rejected]: (state, action) => {},
  },
})

export const {authAdmin} = userSlice.actions
export default userSlice.reducer