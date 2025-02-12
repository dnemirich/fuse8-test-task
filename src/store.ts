import { create } from 'zustand';
import type { CharacterType } from './api/api.ts';


type State = {
  characters: CharacterType[]
  searchQuery: string
  isLoading: boolean

  currentPage: number
  totalPages: number
  apiPage: number

  charactersFound: number
  hasResults: boolean
}

type Actions = {
  updateCharacters: (characters: CharacterType[] | ((prev: CharacterType[]) => CharacterType[])) => void;
  updateSearchQuery: (query: string) => void
  updateLoadingStatus: (status: boolean) => void

  setCurrentPage: (page: number) => void;
  setTotalPages: (pages: number) => void;
  setApiPage: (page: number) => void;

  setCharactersFound: (count: number) => void;
  setHasResults: (hasResults: boolean) => void;
}

export const useStore = create<State & Actions>((set) => ({
  characters: [],
  searchQuery: '',
  isLoading: false,
  currentPage: 1,
  totalPages: 0,
  apiPage: 1,
  charactersFound: 0,
  hasResults: false,
  updateCharacters: (update) =>
    set((state) => ({
      characters: typeof update === 'function' ? update(state.characters) : update.length === 0
        ? []
        : [...state.characters, ...update],
    })),
  updateLoadingStatus: (status) => set({ isLoading: status }),
  updateSearchQuery: (query) => set({ searchQuery: query }),
  setCurrentPage: (page) => set({ currentPage: page }),
  setApiPage: (page) => set({ apiPage: page }),
  setTotalPages: (totalPages) => set({ totalPages }),
  setCharactersFound: (count) => set({ charactersFound: count }),
  setHasResults: (hasResults) => set({ hasResults }),
}));