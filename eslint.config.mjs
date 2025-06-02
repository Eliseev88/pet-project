import js from '@eslint/js';
// плагин для отслеживания отсутсвия переводов
import i18next from 'eslint-plugin-i18next';
// плагина для линтирования импортов
import importPlugin from 'eslint-plugin-import';
// для корректной работы jsx
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tsParser from '@typescript-eslint/parser';

import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';


export default defineConfig([
	// используется каскадный принцип последующий объкет переопределяет предыдущий
	tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	//importPlugin.flatConfigs.recommended,
	i18next.configs['flat/recommended'],
	jsxA11y.flatConfigs.recommended,
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		plugins: { js },
		extends: ['js/recommended'],
		rules: {
			// 1 - warning, 2 - error, 0 - off
			'react/jsx-indent': [2, 'tab'],
			'react/jsx-indent-props': [2, 'tab'],
			// количество отступов для обычных файлов
			indent: [2, 'tab'],
			// для одинарных кавычек
			'quotes': ['error', 'single', { 'avoidEscape': true }],
			// для ;
			'semi': [2, 'always'],
			// расширения в которых jsx разрешен
			'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
			// не ругаться на абсолютные пути
			'import/no-unresolved': 'off',
			// отключить обязательный экспорт по умолчанию
			'import/prefer-default-export': 'off',
			// неиспользуемые переменные
			'no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			// отключаем дефолтные значения пропсов
			'react/require-default-props': 'off',
			// использование jsx без импорта реакта
			'react/react-in-jsx-scope': 'off',
			// спред оператор в пропсах
			'react/jsx-props-no-spreading': 'warn',
			// предпочтительнее использование function declaration
			'react/function-component-definition': 'off',
			// экспорт анонимных компонентов
			'react/display-name': 'warn',
			// плохо работает с тайпскриптом (ругается на enum)
			'no-shadow': 'off',
			// расширение файлов при импорте (не нужно тк резолверы в вебпак)
			'import/extensions': 'off',
			// импортирование dev зависимостей в код
			'import/no-extraneous-dependencies': 'off',
			// запрещает нижние подчеркивания в названиях перменных
			'no-underscore-dangle': 'off',
			// отключить правила переноса строк
			'linebreak-style': 'off',
			// максимальная длина строки
			'max-len': ['off', { ignoreComments: true }],
			// ругаться только на отсутствие переводов внутри jsx
			'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],
			// правило для семанитки вешания собитый клик на дивы
			'jsx-a11y/click-events-have-key-events': 'off',
			// если событие клик висит на диве, то необходимо задать роль (отключаем)
			'jsx-a11y/no-static-element-interactions': 'off',
			// Проверять правила хуков
			//'react-hooks/rules-of-hooks': 'error',
			// проверять зависимости в хуках
			//'react-hooks/exhaustive-deps': 'error',
			// тк используем редакс-тулкит с иммером, то может менять св-ва напрямую
			'no-param-reassign': 'off',
			// чтобы не ругалось на декларацию типов которые не экспортированы явно, но есть в файле .d.ts
			'no-undef': 'off',
			// что не ругалось когда складываешь строки и потенциальный undefined
			'no-unsafe-optional-chaining': 'warn'
		}
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		settings: {
			react: {
				version: 'detect',
			},
		},
		languageOptions: {
			// в новом конфиге указывем парсеры указываются тут
			parser: tsParser,
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				},
				ecmaVersion: 'latest',
				sourceType: 'module'
			},
			// вместо enviroments теперь используются globals (тут указываем глобальные переменные)
			globals: {
				...globals.browser,
				__IS_DEV__: true,
				__API__: true,
				__PROJECT__: true
			}
		}
	}
]);


