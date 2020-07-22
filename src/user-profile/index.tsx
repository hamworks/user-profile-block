/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { BlockConfiguration } from '@wordpress/blocks';
import { attributes } from './block';

import edit from './edit';
import metadata from './block.json';

const { name } = metadata;
export { metadata, name };

export const settings: Partial< BlockConfiguration< attributes > > = {
	title: __( 'User Profile', 'user-profile-block' ),
	icon: 'admin-users',
	edit,
	save: () => null,
};
