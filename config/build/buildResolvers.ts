import { ResolveOptions } from 'webpack';

export function buildResolvers(): ResolveOptions {
    return {
        // указываем для каких файлов при импорте не нужно указывать расширения (import Component from './component')
        extensions: ['.tsx', '.ts', '.js'],
    }
}
