import { INodeProperties } from 'n8n-workflow';
import { Operation } from '../type';

import { resource } from './Record.resource';

const operations: Operation[] = [
	{
		name: 'Get Records',
		value: 'getRecords',
		action: 'Get records',
	},
	{
		name: 'Get Specific Record',
		value: 'getSpecificRecord',
		action: 'Get specific record',
	},
	{
		name: 'Search Records',
		value: 'searchRecords',
		action: 'Search records',
	},
	{
		name: 'Create Records',
		value: 'createRecords',
		action: 'Create records',
	},
	{
		name: 'Update Record',
		value: 'updateRecord',
		action: 'Update record',
	},
	{
		name: 'Bulk Update Records',
		value: 'bulkUpdateRecords',
		action: 'Bulk update records',
	},
	{
		name: 'Upsert Records',
		value: 'upsertRecords',
		action: 'Upsert records',
	},
	{
		name: 'Delete Records',
		value: 'deleteRecords',
		action: 'Delete records',
	},
	{
		name: 'Get Deleted Records',
		value: 'getDeletedRecords',
		action: 'Get deleted records',
	},
	{
		name: 'Get Count In Module',
		value: 'getCountInModule',
		action: 'Get count in module',
	},
	{
		name: 'Get Timeline',
		value: 'getTimeline',
		action: 'Get timeline',
	},
];

export const RecordOperations: INodeProperties = {
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
	default: 'getRecords',
};
