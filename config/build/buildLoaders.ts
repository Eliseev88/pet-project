// импортируем этот плагин для того чтобы взять из него лоадер необходимый для создания отдельных css файлов при сборке
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';

// импортируем типы для аргументов ф-ции конструктора
import { BuildOptions } from './types/config';

// RuleSetRule - специальный тип для лоадеров
export function buildLoaders(options: BuildOptions): RuleSetRule[] {
    // порядок при котором лоадеры возвращаются в массиве имеет значение!

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i, // можно добавить расширение для шрифтов
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    // если бы не использовали ts (тайпскипт-лоадер) то для работы с реакт и jsx нужен babel
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/, // настраиваем регулярку на поиск tsx файлов
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                // плагин для поиска ключей перевода в приложении (t('Главная')) при сборке и вынесении их в отдельные файлы
                    ['i18next-extract', {
                        locales: [
                            'en',
                            'ru',
                        ],
                        keyAsDefaultValue: true,
                    }],
                ],
            },
        },
    };

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
    };

    // Если не используем тайпскрипт, то для обычного jsx нужен babel-loader (если бы писали на нативном js)
    const typescriptLoader = {
        test: /\.tsx?$/, // в регулярке указываем расширение файлов которые необходимо пропустить через лоадер
        use: 'ts-loader', // указываем лоадер который будет обрабатывать эти файлы
        exclude: /node_modules/,
    };

    return [
        fileLoader,
        svgLoader,
        // должен идти строго перед тайпспритлоадер
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
