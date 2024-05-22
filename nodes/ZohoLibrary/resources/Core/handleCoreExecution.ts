import { ZohoCRM } from 'zoho-library';

import { CoreOperation } from './type';

const authenticate = async (zoho: ZohoCRM) => {
	try {
		const { accessToken } = await zoho.authenticate();
		console.log('NEW ACCESS TOKEN', accessToken);
		return { accessToken };
	} catch (err) {
		return { errMessage: err.message };
	}
};

export interface HandleCoreExecutionParams {
	zoho: ZohoCRM;
	operation: CoreOperation;
}

export const handleCoreExecution = async ({ zoho, operation }: HandleCoreExecutionParams) => {
	switch (operation) {
		case 'authenticate':
			return await authenticate(zoho);
		default:
			return { errMessage: `The operation '${operation}' is not supported in Zoho Library yet.` };
	}
};
