import { ZohoCRM } from 'zoho-library';
import { ZohoLibraryCredentials } from '../../../credentials/ZohoLibraryApi.credentials';
import { ZohoLibraryResource } from './type';

// Resource: core
import { CoreOperation } from './Core/type';
import { handleCoreExecution } from './Core/handleCoreExecution';

// Resource: record
import { RecordOperation } from './Record/type';
import { HandleRecordExecutionParams, handleRecordExecution } from './Record/handleRecordExecution';

// Resource: email
import { EmailOperation } from './Email/type';
import { HandleEmailExecutionParams, handleEmailExecution } from './Email/handleEmailExecution';

// Resource: attachment
import { AttachmentOperation } from './Attachment/type';
import {
	HandleAttachmentExecutionParams,
	handleAttachmentExecution,
} from './Attachment/handleAttachmentExecution';

export interface ZohoLibraryNodeParameters {
	resource: ZohoLibraryResource;
	operation: EmailOperation;
}
interface handleResourcesParameters {
	resource: ZohoLibraryResource;
	credentials: ZohoLibraryCredentials;
	operation: CoreOperation | EmailOperation;
	fields: object;
}

export const handleResources = async ({
	resource,
	credentials,
	operation,
	fields,
}: handleResourcesParameters) => {
	const zoho = new ZohoCRM({
		clientId: credentials.clientId,
		clientSecret: credentials.clientSecret,
		refreshToken: credentials.refreshToken,
	});

	switch (resource) {
		case 'core':
			return handleCoreExecution({
				zoho,
				operation: operation as CoreOperation,
			});
		case 'record':
			return await handleRecordExecution({
				zoho,
				operation: operation as RecordOperation,
				fields: fields as HandleRecordExecutionParams['fields'],
			});
		case 'email':
			return await handleEmailExecution({
				zoho,
				operation: operation as EmailOperation,
				fields: fields as HandleEmailExecutionParams['fields'],
			});
		case 'attachment':
			return await handleAttachmentExecution({
				zoho,
				operation: operation as AttachmentOperation,
				fields: fields as HandleAttachmentExecutionParams['fields'],
			});
		default:
			throw new Error('Resource not found');
	}
};
