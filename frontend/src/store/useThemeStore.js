import {create} from 'zustand';

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("connect-theme") || "coffee",
    setTheme: (theme) => {
        localStorage.setItem("connect-theme", theme);
        set({theme});
    }
}));