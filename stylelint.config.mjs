/** @type {import('stylelint').Config} */
export default {
	extends: ['stylelint-config-standard-scss'],
	rules: {
		// отключаем кебаб кейс
		'selector-class-pattern': null,
		'color-function-alias-notation': null
	}
};