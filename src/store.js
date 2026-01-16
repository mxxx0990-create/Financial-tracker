import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './MYcomponents/Theme/ToggelTheme.jsx';
import userReducer from './MYcomponents/Theme/Users.jsx';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        user: userReducer
    }
})
