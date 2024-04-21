import { create } from "zustand";

type Data = {
  topic: string;
  notes: any;
};

type Store = {
  data: Data[];
  setData: (e: []) => void;
  addData: (e: Data) => void;
};

export const useNotesDataStore = create<Store>()((set) => ({
  data: [],
  setData: (e) => set((state) => ({ data: (state.data = e) })),
  addData: (e) => set((state) => ({ data: [...state.data, e] })),
}));
