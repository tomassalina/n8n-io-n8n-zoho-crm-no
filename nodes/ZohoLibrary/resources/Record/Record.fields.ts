import { Field } from '../type';
import { resource } from './Record.resource';

export const fields: Field[] = [
	// _____All methods
	{
		displayName: 'Access Token',
		name: 'accessToken',
		default: '',
		description: 'You need to authenticate first',
		placeholder: '1000.5de178abe0276bb34405e0647b395700.9cf9f403c914e58a1f616b1cabcaef98',
		displayOptions: {
			show: {
				resource: [resource.value],
			},
		},
		type: 'string',
	},
	{
		displayName: 'Module Name',
		name: 'moduleName',
		default: '',
		description: 'Set the module name',
		placeholder: 'Leads',
		displayOptions: {
			show: {
				resource: [resource.value],
			},
		},
		type: 'string',
		required: true,
	},

	// Operations that requires recordId
	{
		displayName: 'Record ID',
		name: 'recordId',
		default: '',
		description: 'Set the Record ID',
		placeholder: '01234567899876543210',
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['getSpecificRecord', 'updateRecord', 'getTimeline'],
			},
		},
		type: 'string',
		required: true,
	},

	// Operations that requires data
	{
		displayName: 'Data',
		name: 'createRecordsData',
		description: 'The data object',
		default: `{
	"records": [
		{
			"Deal_Name": "Resorsi",
			"Stage": "Intro"
		},
		{
			"Deal_Name": "Inforge",
			"Stage": "Intro"
		}
	]
}`,
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['createRecords'],
			},
		},
		type: 'json',
		required: true,
	},
	{
		displayName: 'Data',
		name: 'updateRecordData',
		description: 'The data object',
		default: `{
	"Deal_Name": "v5 Update",
	"Stage": "Closed Won"
}`,
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['updateRecord'],
			},
		},
		type: 'json',
		required: true,
	},
	{
		displayName: 'Data',
		name: 'bulkUpdateRecordsData',
		description: 'The data object',
		default: `{
	"records": [
		{
			"id": "410405000002264040",
			"Deal_Name": "Resorsi",
			"Stage": "Closed Won"
		},
		{
			"id": "410405000002262525",
			"Deal_Name": "Inforge",
			"Stage": "Closed Won"
		}
	]
}`,
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['bulkUpdateRecords'],
			},
		},
		type: 'json',
		required: true,
	},
	{
		displayName: 'Data',
		name: 'upsertRecords',
		description: 'The data object',
		default: `{
	"records": [
		{
			"Deal_Name": "Resorsi",
			"Stage": "Closed Won"
		},
		{
			"Deal_Name": "Inforge",
			"Stage": "Closed Won"
		}
	]
}`,
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['upsertRecords'],
			},
		},
		type: 'json',
		required: true,
	},

	// getRecords
	{
		displayName: 'Fields',
		name: 'fields',
		description: 'Separated by comma',
		placeholder: 'ID,Name,Created_At',
		default: '',
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['getRecords'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Extra Parameters',
		name: 'getRecordsParameters',
		description: 'Set extra parameters to get records',
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['getRecords'],
			},
		},
		type: 'collection',
		options: [
			{
				displayName: 'IDs',
				name: 'ids',
				type: 'string',
				default: '',
				placeholder: '00000,11111,22222',
				description: 'Separated by comma',
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				placeholder: '1',
				description: 'To get the list of records from the respective pages',
				typeOptions: {
					minValue: 1,
					maxValue: 10,
				},
			},
			{
				displayName: 'Per Page',
				name: 'perPage',
				type: 'number',
				default: 200,
				placeholder: '200',
				description:
					'To get the list of records available per page. The default and the maximum possible value is 200.',
				typeOptions: {
					minValue: 1,
					maxValue: 200,
				},
			},
			{
				displayName: 'Page Token',
				name: 'pageToken',
				type: 'string',
				default: '',
				placeholder: 'c8582xx9e7c7',
				description:
					'To fetch more than 2000 records, you must include the "page_token" param. Note that you cannot use this param with the "page" param.',
			},
			{
				displayName: 'Sort Order',
				name: 'sortOrder',
				type: 'options',
				description:
					'To sort the available list of records in either ascending or descending order',
				options: [
					{
						name: 'Ascending',
						value: 'asc',
						type: 'string',
					},
					{
						name: 'Descending',
						value: 'desc',
						type: 'string',
					},
				],
				default: 'asc',
			},
			{
				displayName: 'Sort By',
				name: 'sortBy',
				type: 'options',
				description: 'To sort the records based on the fields ID, Created_Time, and Modified_Time',
				options: [
					{
						name: 'ID',
						value: 'id',
						type: 'string',
					},
					{
						name: 'Created Time',
						value: 'Created_Time',
						type: 'string',
					},
					{
						name: 'Modified Time',
						value: 'Modified_Time',
						type: 'string',
					},
				],
				default: 'id',
			},
		],
		default: {},
	},

	// _____getSpecificRecord
	{
		displayName: 'Fields',
		name: 'fields',
		description: 'Separated by comma',
		type: 'string',
		default: '',
		placeholder: 'ID,Name,Created_At',
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['getSpecificRecord'],
			},
		},
	},

	// _____searchRecords
	{
		displayName: 'Extra Parameters',
		name: 'searchRecordsParameters',
		description: 'Set extra parameters to search records',
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['searchRecords'],
			},
		},
		type: 'collection',
		options: [
			{
				displayName: 'Criteria',
				name: 'criteria',
				type: 'json',
				default: `{
	"criteria": [
		"Lead_Source:equals:Apollo.io",
		["or", "Company:equals:Google", "Company:equals:Apple"]
	]
}`,
				description:
					'Performs search by following the shown criteria. The supported operators are "equals", "starts_with", "in", "not_equal", "greater_equal", "greater_than", "less_equal", "less_than" and "between".',
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				placeholder: 'john@gmail.com,doe@gmail.com',
				description:
					'Performs module search by email. All the email fields of a particular module will be searched and listed.',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				placeholder: '98883434559',
				description:
					'Performs module search by phone number. All the phone fields of a particular module will be searched and listed.',
			},
			{
				displayName: 'Word',
				name: 'word',
				type: 'string',
				default: '',
				placeholder: 'Anything',
				description: 'Performs global search by word',
			},
			{
				displayName: 'Fields',
				name: 'fields',
				type: 'string',
				default: '',
				placeholder: 'ID,Name,Created_At',
				description: 'Separated by comma',
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				placeholder: '1',
				description: 'To get the list of records from the respective pages',
				typeOptions: {
					minValue: 1,
					maxValue: 10,
				},
			},
			{
				displayName: 'Per Page',
				name: 'perPage',
				type: 'number',
				default: 200,
				placeholder: '200',
				description:
					'To get the list of records available per page. The default and the maximum possible value is 200.',
				typeOptions: {
					minValue: 1,
					maxValue: 200,
				},
			},
		],
		default: {},
	},

	// _____deleteRecords
	{
		displayName: 'IDs',
		name: 'ids',
		default: '',
		placeholder: '410405000002264040,410405000002264025',
		description: 'Separated by comma',
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['deleteRecords'],
			},
		},
		type: 'string',
		required: true,
	},

	// _____getDeletedRecords
	{
		displayName: 'Extra Parameters',
		name: 'getDeletedRecordsParameters',
		description: 'Set extra parameters to get deleted records',
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['getDeletedRecords'],
			},
		},
		type: 'collection',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				description: 'Specify the type of deleted records you want to retrieve',
				type: 'options',
				options: [
					{
						name: 'All',
						value: 'all',
						type: 'string',
					},
					{
						name: 'Recycle',
						value: 'recycle',
						type: 'string',
					},
					{
						name: 'Permanent',
						value: 'permanent',
						type: 'string',
					},
				],
				default: 'all',
			},
			{
				displayName: 'Page',
				name: 'page',
				type: 'number',
				default: 1,
				placeholder: '1',
				description: 'To get the list of records from the respective pages',
				typeOptions: {
					minValue: 1,
					maxValue: 10,
				},
			},
			{
				displayName: 'Per Page',
				name: 'perPage',
				type: 'number',
				default: 200,
				placeholder: '200',
				description:
					'To get the list of records available per page. The default and the maximum possible value is 200.',
				typeOptions: {
					minValue: 1,
					maxValue: 200,
				},
			},
		],
		default: {},
	},

	// _____getCountInModule
	{
		displayName: 'Extra Parameters',
		name: 'getCountInModuleParameters',
		description: 'Set extra parameters to get count of records in specific module',
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['getCountInModule'],
			},
		},
		type: 'collection',
		options: [
			{
				displayName: 'Criteria',
				description:
					'Performs search by following the shown criteria. The supported operators are "equals", "starts_with", "in", "not_equal", "greater_equal", "greater_than", "less_equal", "less_than" and "between".',
				name: 'criteria',
				type: 'json',
				default: `{
	"criteria": [
		"Lead_Source:equals:Apollo.io",
		["or", "Company:equals:Google", "Company:equals:Apple"]
	]
}`,
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				placeholder: 'john@gmail.com,doe@gmail.com',
				description:
					'Performs module search by email. All the email fields of a particular module will be searched and listed.',
			},
			{
				displayName: 'Phone',
				name: 'phone',
				type: 'string',
				default: '',
				placeholder: '98883434559',
				description:
					'Performs module search by phone number. All the phone fields of a particular module will be searched and listed.',
			},
			{
				displayName: 'Word',
				name: 'word',
				type: 'string',
				default: '',
				placeholder: 'Anything',
				description: 'Performs global search by word',
			},
		],
		default: {},
	},

	// _____getTimeline
	{
		displayName: 'Per Page',
		description:
			'To get the list of records available per page. The default and the maximum possible value is 200.',
		name: 'perPage',
		type: 'number',
		default: 200,
		placeholder: '200',
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['getTimeline'],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 200,
		},
	},
	{
		displayName: 'Page Token',
		description:
			'To fetch more than 2000 records, you must include the "page_token" param. Note that you cannot use this param with the "page" param.',
		name: 'pageToken',
		type: 'string',
		default: '',
		placeholder: 'c8582xx9e7c7',
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['getTimeline'],
			},
		},
	},
];
