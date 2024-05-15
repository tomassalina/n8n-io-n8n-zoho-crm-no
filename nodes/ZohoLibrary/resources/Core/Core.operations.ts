import { INodeProperties } from 'n8n-workflow';
import { Operation } from '../type';

import { resource } from './Core.resource';

const operations: Operation[] = [
	{
		name: 'Authenticate',
		value: 'authenticate',
		action: 'Authenticate',
	},
];

export const CoreOperations: INodeProperties = {
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
	default: 'authenticate',
};
