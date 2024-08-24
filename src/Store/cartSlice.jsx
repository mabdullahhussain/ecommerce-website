import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action) => {
            state.cart.splice(action.payload, 1)
        },
        increaseQuantity: (state, action) => {
            const { index } = action.payload;
            if (state.cart[index]) {
              state.cart[index].quantity = (state.cart[index].quantity || 1) + 1;
            }
          },
          decreaseQuantity: (state, action) => {
            const { index } = action.payload;
            if (state.cart[index] && state.cart[index].quantity > 1) {
              state.cart[index].quantity -= 1;
            }
          },
    }
})

export const { addToCart, removeFromCart , increaseQuantity ,decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer
