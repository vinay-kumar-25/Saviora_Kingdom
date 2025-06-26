import { configureStore } from "@reduxjs/toolkit";
import notiireducer from '../js/slices'

export const store = configureStore({
reducer:{ 
    notii: notiireducer,
}
})

export default store