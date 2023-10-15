import { createSlice } from "@reduxjs/toolkit";
import { NotaType } from "./notas";

const initialState: NotaType[] = []

const notaEdicaoSlice = createSlice({
    name: 'NotaEmEdição',
    initialState,
    reducers: {
        editaNota: (state, {payload}) => {
            return [
                payload
            ]
        },
        removeEdicaoNota: (state) => {
            return []
        }
    }
})

export const { editaNota, removeEdicaoNota } = notaEdicaoSlice.actions

export default notaEdicaoSlice.reducer