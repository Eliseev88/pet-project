// Изначально нода не умеет делать импорты, поэтому нужен вебпак
import { render } from "react-dom";
import { App } from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";

// импортируем конфигурацию i18n (подключается автоматически)
import "shared/config/i18n/i18n";

render(
    // Подключаем роутер
    <BrowserRouter>
        {/* Оборачиваем в провайдер темы (чтобы работали темы и их переключение) */}
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
