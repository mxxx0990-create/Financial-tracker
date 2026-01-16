import { createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
    name: 'theme',
    initialState: '🌙',
   
    reducers: {
        toggelTheme(state){
            return state === '🌙' ? '☀️' : '🌙'


        }

    }
})

export const {toggelTheme} = themeSlice.actions
export default themeSlice.reducer