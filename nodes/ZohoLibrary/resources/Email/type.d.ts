export type EmailOperation = 'getEmails' | 'getSpecificEmail' | 'sendEmail' | 'deleteEmails';

interface GlobalFields {
	accessToken: string;
	moduleName: string;
	recordId: string;
}

export interface GetEmailsFields extends GlobalFields {
	getEmailsParameters: {
		type:
			| 'sent_from_crm'
			| 'scheduled_in_crm'
			| 'drafts'
			| 'user_emails'
			| 'all_contacts_sent_crm_emails'
			| 'all_contacts_scheduled_crm_emails'
			| 'all_contacts_draft_crm_emails';
		ownerId: string;
		index: string;
	};
}

export interface GetSpecificEmailFields extends GlobalFields {
	messageId: string;
}

export interface SendEmailFields extends GlobalFields {
	from: string;
	to: string;
	orgEmail: boolean;
	sendEmailOptions: {
		subject?: string;
		content?: string;
		mailFormat?: 'text' | 'html';
		templateId?: string;
		scheduledTime?: string;
	};
}

export interface DeleteFields extends GlobalFields {
	messageIds: string;
}
