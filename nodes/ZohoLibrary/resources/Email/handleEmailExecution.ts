import { ZohoCRM } from 'zoho-library';

import { EmailOperation } from './type';
import { GetEmailsFields, GetSpecificEmailFields, SendEmailFields, DeleteFields } from './type';

const getEmails = async (zoho: ZohoCRM, fields: GetEmailsFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			recordId: fields.recordId,
			type: fields.getEmailsParameters.type,
			ownerId: fields.getEmailsParameters.ownerId,
			index: fields.getEmailsParameters.index,
		};
		console.log(options);
		const response = await zoho.emails.getEmails(options);

		return response.data;
	} catch (err) {
		return { errMessage: err.message };
	}
};
const getSpecificEmail = async (zoho: ZohoCRM, fields: GetSpecificEmailFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			recordId: fields.recordId,
			messageId: fields.messageId,
		};
		const response = await zoho.emails.getSpecificEmail(options);

		return response.data;
	} catch (err) {
		return { errMessage: err.message };
	}
};
const sendEmail = async (zoho: ZohoCRM, fields: SendEmailFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			recordId: fields.recordId,
			from: {
				userName: fields.from.split(',')[0],
				email: fields.from.split(',')[1],
			},
			to: [
				{
					userName: fields.to.split(',')[0],
					email: fields.to.split(',')[1],
				},
			],
			orgEmail: fields.orgEmail,
			subject: fields.sendEmailOptions.subject,
			content: fields.sendEmailOptions.content,
			mailFormat: fields.sendEmailOptions.mailFormat,
			templateId: fields.sendEmailOptions.templateId,
			scheduledTime: fields.sendEmailOptions.scheduledTime,
		};
		const response = await zoho.emails.sendEmail(options);

		return response.data;
	} catch (err) {
		return { errMessage: err.message };
	}
};
const deleteEmails = async (zoho: ZohoCRM, fields: DeleteFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			recordId: fields.recordId,
			messageIds: fields.messageIds.split(','),
		};
		const response = await zoho.emails.deleteEmails(options);

		return response.data;
	} catch (err) {
		return { errMessage: err.message };
	}
};

export interface HandleEmailExecutionParams {
	zoho: ZohoCRM;
	operation: EmailOperation;
	fields: GetEmailsFields | GetSpecificEmailFields | SendEmailFields | DeleteFields;
}
export const handleEmailExecution = async ({
	zoho,
	operation,
	fields,
}: HandleEmailExecutionParams) => {
	switch (operation) {
		case 'getEmails':
			return await getEmails(zoho, fields as GetEmailsFields);
		case 'getSpecificEmail':
			return await getSpecificEmail(zoho, fields as GetSpecificEmailFields);
		case 'sendEmail':
			return await sendEmail(zoho, fields as SendEmailFields);
		case 'deleteEmails':
			return await deleteEmails(zoho, fields as DeleteFields);
		default:
			return { errMessage: `The operation '${operation}' is not supported in Zoho Library yet` };
	}
};
