import { Link } from 'react-router-dom';
import './styles/index.scss';

// импортируем кастомный хук для получения и переключения темы
import { useTheme } from 'app/providers/ThemeProvider';
// импортируем кастомную библиотеку для работы с классами css
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/router';

export function App() {
    // с помощью кастомного хука useTheme получаем текующую тему
    const { theme } = useTheme();

    return (
        // в classNames передаем основной класс компонтонента и допольнотельный класс темы
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
