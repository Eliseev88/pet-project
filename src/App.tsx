import { Route, Routes, Link } from "react-router-dom";
import './styles/index.scss';

// импортируем lazy-loading страницы асинхронной подгрузки по требования 
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

// тк бандл разбивается на чанки то необхоим импорт suspense чтобы обернуть в него асинхронные компоненты
import { Suspense, useContext } from "react";

// импортируем кастомный хук для получения и переключения темы
import { useTheme } from "./theme/UseTheme";
// импортируем кастомную библиотеку для работы с классами css
import { classNames } from "./helpers/classNames/classNames";


export function App() {

    // с помощью кастомного хука useTheme получаем текующую тему и ф-цию переключения темы
    const {theme, toggleTheme} = useTheme();

    return (
        
        // в classNames передаем основной класс компонтонента и допольнотельный класс темы
        <div className={classNames('app', {}, [theme])}>

            <button onClick={toggleTheme}>TOGGLE</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            {/* асинхронные компоненты необходимо оборачивать в Suspense */}
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* в качестве элемента передаем не саму сраницы а lazy компонент с ней */}
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                    <Route path={'/'} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    )
}
