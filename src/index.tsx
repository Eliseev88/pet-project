// Изначально нода не умеет делать импорты, поэтому нужен вебпак
import { render } from "react-dom";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

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
