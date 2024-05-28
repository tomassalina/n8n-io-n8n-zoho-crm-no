import { INodeProperties } from 'n8n-workflow';
import { CoreResource, CoreOperations } from './resources/Core';
import { EmailResource, EmailOperations, EmailFields } from './resources/Email';
import { RecordResource, RecordOperations, RecordFields } from './resources/Record';

export const ZohoLibraryProperties: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [CoreResource, RecordResource, EmailResource],
		default: '',
	},
	// _____CORE:
	CoreOperations,

	// _____RECORD:
	RecordOperations,
	...RecordFields,

	// _____EMAIL:
	EmailOperations,
	...EmailFields,
];
