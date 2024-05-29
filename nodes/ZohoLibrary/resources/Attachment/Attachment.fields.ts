/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */
import { Field } from '../type';
import { resource } from './Attachment.resource';

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

	// _____download
	{
		displayName: 'Record ID',
		name: 'recordId',
		default: '',
		description: 'Set the Record ID',
		placeholder: '01234567899876543210',
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['downloadAttachment'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'Attachment ID',
		name: 'attachmentId',
		default: '',
		description: 'Set the Attachment ID',
		placeholder: '100013547',
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['downloadAttachment'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		default: '',
		description: 'Set the final File Name',
		placeholder: 'John Doe CV',
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['downloadAttachment'],
			},
		},
		type: 'string',
		required: true,
	},
	{
		displayName: 'File Type',
		name: 'fileType',
		default: 'text',
		description: 'Set the File Type',
		type: 'options',
		options: [
			{
				name: 'Text',
				value: 'text',
			},
			{
				name: 'JSON',
				value: 'json',
			},
			{
				name: 'Image',
				value: 'image',
			},
			{
				name: 'Video',
				value: 'video',
			},
		],
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['downloadAttachment'],
			},
		},
		required: true,
	},
	{
		displayName: 'File Extension',
		name: 'fileExtension',
		default: 'pdf',
		description: 'Set the File Extension',
		type: 'options',
		options: [
			{
				name: 'PDF',
				value: 'pdf',
			},
			{
				name: 'DOC',
				value: 'doc',
			},
			{
				name: 'DOCX',
				value: 'docx',
			},
			{
				name: 'XLS',
				value: 'xls',
			},
			{
				name: 'XLSX',
				value: 'xlsx',
			},
			{
				name: 'TXT',
				value: 'txt',
			},
			{
				name: 'HTML',
				value: 'html',
			},
			{
				name: 'CSS',
				value: 'css',
			},
			{
				name: 'JS',
				value: 'js',
			},
			{
				name: 'JSON',
				value: 'json',
			},
			{
				name: 'PNG',
				value: 'png',
			},
			{
				name: 'JPG',
				value: 'jpg',
			},
			{
				name: 'JPEG',
				value: 'jpeg',
			},
			{
				name: 'WEBP',
				value: 'webp',
			},
			{
				name: 'GIF',
				value: 'gif',
			},
			{
				name: 'SVG',
				value: 'svg',
			},
			{
				name: 'MP4',
				value: 'mp4',
			},
			{
				name: 'OTHER',
				value: 'other',
			},
		],
		displayOptions: {
			show: {
				resource: [resource.value],
				operation: ['downloadAttachment'],
			},
		},
		required: true,
	},
];
