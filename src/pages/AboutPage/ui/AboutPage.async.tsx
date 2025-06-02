// Для асинхронной подрузки страницы (по требованию) (бандл разбивается на чанки)
import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((res) => {
    // @ts-ignore
    // с помощью таймаута делаем искуственную задержку
    setTimeout(() => res(import('./AboutPage')), 1500); // в импорт передаем необходимый компонент (обязательно должен быть экспортирован по дефолту)
}));


// Если компонент передаваемый в импорт не экспортируется по дефолту, тогда можно написать так
// const AboutPageLazy = lazy(() => import('./about-page').then(module=>({default:module.AboutPage})));
