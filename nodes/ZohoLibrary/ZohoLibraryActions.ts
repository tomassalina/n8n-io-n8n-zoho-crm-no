import { INodeProperties } from 'n8n-workflow';

// When the resource `email` is selected, this `operation` parameter will be shown.
export const zohoLibraryOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['email'],
			},
		},
		options: [
			{
				name: 'Schedule Email Template',
				value: 'scheduleEmailTemplate',
				action: 'Schedule email template',
			},
			// {
			// 	name: 'Remove Scheduled Mail',
			// 	value: 'removeScheduledMail',
			// 	action: 'Remove scheduled mail',
			// 	routing: {
			// 		request: {
			// 			method: 'DELETE',
			// 			url: '/delete',
			// 		},
			// 	},
			// },
		],
		default: 'scheduleEmailTemplate',
	},
];

// Here we define what to show when the `get` operation is selected.
// We do that by adding `operation: ["get"]` to `displayOptions.show`
const scheduleEmailTemplateOperation: INodeProperties[] = [
	{
		displayName: 'Access Token',
		name: 'accessToken',
		default: '',
		description: 'Set the access token',
		placeholder: '1000.5de178abe0276bb34405e0647b395700.9cf9f403c914e58a1f616b1cabcaef98',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['scheduleEmailTemplate'],
			},
		},
		type: 'string',
	},
	{
		displayName: 'Module Name',
		name: 'moduleName',
		default: '',
		description: 'Set the module name',
		placeholder: 'Candidates',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['scheduleEmailTemplate'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Record ID',
		name: 'recordId',
		default: '',
		description: 'Set the Record ID',
		placeholder: '01234567899876543210',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['scheduleEmailTemplate'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'From',
		name: 'from',
		placeholder: 'John Doe,johndoe@gmail.com',
		default: '',
		description: 'The user name and email address from which you want to send an email',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['scheduleEmailTemplate'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Is Organization Mail?',
		name: 'orgEmail',
		placeholder: 'John Doe,johndoe@gmail.com',
		default: false,
		description:
			"Whether the mail is sent from the organization's email address and through Zoho CRM's server is indicated by setting this value to true",
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['scheduleEmailTemplate'],
			},
		},
		type: 'boolean',
		required: true,
	},
	{
		displayName: 'To',
		name: 'to',
		placeholder: 'John Doe,johndoe@gmail.com',
		default: '',
		description:
			'The user name and email address to which you want to send an email. Include multiple JSON objects if you want to email multiple users.',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['scheduleEmailTemplate'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Template ID',
		name: 'templateId',
		default: '',
		description:
			'The unique ID of the template from which the subject, content, and attachments will be included in the email',
		placeholder: '3652397000002497001',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['scheduleEmailTemplate'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Scheduled Time',
		name: 'scheduledTime',
		default: '',
		description: 'Input this key only when you want to schedule an email',
		placeholder: "yyyy-MM-dd'T'HH:mm:ss'+00:00'",
		required: true,
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['scheduleEmailTemplate'],
			},
		},
		type: 'string',
	},
	// {
	// 	displayName: 'Query Parameters',
	// 	name: 'arguments',
	// 	default: {},
	// 	description: "The request's query parameters",
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['email'],
	// 			operation: ['get'],
	// 		},
	// 	},
	// 	options: [
	// 		{
	// 			name: 'keyvalue',
	// 			displayName: 'Key:Value',
	// 			values: [
	// 				{
	// 					displayName: 'Key',
	// 					name: 'key',
	// 					type: 'string',
	// 					default: '',
	// 					required: true,
	// 					description: 'Key of query parameter',
	// 				},
	// 				{
	// 					displayName: 'Value',
	// 					name: 'value',
	// 					type: 'string',
	// 					default: '',
	// 					routing: {
	// 						send: {
	// 							property: '={{$parent.key}}',
	// 							type: 'query',
	// 						},
	// 					},
	// 					required: true,
	// 					description: 'Value of query parameter',
	// 				},
	// 			],
	// 		},
	// 	],
	// 	type: 'fixedCollection',
	// 	typeOptions: {
	// 		multipleValues: true,
	// 	},
	// },
];

// Here we define what to show when the DELETE Operation is selected.
// We do that by adding `operation: ["delete"]` to `displayOptions.show`
// const deleteOperation: INodeProperties[] = [
// 	{
// 		displayName: 'Type of Data',
// 		name: 'typeofData',
// 		default: 'queryParameter',
// 		description: 'Select type of data to send [Query Parameter Arguments, JSON-Body]',
// 		displayOptions: {
// 			show: {
// 				resource: ['email'],
// 				operation: ['delete'],
// 			},
// 		},
// 		options: [
// 			{
// 				name: 'Query',
// 				value: 'queryParameter',
// 			},
// 			{
// 				name: 'JSON',
// 				value: 'jsonData',
// 			},
// 		],
// 		required: true,
// 		type: 'options',
// 	},
// 	{
// 		displayName: 'Query Parameters',
// 		name: 'arguments',
// 		default: {},
// 		description: "The request's query parameters",
// 		displayOptions: {
// 			show: {
// 				resource: ['email'],
// 				operation: ['delete'],
// 				typeofData: ['queryParameter'],
// 			},
// 		},
// 		options: [
// 			{
// 				name: 'keyvalue',
// 				displayName: 'Key:Value',
// 				values: [
// 					{
// 						displayName: 'Key',
// 						name: 'key',
// 						type: 'string',
// 						default: '',
// 						required: true,
// 						description: 'Key of query parameter',
// 					},
// 					{
// 						displayName: 'Value',
// 						name: 'value',
// 						type: 'string',
// 						default: '',
// 						routing: {
// 							send: {
// 								property: '={{$parent.key}}',
// 								type: 'query',
// 							},
// 						},
// 						required: true,
// 						description: 'Value of query parameter',
// 					},
// 				],
// 			},
// 		],
// 		type: 'fixedCollection',
// 		typeOptions: {
// 			multipleValues: true,
// 		},
// 	},
// 	{
// 		displayName: 'JSON Object',
// 		name: 'arguments',
// 		default: {},
// 		description: "The request's JSON properties",
// 		displayOptions: {
// 			show: {
// 				resource: ['email'],
// 				operation: ['delete'],
// 				typeofData: ['jsonData'],
// 			},
// 		},
// 		options: [
// 			{
// 				name: 'keyvalue',
// 				displayName: 'Key:Value',
// 				values: [
// 					{
// 						displayName: 'Key',
// 						name: 'key',
// 						type: 'string',
// 						default: '',
// 						required: true,
// 						description: 'Key of JSON property',
// 					},
// 					{
// 						displayName: 'Value',
// 						name: 'value',
// 						type: 'string',
// 						default: '',
// 						routing: {
// 							send: {
// 								property: '={{$parent.key}}',
// 								type: 'body',
// 							},
// 						},
// 						required: true,
// 						description: 'Value of JSON property',
// 					},
// 				],
// 			},
// 		],
// 		type: 'fixedCollection',
// 		typeOptions: {
// 			multipleValues: true,
// 		},
// 	},
// ];

export const zohoLibraryFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                email:get                                */
	/* -------------------------------------------------------------------------- */
	...scheduleEmailTemplateOperation,

	/* -------------------------------------------------------------------------- */
	/*                              email:delete                               */
	/* -------------------------------------------------------------------------- */
	// ...deleteOperation,
];
