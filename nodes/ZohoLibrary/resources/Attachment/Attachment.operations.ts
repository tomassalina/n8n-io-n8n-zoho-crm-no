import { INodeProperties } from 'n8n-workflow';
import { Operation } from '../type';

import { resource } from './Attachment.resource';

const operations: Operation[] = [
	{
		name: 'Download Attachment',
		value: 'downloadAttachment',
		action: 'Download attachment',
	},
];

export const AttachmentOperations: INodeProperties = {
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: [resource.value],
		},
	},
	options: operations,
	default: 'downloadAttachment',
};
