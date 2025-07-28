import {configureStore} from "@reduxjs/toolkit"
import cartsliceReducer from './cartslice'

export const store = configureStore({
    reducer : {
        cart : cartsliceReducer
    }
})
