import { configureStore } from "@reduxjs/toolkit";
import notasSlice from './reducers/notas'
import notaEdicaoSlice from './reducers/edicao'

const store = configureStore({
    reducer: {
        notas: notasSlice,
        notaEdicao: notaEdicaoSlice
    }
})

export default store