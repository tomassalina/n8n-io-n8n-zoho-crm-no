export type AttachmentOperation = 'downloadAttachment';

interface GlobalFields {
	accessToken: string;
	moduleName: string;
}

export interface DownloadAttachmentFields extends GlobalFields {
	recordId: string;
	attachmentId: string;
	fileName: string;
	fileType: 'text' | 'json' | 'image' | 'video';
	fileExtension:
		| 'pdf'
		| 'doc'
		| 'docx'
		| 'xls'
		| 'xlsx'
		| 'txt'
		| 'html'
		| 'css'
		| 'js'
		| 'json'
		| 'png'
		| 'jpg'
		| 'jpeg'
		| 'webp'
		| 'gif'
		| 'svg'
		| 'mp4'
		| 'other';
}

export enum AttachmentMimeType {
	'pdf' = 'application/pdf',
	'doc' = 'application/msword',
	'docx' = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	'xls' = 'application/vnd.ms-excel',
	'xlsx' = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	'txt' = 'text/plain',
	'html' = 'text/html',
	'css' = 'text/css',
	'js' = 'text/javascript',
	'json' = 'application/json',
	'png' = 'image/png',
	'jpg' = 'image/jpg',
	'jpeg' = 'image/jpeg',
	'webp' = 'image/webp',
	'gif' = 'image/gif',
	'svg' = 'image/svg+xml',
	'mp4' = 'video/m4',
	'other' = 'application/octet-stream', // default
}

export type PossibleAttachmentFields = DownloadAttachmentFields;
