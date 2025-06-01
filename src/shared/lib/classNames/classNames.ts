// собственная реализация библиотеки classNames

// тип для аргумента модс
// используем Record - это специальный тип в ТС задающие тип ключа и тип значения
type Mods = Record<string, boolean | string>

// в качестве аргументов принимаем класс, далее объект с модами (где ключ название класса, а значение булеан флаг, если флаг true, то класс добавляем динамически)
// additional - это объект дополнительных классов
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean), // фильтруем тк в массив могут прилетать undefined
        // фильтруем классы из mods чтобы оставить только классы со значением true
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}
