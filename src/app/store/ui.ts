import {create} from 'zustand';

interface UIStore {
  darkMode: boolean;
  mainColor: string;
  secondColor: string;
  thirdColor: string;
  detailsColor: string;
  setDarkMode: () => void;
  setLightMode: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  darkMode: false,
  mainColor: import.meta.env.VITE_MAIN_COLOR,
  secondColor: import.meta.env.VITE_SECOND_COLOR,
  thirdColor: import.meta.env.VITE_THIRD_COLOR,
  detailsColor: import.meta.env.VITE_FOURTH_COLOR,
  setDarkMode: () => set({
    darkMode: true,
    mainColor: import.meta.env.VITE_SECOND_COLOR,
    secondColor: import.meta.env.VITE_MAIN_COLOR,
    thirdColor: import.meta.env.VITE_FOURTH_COLOR,
    detailsColor: import.meta.env.VITE_THIRD_COLOR,
  }),
  setLightMode: () => set({
    darkMode: false,
    mainColor: import.meta.env.VITE_MAIN_COLOR,
    secondColor: import.meta.env.VITE_SECOND_COLOR,
    thirdColor: import.meta.env.VITE_THIRD_COLOR,
    detailsColor: import.meta.env.VITE_FOURTH_COLOR,
  }),
}));
