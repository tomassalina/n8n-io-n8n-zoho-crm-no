import { ZohoCRM } from 'zoho-library';
import { ZohoLibraryResource } from './type';
import { EmailOperation } from './Email/type';
import { ExecuteEmailParams, handleEmailExecution } from './Email/handleEmailExecution';
import { ZohoLibraryCredentials } from '../../../credentials/ZohoLibraryApi.credentials';

export interface ZohoLibraryNodeParameters {
	resource: ZohoLibraryResource;
	operation: EmailOperation;
}
interface handleResourcesParameters {
	resource: ZohoLibraryResource;
	credentials: ZohoLibraryCredentials;
	operation: EmailOperation;
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
		// case 'core': return
		// case 'record': return
		case 'email':
			return await handleEmailExecution({
				zoho,
				operation,
				fields: fields as ExecuteEmailParams['fields'],
			});
		// case 'attachment': return
		default:
			return;
	}
};
