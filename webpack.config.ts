// Файл конфигурации вебпак сборки

import webpack from 'webpack';

// в node.js есть стандартый модуль path, чтобы не хардкодить пути
//const path = require('path');

// тк изменили язык вебпака с js на ts теперь вместо require может использовать import (он идет в ts по умолчанию)
import path from 'path';

// импортируем типизацию путей для сборки
import { BuildEnv, BuildPaths } from './config/build/types/config';

// ипомртируем ф-цию которая возвращает объект с конфигом вебпака
import { buildWebpackConfig } from './config/build/buildWebpackConfig';



// для того чтоб вебпак видел переменные окружения (env которые прописаны в скриптах package.json) необхоимо возвращать не сам конфиг, а фунцию
// которая принимает объект с этими переменными и возвращет сам конфиг вебпака
export default (env: BuildEnv) => {

	// объявляем список путей для передачи в качестве аргумента в ф-цию конструктора конфига вебпака
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'), // склеиваем участки пути (дирнейм папка в которой находимся)
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};



	// в первую очередь при сборке пытаемся получить значения из переменной окружения (в скриптазх в package.json) при выполенини команды webpack server --env
	const mode = env.mode || 'development';

	// порт девсервера вебпака
	const PORT = env.port || 3000;

	// если делаем сборку в режиме разработчика значит isDev = true
	const isDev = mode === 'development';


	// Configuration - типизация конфигурационного файла вебпака чтобы работал автокомплит
	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
	});

	return config;
};
