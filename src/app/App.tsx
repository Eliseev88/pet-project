import './styles/index.scss';

import { AppRouter } from './providers/router';

// импортируем кастомный хук для получения и переключения темы
import { useTheme } from 'app/providers/ThemeProvider';
// импортируем кастомную библиотеку для работы с классами css
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';


export function App() {

	// с помощью кастомного хука useTheme получаем текующую тему
	const {theme} = useTheme();

	return (
	// в classNames передаем основной класс компонтонента и допольнотельный класс темы
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback='' /* тк используем i18n и он асинхронно (http backend пакет) подгружает языки, то необходимо обернуть в suspense */>
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
}
