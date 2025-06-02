import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

import { RouteProps } from 'react-router-dom';

// список роутов
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

// для каждого маршрута указываем url 
export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
};

// объявляем роуты (маршрут и компонент)
export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />, // в качестве элемента передаем не саму сраницy а lazy компонент с ней
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    }
};
