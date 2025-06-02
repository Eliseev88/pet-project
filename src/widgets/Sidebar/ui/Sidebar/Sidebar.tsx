import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false) // передаем изначальное состояние сайдабара (не свернутый)

    const onToggle = () => {
        setCollapsed(prev => !prev); // передаем колбек ф-цию которая принимает предыдущее состояние
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed /* навешиваем класс сollapsed если collapsed = true */}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}
