// файл для глобальной декларации типов

// для того чтоб css модули работали с тайпскриптом
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

// чтобы работали иморты картинок
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
    import React from 'react';

    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>; // специальноые типы пропсов для svg (fill, width и тд)
    export default SVG;
}

// декларируем глобальные переменные
declare const __IS_DEV__: boolean;
