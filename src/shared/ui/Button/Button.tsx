import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

// темы для кнопки
export enum ThemeButton {
    CLEAR = 'clear'
}

// расширяем стандартными типами из реакта чтобы были атрибуты onClick, disabled и тд
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

// указываем что это FC (функциональный компонент) чтобы могли использовать пропс сhildren и в качестве дженнерика передаем интерфейс ButtonProps
export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
