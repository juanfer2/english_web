import { createSlice } from '@reduxjs/toolkit';

interface Healt {
  status: string;
}

export const healtSlice = createSlice({
  name: 'healt',
  initialState: { status: 'PENDING...' },
  reducers: {
    updateStatus: (state: Healt) => {
      state.status = 'OK';
    }
  }
});

export const { updateStatus } = healtSlice.actions;
export default healtSlice.reducer;
