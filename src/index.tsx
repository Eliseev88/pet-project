// Изначально нода не умеет делать импорты, поэтому нужен вебпак
import { render } from 'react-dom';
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';

// импортируем конфигурацию i18n (подключается автоматически)
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

render(
	// Подключаем роутер
	<BrowserRouter>
		{/* оборачиваем в классовый компонент ErrorBoundary чтобы приложение отлавливало ошибки */}
		<ErrorBoundary>
			{/* Оборачиваем в провайдер темы (чтобы работали темы и их переключение) */}
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
	document.getElementById('root')
);
