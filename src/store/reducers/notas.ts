import { createSlice } from "@reduxjs/toolkit";

export interface NotaType {
    id: number
    titulo: string,
    conteudo: string,
    cor: string
}

const initialState: NotaType[] = [{
    id: 1,
    titulo: 'Seja bem-vindo(a)!',
    conteudo: 'Comece adicionando uma nota!',
    cor: '#121212' 
}]

const notasSelecionadas: number[] = []

const notasSlice = createSlice({
    name: 'Notas',
    initialState,
    reducers: {
        adicionaNota: (state, {payload}) => {
            if(state.find(item => item.id === payload.id)) {
                const newState = state.filter(item => item.id !== payload.id)
                localStorage.setItem('notas', JSON.stringify([
                    ...newState,
                    payload
                ]))
                return [
                    ...newState,
                    payload
                ]
            }
            localStorage.setItem('notas', JSON.stringify([
                ...state,
                payload
            ]))
            return [
                ...state,
                payload
            ]
        },
        deletaNota: (state, {payload}) => {
            console.log(payload)
            if(payload.length === 1) {
                const index = state.findIndex(item => item.id === payload[0].id)
                state.splice(index, 1)
                localStorage.setItem('notas', JSON.stringify(state))
            } else {
                payload.map((item: number) => {
                    var index = state.findIndex(nota => nota.id === item)
                    state.splice(index, 1)
                    localStorage.setItem('notas', JSON.stringify(state))
                })
            }
        },
        loadStorage: (state, {payload}) => {
            if (payload.length > 0) {
                return [...payload]
            }
            return [
                ...state
            ]
        },
        selecionaNota: (state, {payload}) => {
            return [
                ...notasSelecionadas,
                payload
            ]
        },
        deselecionaNota: (state, {payload}) => {
            const index = notasSelecionadas.find(payload)
            index && notasSelecionadas.splice(index, 1)
        },
        cancelaSelecoes: () => {
            
        }
    }
})

export const { adicionaNota, deletaNota, loadStorage } = notasSlice.actions

export default notasSlice.reducer