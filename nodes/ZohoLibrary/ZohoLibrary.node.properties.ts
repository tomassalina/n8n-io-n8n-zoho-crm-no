import { INodeProperties } from 'n8n-workflow';
import { CoreResource, CoreOperations } from './resources/Core';
import { EmailResource, EmailOperations, EmailFields } from './resources/Email';
import { RecordResource, RecordOperations, RecordFields } from './resources/Record';
import { AttachmentFields, AttachmentOperations, AttachmentResource } from './resources/Attachment';

export const ZohoLibraryProperties: INodeProperties[] = [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [CoreResource, RecordResource, EmailResource, AttachmentResource],
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

	// _____ATTACHMENT:
	AttachmentOperations,
	...AttachmentFields,
];
