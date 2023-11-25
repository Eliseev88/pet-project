// Провайдер темы представляет собой обычный компонент который вовзращает провайдер определенного контекста


import { FC, useMemo, useState } from 'react';

// импортируем контекст темы, название поля в ЛС и перечисление тем (enum)
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';




// Явное приведение типов (тк ЛС возвращает строку, а нужен тип из перечисления Theme)
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;




interface ThemeProviderProps {
    initialTheme?: Theme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { initialTheme, children } = props;

    // в качестве типа передаем перечисление enum со списком существующих тем на выбор
    const [theme, setTheme] = useState<Theme>(defaultTheme); // по дефолфту устанавливаем тему полученную из ЛС

    // Для того чтоб статичный объект не перерисовывался (на каждый рендер компонента) используем useMemo
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        // в контексте темы вызываем провайдер и оборачиваем в него чилдрен из пропсов (в value передаем значение самого провайдера темы)
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
