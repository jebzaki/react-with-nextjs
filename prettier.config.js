const styleguide = require('@vercel/style-guide/prettier');

module.exports = {
	...styleguide,
	tabWidth: 2,
	tabSize: 2,
	useTabs: true,
	printWidth: 120,
	plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
};
