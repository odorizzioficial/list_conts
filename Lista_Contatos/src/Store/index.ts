import { configureStore } from '@reduxjs/toolkit'
import ContatosReducer from './Reducers/Contatos'

const store = configureStore({
  reducer: {
    contatos: ContatosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
