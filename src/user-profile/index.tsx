/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockConfiguration, BlockIcon } from '@wordpress/blocks';
import { attributes } from './block';

import edit from './edit';

//import metadata from './block.json';
const metadata: BlockConfiguration = require('./block.json');

const { name, title, textdomain } = metadata;
// @ts-ignore
const icon: BlockIcon = metadata.icon;

export { metadata, name };

export const settings: Partial< BlockConfiguration< attributes > > = {
	title: __( title, textdomain ),
	icon,
	edit,
	save: () => null,
};
