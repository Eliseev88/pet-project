// Для асинхронной подрузки страницы (по требованию) (бандл разбивается на чанки)
import { lazy } from 'react';

// для выноса страницы в отдельный чанк
export const MainPageAsync = lazy(() => new Promise((res) => {
	// @ts-expect-error - чтобы не ругался на импорт внутри
	setTimeout(() => res(import('./MainPage')), 1500); // в импорт передаем необходимый компонент (обязательно должен быть экспортирован по дефолту)
}));


// Если компонент передаваемый в импорт не экспортируется по дефолту, тогда можно написать так
// const AboutPageLazy = lazy(() => import('./about-page').then(module=>({default:module.AboutPage})));
