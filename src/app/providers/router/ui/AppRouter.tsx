// тк бандл разбивается на чанки то необхоим импорт suspense чтобы обернуть в него асинхронные компоненты
import { Suspense } from "react"

import { Routes, Route } from "react-router-dom"

// импортируем lazy-loading страницы асинхронной подгрузки по требованию
import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"

import { routeConfig } from "shared/config/routeConfig/routeConfig"

const AppRouter = () => {
    return (
        /* асинхронные компоненты необходимо оборачивать в Suspense */
        < Suspense fallback={< div > Loading...</div >}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <div className="page-wrapper">
                                {element}
                            </div>
                        )}
                    />
                ))}
            </Routes>
        </Suspense >
    )
}

export default AppRouter;
