// импортируем этот плагин для того чтобы взять из него лоадер необходимый для создания отдельных css файлов при сборке
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

// импортируем типы для аргументов ф-ции конструктора
import { BuildOptions } from './types/config';

// RuleSetRule - специальный тип для лоадеров
export function buildLoaders(options: BuildOptions): RuleSetRule[] {


    // порядок при котором лоадеры возвращаются в массиве имеет значение!


    const cssLoader = {
        test: /\.s[ac]ss$/i, // регулярка настроена на saas и scss файлы именно для препроцессора
        // тут передаем лоадеры в определнном порядке
        use: [
            // 'style-loader', // создает стили из JS строк (в прод сборке не нужен тк используем mini-css-extractor, который создает отдельные css файлы)

            // при дев сборке используем стайл лоадер а если прод используем мини css экстрактор лоадер
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

            // Лоадеры в use можно передавать в виде объектов, чтобы указать им допольнительные свойства
            {
                loader: 'css-loader', // транспилирует css в CommonJS

                options: {
                    // modules включает поддержку css модулей и дополнительные настройки для них
                    modules: {
                        // для того чтоб переименовывались только css.module файлы
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        // указываем как будет формироваться названия файлов
                        localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    },
                },
            },

            'sass-loader', // компилирует saas в сss
        ],
    }

    // Если не используем тайпскрипт, то для обычного jsx нужен babel-loader (если бы писали на нативном js)
    const typescriptLoader = {
        test: /\.tsx?$/, // в регулярке указываем расширение файлов которые необходимо пропустить через лоадер
        use: 'ts-loader', // указываем лоадер который будет обрабатывать эти файлы
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader
    ]
}