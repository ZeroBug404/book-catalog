import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {

  },
})

// export const {} = bookSlice.actions

export default bookSlice.reducer