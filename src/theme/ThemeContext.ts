import { createContext } from 'react';

// перечисление существующих тем (в качестве значений используем название css классов)
export enum Theme {
    LIGHT = 'app_light_theme',
    DARK = 'app_dark_theme',
    ORANGE = 'app_orange_theme',
}

// интерфейс для контекста темы
export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void; // в качестве значений принимаем только поля из перечисления Theme
}

// для использования темы в разных местах приложения (компонентах) создаем контекст темы и в качестве дженерика передаем интерфейс контекста темы
export const ThemeContext = createContext<ThemeContextProps>({});

// для сохрания последнего выбранного значения темы в Локал Сторэдж создаем отдельный поле
export const LOCAL_STORAGE_THEME_KEY = 'theme';
