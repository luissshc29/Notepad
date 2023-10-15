import { createSlice } from "@reduxjs/toolkit";

export interface NotaType {
    id: number
    titulo: string,
    conteudo: string,
}

const initialState: NotaType[] = [
    {
        titulo: 'Seja bem-vindo(a)!',
        conteudo: 'Comece adicionando uma nota!',
        id: 1
    }
]

const notasSlice = createSlice({
    name: 'Notas',
    initialState,
    reducers: {
        adicionaNota: (state, {payload}) => {
            if(state.find(item => item.id === payload.id)) {
                const newState = state.filter(item => item.id !== payload.id)
                return [
                    ...newState,
                    payload
                ]
            }
            return [
                ...state,
                payload
            ]
        },
        deletaNota: (state, {payload}) => {
            const index = state.findIndex(item => item.id === payload.id)
            state.splice(index, 1)
        },

    }
})

export const { adicionaNota, deletaNota } = notasSlice.actions

export default notasSlice.reducer