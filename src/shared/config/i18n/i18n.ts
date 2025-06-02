import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// плагины для асинхронной чанками подгрузкой языков
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
// Подключение плагинов
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en', // язык по умолчание
		debug: __IS_DEV__, // вывод в консоль переводов и тд

		interpolation: {
			escapeValue: false,
		},
		// свойство плагина
		backend: {
			// путь до загрузки переводов
			loadPath: '/locales/{{lng}}/{{ns}}.json',
		},
	});

export default i18n;
