import { configureStore } from '@reduxjs/toolkit'
import loader from './slice/loader.slice'
import product from './slice/products.slice'
import dark from './slice/dark.slice'
import user from './slice/user.slice'

export default configureStore ({
    reducer: {
        loader,
        product,
        dark,
        user
    }
})