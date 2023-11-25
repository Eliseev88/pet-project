// файл для глобальной декларации типов


// для того чтоб css модули работали с тайпскриптом
declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}
