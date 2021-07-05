import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import {getTodos} from "../../api/todos.api";

export const registration  = createAsyncThunk(
	'users/registration',
	async (payload) => {
		const response = await fetch('http://localhost:7000/api/user/signup', {
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
    console.log(payload);
		const response = await fetch('http://localhost:7000/api/user/signin', {
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


// export const deleteTodoAsync = createAsyncThunk(
//   'todos/deleteTodoAsync',
//   async(payload) => {
//       const response = await fetch(`http://localhost:7000/api/users/${payload._id}`, {
//         method: "DELETE",
//     });
//     if (response.ok) {
//       return {id: payload.id};
//     }
//   }
// );

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
      state.users.push(action.payload);
    },
    [login.fulfilled]: (state, action) => {
      state.me = action.payload.user;
      state.loggedIn = true;
    },

    // [deleteTodoAsync.fulfilled]: (state, action) => {
    //   console.log(action.payload);
    //   const index = state.todo.findIndex(item => item._id === action.payload._id);
    //   console.log(index);
    //   state.todo.splice(index,1);
    // }
  }
});

export default users_slice.reducer;
export const {} = users_slice.actions;

// -------------- API getTodos ---------------
// const { fetch_started, fetch_failed, data_ready } = users_slice.actions;
// export const fetchTodos = () => async (dispatch) => {
//   try {
//     // dispatch(fetch_started());
//     const data = await getTodos();
//     if (!data) throw new Error("Quote data came back with no results");
//     dispatch(data_ready(data));
//   } catch (err) {
//     dispatch(fetch_failed("The quotes data is unavailable at the moment"));
//   }
// };




