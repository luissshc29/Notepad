import { createSlice } from "@reduxjs/toolkit";

const initialState: number[] = []

const notasSelecionadasSlice = createSlice({
    name: 'Notas selecionadas',
    initialState,
    reducers: {
        selecionaNota: (state, {payload}) => {
            return [
                ...state,
                payload
            ]
        },
        desselecionaNota: (state, {payload}) => {
            const newState = state.filter(item => item !== payload)
            return newState
        },
        cancelaSelecoes: (state) => {
            return initialState
        }
    }
})

export const { selecionaNota, desselecionaNota, cancelaSelecoes } = notasSelecionadasSlice.actions

export default notasSelecionadasSlice.reducer