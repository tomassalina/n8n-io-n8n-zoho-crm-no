import { Field } from '../type';

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
				resource: ['email'],
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
				resource: ['email'],
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
			},
		},
		type: 'string',
		required: true,
	},

	// _____getEmails
	{
		displayName: 'Extra Parameters',
		name: 'getEmailsParameters',
		description: 'Set extra parameters to get emails',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['getEmails'],
			},
		},
		type: 'collection',
		options: [
			{
				displayName: 'Type',
				name: 'type',
				type: 'options',
				description:
					'Note that when you do not specify any of these parameters, you will receive all emails from the users and the ones sent from CRM in the response',
				// eslint-disable-next-line n8n-nodes-base/node-param-options-type-unsorted-items
				options: [
					{
						name: 'Sent_from_crm',
						value: 'sent_from_crm',
						type: 'string',
					},
					{
						name: 'Scheduled_in_crm',
						value: 'scheduled_in_crm',
						type: 'string',
					},
					{
						name: 'Drafts',
						value: 'drafts',
						type: 'string',
					},
					{
						name: 'User_emails',
						value: 'user_emails',
						type: 'string',
					},
					{
						name: 'All_contacts_sent_crm_emails',
						value: 'all_contacts_sent_crm_emails',
						type: 'string',
					},
					{
						name: 'All_contacts_scheduled_crm_emails',
						value: 'all_contacts_scheduled_crm_emails',
						type: 'string',
					},
					{
						name: 'All_contacts_draft_crm_emails',
						value: 'all_contacts_draft_crm_emails',
						type: 'string',
					},
				],
				default: 'sent_from_crm',
			},
			{
				displayName: 'Owner ID',
				name: 'ownerId',
				type: 'string',
				default: '2313985000000470001',
				description:
					'The ID of the user whose emails you want to fetch. Note that you can use this parameter only with type=user_emails.',
			},
			{
				displayName: 'Index',
				name: 'index',
				type: 'string',
				default:
					'487a357e145f0949daec41facb432a1e667349598e57461a6f16f38e3ba444231c01809c86faabb8ce0d9236a16fe897',
				description: 'Use this value for "index" in subsequent calls to fetch other emails',
			},
		],
		default: {},
	},

	// _____getSpecificEmail
	{
		displayName: 'Message ID',
		name: 'messageId',
		placeholder: '2cceafa194d037b63f2000181dd818641afa5a84d184e888e618598ebe137c9d',
		default: '',
		description: 'The ID of the specific email',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['getSpecificEmail'],
			},
		},
		type: 'string',
		required: true,
	},

	// _____sendEmail:
	{
		displayName: 'From',
		name: 'from',
		placeholder: 'John Doe,johndoe@gmail.com',
		default: '',
		description: 'The user name and email address from which you want to send an email',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['sendEmail'],
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
				operation: ['sendEmail'],
			},
		},
		type: 'boolean',
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
				operation: ['sendEmail'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Options',
		name: 'sendEmailOptions',
		description: 'Set extra parameters to get emails',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['sendEmail'],
			},
		},
		type: 'collection',
		options: [
			{
				displayName: 'Subject',
				name: 'subject',
				description: 'The subject of the email',
				type: 'string',
				placeholder: 'The subject:',
				default: '',
			},
			{
				displayName: 'Content',
				name: 'content',
				description: 'The content of the email',
				type: 'string',
				placeholder: 'Hello!',
				default: '',
			},
			{
				displayName: 'Mail Format',
				name: 'mailFormat',
				description:
					'The format of the email such as plain text or rich text. The value html indicates the rich text format and text indicates the plain text format.',
				type: 'options',
				options: [
					{
						displayName: 'Text',
						name: 'Text',
						value: 'text',
					},
					{
						displayName: 'HTML',
						name: 'HTML',
						value: 'html',
					},
				],
				default: 'text',
			},
			{
				displayName: 'Template ID',
				name: 'templateId',
				description:
					'The unique ID of the template from which the subject, content, and attachments will be included in the email',
				placeholder: '3652397000002497001',
				type: 'string',
				default: '',
			},
			{
				displayName: 'Scheduled Time',
				name: 'scheduledTime',
				default: '',
				description: 'Input this key only when you want to schedule an email',
				placeholder: "yyyy-MM-dd'T'HH:mm:ss'+00:00'",
				type: 'string',
			},
		],
		default: {},
	},

	// _____deleteEmails
	{
		displayName: 'Message IDs',
		name: 'messageIds',
		description: 'Separeted by comma',
		placeholder: '0000000,1111111,2222222',
		default: '',
		displayOptions: {
			show: {
				resource: ['email'],
				operation: ['deleteEmails'],
			},
		},
		type: 'string',
		required: true,
	},
];
