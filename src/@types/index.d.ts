import { BlockConfiguration } from "@wordpress/blocks";

declare module '*/block.json' {
	const data: BlockConfiguration;
	export default data;
}
