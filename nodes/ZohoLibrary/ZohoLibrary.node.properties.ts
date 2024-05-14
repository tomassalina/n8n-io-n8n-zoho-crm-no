import { INodeProperties } from 'n8n-workflow';
import { EmailResource, EmailOperations, EmailFields } from './resources/Email';

export const ZohoLibraryProperties: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Record',
				value: 'record',
			},
			EmailResource,
		],
		default: 'record',
	},
	// ______EMAIL:
	EmailOperations,
	...EmailFields,
];
