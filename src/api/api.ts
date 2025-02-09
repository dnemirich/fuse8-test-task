import axios from 'axios';

export const api = {
  getAllCharacters(params: { name: string , page: number}) {
    return axios.get<ResponseType>('https://rickandmortyapi.com/api/character', {
      params: params,
    });
  },
};

export type StatusType = 'Dead' | 'Alive' | 'unknown'

export type CharacterType = {
  id: number
  name: string
  status: StatusType
  url: string
  created: string
}

type ResponseType = {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  },
  results: CharacterType[]
}

