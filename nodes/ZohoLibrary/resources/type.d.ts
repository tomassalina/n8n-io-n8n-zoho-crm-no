import { INodePropertyOptions, INodeProperties } from 'n8n-workflow';

export interface Resource {
	name: string;
	value: string;
}
export type Operation = {
	name: INodePropertyOptions['name'];
	value: INodePropertyOptions['value'];
	action: INodePropertyOptions['action'];
};
export type Field = INodeProperties;

export type ZohoLibraryResource = 'core' | 'record' | 'email' | 'attachment';
