import { ICredentialType, INodeProperties, ICredentials } from 'n8n-workflow';

export interface ZohoLibraryCredentials extends ICredentials {
	clientId: string;
	clientSecret: string;
	refreshToken: string;
}

export class ZohoLibraryApi implements ICredentialType {
	name = 'zohoLibraryApi';
	displayName = 'Zoho CRM API';
	properties: INodeProperties[] = [
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
		{
			displayName: 'Refresh Token',
			name: 'refreshToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
		},
	];

	// authenticate: IAuthenticateGeneric = {
	// 	type: 'generic',
	// 	properties: {
	// 		auth: {
	// 			username: '={{ $credentials.username }}',
	// 			password: '={{ $credentials.password }}',
	// 		},
	// 		qs: {
	// 			n8n: 'rocks',
	// 		},
	// 	},
	// };

	// test: ICredentialTestRequest = {
	// 	request: {
	// 		baseURL: 'https://accounts.zoho.com/oauth/v2/token/',
	// 		url: '?',
	// 	},
	// };
}
