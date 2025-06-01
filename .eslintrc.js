module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        // для линтирования хуков
        'react-hooks',
    ],
    rules: {
    // 1 - warning, 2 - error, 0 - off
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        // количество отступов для обычных файлов
        indent: [2, 4],
        // расширения в которых jsx разрешен
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        // не ругаться на абсолютные пути
        'import/no-unresolved': 'off',
        // отключить обязательный экспорт по умолчанию
        'import/prefer-default-export': 'off',
        // неиспользуемые переменные
        'no-unused-vars': 'warn',
        // отключаем дефолтные значения пропсов
        'react/require-default-props': 'off',
        // использование jsx без импорта реакта
        'react/react-in-jsx-scope': 'off',
        // спред оператор в пропсах
        'react/jsx-props-no-spreading': 'warn',
        // предпочтительнее использование function declaration
        'react/function-component-definition': 'off',
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
        'react-hooks/rules-of-hooks': 'error',
        // проверять зависимости в хуках
        'react-hooks/exhaustive-deps': 'error',
        // тк используем редакс-тулкит с иммером, то может менять св-ва напрямую
        'no-param-reassign': 'off',
        // чтобы не ругалось на декларацию типов которые не экспортированы явно, но есть в файле .d.ts
        'no-undef': 'off',
        // что не ругалось когда складываешь строки и потенциальный undefined
        'no-unsafe-optional-chaining': 'warn',
    },
    // объявление глобальных переменных
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    // переопределяем правила для определенного типа файлов (убираем проверку для тестов)
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
