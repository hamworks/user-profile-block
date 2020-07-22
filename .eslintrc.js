const defaultConfig = require( '@wordpress/scripts/config/.eslintrc.js' );
module.exports = {
	...defaultConfig,
	extends: [
		...defaultConfig.extends,
		'plugin:@wordpress/eslint-plugin/recommended',
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
	]
};
