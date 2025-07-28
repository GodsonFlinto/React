import {createSlice} from "@reduxjs/toolkit"

const cartslice = createSlice({
    name : "cart",
    initialState : [],
    reducers : {
        addItem(state , action){
            state.push(action.payload)
        },
        removeItem(state , action){
            let itemId = action.payload
            let newCart = state.filter( (cartProduct)=> cartProduct.id !== itemId  )
            return newCart
        }
    }
})

export default cartslice.reducer
export let {addItem, removeItem} = cartslice.actions