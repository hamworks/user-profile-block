import * as React from 'react';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { BlockEditProps } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import {
	Disabled,
	SelectControl,
	PanelBody,
	Placeholder,
} from '@wordpress/components';
//@ts-ignore
import { ServerSideRender } from '@wordpress/editor';
import metadata from './block.json';
import { attributes } from './block';

type Author = {
	avatar_urls: Record< number, string >;
	description: string;
	id: number;
	link: string;
	meta: any;
	name: string;
	slug: string;
	url: string;
};

const Edit: React.FC< BlockEditProps< attributes > > = ( {
	className,
	attributes,
	setAttributes,
} ) => {
	const { userId } = attributes;
	const authors: Author[] = useSelect(
		( select ) => select( 'core' ).getAuthors() || [],
		[]
	);
	const userControl = (
		<SelectControl
			onChange={ ( userId ) => {
				setAttributes( { userId: Number( userId ) } );
			} }
			value={ `${ userId }` }
			options={ [
				{
					value: '0',
					label: __( 'Select user' ),
				},
				...authors.map( ( { id, name, slug } ) => ( {
					value: `${ id }`,
					label: `${ name } (${ slug })`,
				} ) ),
			] }
		/>
	);
	return (
		<>
			<InspectorControls>
				<PanelBody>{ userControl }</PanelBody>
			</InspectorControls>
			{ userId ? (
				<Disabled>
					<ServerSideRender
						className={ className }
						block={ metadata.name }
						attributes={ attributes }
					/>
				</Disabled>
			) : (
				<Placeholder
					icon="admin-users"
					label="User Profile"
					instructions="Select user."
				>
					{ userControl }
				</Placeholder>
			) }
		</>
	);
};
export default Edit;
