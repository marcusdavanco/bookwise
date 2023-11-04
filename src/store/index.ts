import { create } from 'zustand'

interface SearchStoreState {
  searchArgument: string
  setSearchArgument: (newSearchArgument: string) => void
}

export const useSearchStore = create<SearchStoreState>((set) => ({
  searchArgument: '',
  setSearchArgument: (newSearchArgument) =>
    set({ searchArgument: newSearchArgument }),
}))
