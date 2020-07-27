import { registerBlockType } from '@wordpress/blocks';
import * as userProfile from './user-profile';

/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */
const registerBlock = ( {
	name,
	settings,
	metadata
}) => {
	const config = {
		...settings,
		...metadata,
	};
	if ( name ) {
		registerBlockType( name, config );
	}
};

/**
 * Registration
 */
const registerBlocks = () => {
	registerBlock( userProfile )
};
registerBlocks();
