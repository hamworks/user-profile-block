import { registerBlockType, BlockConfiguration } from '@wordpress/blocks';
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
	metadata,
}: {
	name: string;
	settings: Partial< BlockConfiguration >;
	metadata: Partial< BlockConfiguration >;
} ) => {
	// @ts-ignore
	const config: BlockConfiguration = {
		...settings,
		...metadata,
	};
	console.log( name );
	registerBlockType( name, config );
};

/**
 * Registration
 */
const registerBlocks = () => {
	[ userProfile ].forEach( registerBlock );
};
registerBlocks();
