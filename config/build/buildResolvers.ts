import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        // указываем для каких файлов при импорте не нужно указывать расширения (import Component from './component')
        extensions: ['.tsx', '.ts', '.js'],
        // указываем вебпаку что абсолютные пути в приоритете
        preferAbsolute: true,
        // передаем путь до папки src и node_modules (чтобы оттуда тоже абсолютные пути импортились)
        modules: [options.paths.src, 'node_modules'],
        // указываем что для каждого модуля главным файлом является index
        mainFiles: ['index'],
        // если оставить алиасы пустые с текущими настройками, то пути будут вида "pages/*"
        alias: {},
    }
}
