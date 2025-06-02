import { useTranslation } from 'react-i18next';

const AboutPage = () => {
	const { t } = useTranslation('about'); // передаем название namespace от куда тянуть перевод (по умолчанию translation.json)

	return (
		<div>{t('О сайте')}</div>
	);
};

export default AboutPage;
