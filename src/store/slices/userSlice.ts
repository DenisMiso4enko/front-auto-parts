import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { httpRequest } from "../../httpRequests";
import { PATHDOMAIN } from "../../constants";

//email: adminAvda@gmail.com
//pass: fff400420757

//httpRrequest(path: string, method: string, body: any) => {}

export const fetchAuthAdmin = createAsyncThunk(
  "user/fetchAuthAdmin",
  async function (action: any, { dispatch }) {
    const { userInfo, navigate } = action;
    const response: Response = await httpRequest(`${PATHDOMAIN}admin/auth`, 'POST', userInfo)
    if (response.ok) {
      const data = await response.json();
      const { accessToken, refreshToken, userId } = data;
      localStorage.setItem("jwtAccess", accessToken);
      localStorage.setItem("jwtRefresh", refreshToken);
      dispatch(authAdmin(userId));
      navigate("/admin/dashboard");
      alert("Добро пожаловать!");
    } else {
      alert(`This "${userInfo.email}" is not registered.`);
    }
  }
);

export const fetchGetMe = createAsyncThunk(
  "user/fetchGetMe",
  async function (_, { dispatch }) {
    const token = localStorage.getItem("jwtAccess");
    if (token !== "undefined") {
      const response: Response = await httpRequest(`${PATHDOMAIN}admin/verify`, 'POST', {token})
      const data = await response.json();

      if (data) {
        const { _id } = data;
        dispatch(authAdmin(_id));
      } else {
        const refresh_token = localStorage.getItem("jwtRefresh");
        if (refresh_token !== "undefined") {
          const newToken: Response = await httpRequest(`${PATHDOMAIN}admin/refreshToken`, 'POST', {refresh_token})
          const data = await newToken.json();
          const { accessToken, refreshToken, userId } = data;
          localStorage.setItem("jwtAccess", accessToken);
          localStorage.setItem("jwtRefresh", refreshToken);
          dispatch(authAdmin(userId));
        } else {
          alert("Попробуйте авторизоваться снова!!!");
        }
      }
    } else {
      alert("Попробуйте авторизоваться снова!");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: "",
    status: null,
    error: null,
  },
  reducers: {
    authAdmin(state, action) {
      state.userId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthAdmin.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchAuthAdmin.fulfilled, (state) => {
      state.status = "resolved";
    });
    builder.addCase(fetchGetMe.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchGetMe.fulfilled, (state) => {
      state.status = "resolved";
    });
    builder.addCase(fetchGetMe.rejected, (state) => {
      state.status = "reject";
      state.error = "error";
    });
  },
});

export const { authAdmin } = userSlice.actions;
export default userSlice.reducer;
