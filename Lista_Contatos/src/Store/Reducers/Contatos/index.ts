import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../../Models/Contatos'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 0,
      nome: 'Alexandre Odorizzi',
      email: 'odorizzi@gmail.com',
      telefone: 955555555
    },
    {
      id: 1,
      nome: 'Douglas Odorizzi',
      email: 'dougdorizzi@gmail.com',
      telefone: 955555555
    },
    {
      id: 2,
      nome: 'Amanda Odorizzi',
      email: 'amandao@gmail.com',
      telefone: 955555555
    },
    {
      id: 3,
      nome: 'Mariany Odorizzi',
      email: 'mari@gmail.com',
      telefone: 955555555
    },
    {
      id: 4,
      nome: 'Malu Odorizzir',
      email: 'malu@gmail.com',
      telefone: 955555555
    },
    {
      id: 5,
      nome: 'Teste',
      email: 'teste@gmail.com',
      telefone: 955555555
    }
  ]
}

const ContatosReducers = createSlice({
  name: 'contato',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((c) => c.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const filtrarIndex = state.itens.findIndex(
        (item) => item.id === action.payload.id
      )
      if (filtrarIndex >= 0) {
        state.itens[filtrarIndex] = action.payload
        alert('Contato Editado !')
      }
    },
    salvar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const verificaContatoExiste = state.itens.find(
        (item) => item.telefone === action.payload.telefone
      )
      if (verificaContatoExiste) {
        alert('Esse Telefone de contato já existe')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]

        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
        alert('Contato Cadastrado!')
      }
    }
  }
})

export const { remove, editar, salvar } = ContatosReducers.actions

export default ContatosReducers.reducer
