import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registration  = createAsyncThunk(
	'users/registration',
	async (payload) => {
		const response = await fetch('https://anaalamed-todo.herokuapp.com/api/user/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        firstName: payload.first_name,
        lastName: payload.last_name, 
        country: payload.country, 
        email: payload.email, 
        password: payload.password
      })
		});

		if (response.ok) {
			const user = await response.json();
			return { user };
		}
	}
);

export const login  = createAsyncThunk(
	'users/login',
	async (payload) => {
    // console.log(payload);
		const response = await fetch('https://anaalamed-todo.herokuapp.com/api/user/signin', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
        email: payload.email, 
        password: payload.password
      })
		});
		if (response.ok) {
			const user = await response.json();
			return { user };
		}
	}
);

export const logout  = createAsyncThunk(
  'users/logout',
  async (payload) => {
    const response = await fetch('https://anaalamed-todo.herokuapp.com/api/user/logout', {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			return { message: "log out successfully" };
		}
  }
)


const users_slice = createSlice({
  name: "users",
  initialState: {
    users: [],
    me: {},
    loggedIn: false
  },
  reducers: {

  },
  extraReducers: {
    // --------------- other Async -----------------------
    [registration.fulfilled]: (state, action) => {
      alert("registration success");
      state.users.push(action.payload);
    },
    [login.fulfilled]: (state, action) => {
      state.me = action.payload.user;
      state.loggedIn = true;
    },
    [logout.fulfilled]: (state, action) => {
      state.me = {};
      state.loggedIn = false;
    },

  }
});

export default users_slice.reducer;
export const {} = users_slice.actions;





