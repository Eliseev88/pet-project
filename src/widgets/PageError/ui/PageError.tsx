import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import cl from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		window.location.reload();
	};

	return (
		<div className={classNames(cl.PageError, {}, [className])}>
			<p>{t('Произошла непредвиденная ошибка')}</p>
			<Button type="button" onClick={reloadPage}>{t('Обновить страницу')}</Button>
		</div>
	);
};