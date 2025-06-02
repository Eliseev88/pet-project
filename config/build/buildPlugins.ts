// тк изменили язык вебпака с js на ts теперь вместо require может использовать import (он идет в ts по умолчанию)

// плагин для генерации html файла сборки
import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { WebpackPluginInstance, ProgressPlugin } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// типы для передачи аргументов в ф-цию констурктора плагинов
import { BuildOptions } from './types/config';


// WebpackPluginInstance - тип для типизации плагинов вебпака
export function buildPlugins ({paths, isDev}: BuildOptions): WebpackPluginInstance[] {
    // порядок плагинов в массиве значения не имеет
    return [
        // Создает в папке build index.html файл и автоматически подключает в нем все файлы с js скриптами
        new HTMLWebpackPlugin({
          // Сюда передаем объект настроек (иначе будет создан index.html c нуля, а не тот который лежит в папке public)
          template: paths.html // задаем путь до исходного шаблон для index.html
        }),
        // Для отслеживания прогресса сборки
        new ProgressPlugin(),

        // Для генерации отдельного css файла при сборке (по умолчанию css лоадер вставлят css внуть js файла)
        new MiniCssExtractPlugin({
          // указываем название файлов и где они будут распологаться
          filename: 'css/[name].[contenthash:8].css',
          // При разбивании файлов на асинхронные будут появляться отедльные файлы стилей для этих чанков
          chunkFilename: 'css/[name].[contenthash:8].css',
        }),

        // для прокидывания глобальных переменных в само приложение
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            // __API__: JSON.stringify(apiUrl),
            // __PROJECT__: JSON.stringify(project),
        }),

        // для обновления страницы без перезагрузки при внесении изменений стили
        new webpack.HotModuleReplacementPlugin(),
      ]
}
