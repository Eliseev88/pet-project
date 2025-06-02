// Кастомный хук для получения и переключения темы в любой точке приложения

import { useContext } from 'react';

// импортируем контекст темы для получения его в компоненте через хук useContext
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';


// интерфейс который определяет какие данные возвращает этот хук
interface UseThemeResult {
    toggleTheme: () => void; // ф-ция переключение темы
    theme: Theme; // сама тема
}

export function useTheme(): UseThemeResult {

	// получаем текущую тему из контекста темы
	const {theme, setTheme} = useContext(ThemeContext);

	const toggleTheme = () => {
		// устанавливаем выбранную тему
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
		setTheme(newTheme);

		// записываем выбранную тему в ЛС
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return {
		theme,
		toggleTheme,
	};
}
