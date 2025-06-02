import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

// изначально тс ругается на импорт модулей, поэтому необходимо явно задекларировать этот тип (файл global.d.ts)
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
	const {t} = useTranslation();

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={cls.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
					{t('Главная')}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
					{t('О сайте')}
				</AppLink>
			</div>
		</div>
	);
};
