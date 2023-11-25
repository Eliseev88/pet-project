// импортируем типизация для аргументов ф-ции конструктора
import { BuildOptions } from "./types/config";

// импортируем типы для девсервера
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';


// в качестве аргументов передаем опции сборки (мод, пути, isDev и тд)
export function buildDevServer (options: BuildOptions): DevServerConfiguration  {
    return {
        port: options.port,
        // автоматически открывать в браузере страницу с приложением
        open: true,
        // Чтобы страница работала при обновлении f5 (ошибка Cannot GET page)
        historyApiFallback: true,
        // для обновления страницы без перезагрузки при внесении изменений в код
        hot: true,
    };
}