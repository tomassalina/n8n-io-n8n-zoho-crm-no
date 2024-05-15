import { INodeProperties } from 'n8n-workflow';
import { CoreResource, CoreOperations } from './resources/Core';
import { EmailResource, EmailOperations, EmailFields } from './resources/Email';

export const ZohoLibraryProperties: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			CoreResource,
			{
				name: 'Record',
				value: 'record',
			},
			EmailResource,
		],
		default: 'record',
	},
	// ______CORE:
	CoreOperations,

	// ______EMAIL:
	EmailOperations,
	...EmailFields,
];
