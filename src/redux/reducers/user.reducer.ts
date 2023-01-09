import { createSlice } from '@reduxjs/toolkit';
import { emptyUser, User } from '@/models/user.type';

export const userSlice = createSlice({
  name: 'healt',
  initialState: emptyUser,
  reducers: {
    createUser: (_, action) => {
      return action.payload;
    },
    modifyUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => {
      return emptyUser;
    }
  }
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
