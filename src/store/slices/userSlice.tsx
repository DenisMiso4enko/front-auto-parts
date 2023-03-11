import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//email: adminAvda@gmail.com
//pass: fff400420757

export const fetchAuthAdmin = createAsyncThunk(
  "user/fetchAuthAdmin",
  async function (action: any, { dispatch }) {
    const { userInfo, navigate } = action;
    const response: Response = await fetch("http://localhost:8888/admin/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(userInfo),
    });
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
      const response: Response = await fetch(
        "http://localhost:8888/admin/verify",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ token }),
        }
      );
      const data = await response.json();
      // console.log("response", data);
      console.log(typeof data);
      //response !== null
      if (data) {
        //! const data = await response.json()
        // const { userId } = data;
        console.log(data);
        // dispatch(authAdmin(userId));
        console.log("access OK");
      } else {
        console.log("тут должен быть запрос на refresh");
        const refresh_token = localStorage.getItem("jwtRefresh");
        if (refresh_token !== "undefined") {
          const newToken: Response = await fetch(
            "http://localhost:8888/admin/refreshToken",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json;charset=utf-8",
              },
              body: JSON.stringify({ refresh_token }),
            }
          );
          const data = await newToken.json();
          const { accessToken, refreshToken, userId } = data;
          localStorage.setItem("jwtAccess", accessToken);
          localStorage.setItem("jwtRefresh", refreshToken);
          dispatch(authAdmin(userId));
          alert("refresh OK");
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
    login: "Admin",
    status: null,
    error: null,
  },
  reducers: {
    authAdmin(state, action) {
      state.login = action.payload;
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
