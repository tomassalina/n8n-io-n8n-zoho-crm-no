import { INodeProperties } from 'n8n-workflow';
import { Operation } from '../type';

import { resource } from './Email.resource';

const operations: Operation[] = [
	{
		name: 'Get Emails',
		value: 'getEmails',
		action: 'Get emails',
	},
	{
		name: 'Get Specific Email',
		value: 'getSpecificEmail',
		action: 'Get specific email',
	},
	{
		name: 'Send Email',
		value: 'sendEmail',
		action: 'Send an email',
	},
	{
		name: 'Delete Emails',
		value: 'deleteEmails',
		action: 'Delete emails',
	},
];

export const EmailOperations: INodeProperties = {
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
	default: 'scheduleEmailTemplate',
};
