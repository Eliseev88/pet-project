import path from 'path';

export default {
	// объявляем глобальные переменные
	// Должны называться также, как и называются те переменные которые задаем в вебпаке
	globals: {
		__IS_DEV__: true,
		__API__: '',
		__PROJECT__: 'jest',
	},
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: [
		'\\\\node_modules\\\\',
	],
	moduleDirectories: [
		'node_modules',
		// Чтобы в тестах работали абсолютные импорты
		'src',
	],
	// Чтобы в тестах работали абсолютные импорты
	modulePaths: [
		'<rootDir>src',
	],
	// расширение файлов для модулей
	moduleFileExtensions: [
		'js',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node',
	],
	// тк конфиг лежит не в корне проекта, то необходимо указать путь до корневой папки
	rootDir: '../../',
	// Чтобы работал jest-dom указываем путь до файла настроек
	//setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
	// чтобы jest не выдавал ошибку на css module
	moduleNameMapper: {
		'\\.(s?css)$': 'identity-obj-proxy',
		// Для корректного импорта svg при тестировании компонентов
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
	},
	// указываем регулярные выражение по которым находим файлы с тестами
	testMatch: [
		'<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
	],
};
