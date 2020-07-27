/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import edit from './edit';

import metadata from './block.json';

const { name, title, textdomain, icon } = metadata;

export { metadata, name };

export const settings = {
	title: __( title, textdomain ),
	icon,
	edit,
	save: () => null,
};
