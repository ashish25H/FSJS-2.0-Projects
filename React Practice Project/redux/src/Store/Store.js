import {configureStore} from '@reduxjs/toolkit'
import {counterSlice} from '../Counterslice';


export const Store = configureStore({
    reducer:{
        counter:counterSlice,
    },
})