import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
	const [error, setError] = useState(false);

	const { t } = useTranslation();

	const throwError = () => {
		setError(true);
	};

	useEffect(() => {
		if (error) throw new Error();
	}, [error]);

	return (
		<Button onClick={throwError} theme={ThemeButton.CLEAR_INVERTED}>
			{t('Выкинуть ошибку')}
		</Button>
	);
};
