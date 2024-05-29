import { ZohoCRM } from 'zoho-library';
import { IBinaryData, IBinaryKeyData } from 'n8n-workflow';

import {
	AttachmentOperation,
	PossibleAttachmentFields,
	DownloadAttachmentFields,
	AttachmentMimeType,
} from './type';

const downloadAttachment = async (zoho: ZohoCRM, fields: DownloadAttachmentFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			recordId: fields.recordId,
			attachmentId: fields.attachmentId,
		};

		const attachment = await zoho.attachments.download(options);

		const buffer = Buffer.from(attachment.buffer);

		const binaryData: IBinaryData = {
			data: buffer.toString('base64'),
			fileName: fields.fileName,
			fileType: fields.fileType,
			fileExtension: fields.fileExtension,
			mimeType: AttachmentMimeType[fields.fileExtension],
			fileSize: buffer.length.toString(),
		};

		const response: { json: object; binary: IBinaryKeyData } = {
			json: { ...binaryData, data: [] },
			binary: {
				['data']: binaryData,
			},
		};

		return response;
	} catch (err) {
		return { errMessage: err.message };
	}
};

export interface HandleAttachmentExecutionParams {
	zoho: ZohoCRM;
	operation: AttachmentOperation;
	fields: PossibleAttachmentFields;
}
export const handleAttachmentExecution = async ({
	zoho,
	operation,
	fields,
}: HandleAttachmentExecutionParams) => {
	switch (operation) {
		case 'downloadAttachment':
			return await downloadAttachment(zoho, fields as DownloadAttachmentFields);
		default:
			return { errMessage: `The operation '${operation}' is not supported in Zoho Library yet` };
	}
};
