export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    // путь до входной точки
    entry: string;
    // путь до папки со сборкой
    build: string;
    // путь до html файла в папке public
    html: string;
    // путь до папки src
    src: string;
}

// типизируем переменные окружения значения которых передаем при запуске скриптов
export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

// Интерфейс описания опций сборки (передается как аргумент в ф-ции конструкторы вебпака)
export interface BuildOptions {
    mode: BuildMode; // используемый мод для типа сборки (прод или дев)
    paths: BuildPaths; // пути которые исользуются в сборки,
    isDev: boolean;
    port: number;
}
