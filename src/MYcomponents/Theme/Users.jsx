import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: 'user',
  initialState: {
    items: [],
    totalPrise: 0,
  },

  reducers: {
    setBalance(state, action) {
      state.totalPrise = Number(action.payload)
    },

    buyItem(state, action) {
      const price = Number(action.payload.prise)

      if (state.totalPrise >= price) {
        state.items.push(action.payload)
        state.totalPrise -= price
      }
    },

    sellItem(state, action) {
      const price = Number(action.payload.prise)
      state.items.push(action.payload)
      state.totalPrise += price
    },
  },
})


export const { setBalance, buyItem, sellItem } = userSlice.actions
export default userSlice.reducer
