// в node.js есть стандартый модуль path, чтобы не хардкодить пути
// const path = require('path');

// тк изменили язык вебпака с js на ts теперь вместо require может использовать import (он идет в ts по умолчанию)
import path from 'path';

import { Configuration } from 'webpack';

// импортируем тип который типизирует аргументы для ф-ции создании конфига вебпака
import { BuildOptions } from './types/config';

// импортируем ф-ции которые возвращают лоадеры
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

// Configuration - тип который должен возвращать конфигурацию вебпака
export function buildWebpackConfig(options: BuildOptions /* в качестве options принимаем мод, пути, isDev и др */): Configuration {
    // деструкторизируем объект с опциями
    const { paths, mode, isDev } = options;

    return {

        // указваем в каком режиме производить сборку
        mode,

        // стартовая точка приложения
        entry: paths.entry,

        // куда будет делаться сборка
        output: {
            // указываем имя в квадратных скобках для динамического подставления имен (по умолчанию main.js)
            // [contenthash] указываем для подставление хэша чтобы браузер всегда отдавал новый файл а не из кэша
            filename: '[name].[contenthash].js', // имя главного файла в сборки
            path: paths.build,
            clean: true, // для очистки дирректории от старых файлов сборки
        },

        // Подключаем плагины
        plugins: buildPlugins(options),

        // Подключаем лоадеры
        module: {
            // в рулсах конфигурируются лоадеры
            // лоадеры обрабатывают файлы которые выходят за рамки джаваскрипт
            rules: buildLoaders(options),
        },

        // Подключаем резовлеры
        resolve: buildResolvers(options),

        // для создания map для отслеживания в каких именно файлах и ф-ция произошла ошибка при сборке
        devtool: isDev ? 'inline-source-map' : undefined, // Если сборка в режиме дев то подключаем soucemap

        // для запуска девсервера вебпака
        devServer: isDev ? buildDevServer(options) : undefined, // для запуска девсервера только в дев сборки
    };
}
