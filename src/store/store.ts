import { configureStore } from "@reduxjs/toolkit";
import notasSlice from './reducers/notas'
import notaEdicaoSlice from './reducers/edicao'
import notasSelecionadasSlice from './reducers/notasSelecionadas'

const store = configureStore({
    reducer: {
        notas: notasSlice,
        notaEdicao: notaEdicaoSlice,
        notasSelecionadas: notasSelecionadasSlice
    }
})

export default store