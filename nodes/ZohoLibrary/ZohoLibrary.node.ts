import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
} from 'n8n-workflow';
import { ZohoCRM } from 'zoho-library';

import { ZohoLibraryCredentials } from '../../credentials/ZohoLibraryApi.credentials';
import { ZohoLibraryProperties } from './ZohoLibrary.node.properties';

const description: INodeTypeDescription = {
	displayName: 'Zoho Library',
	name: 'zohoLibrary',
	icon: 'file:zohocrm.logo.svg',
	group: ['transform', 'zoho'],
	version: 1,
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Interact with all Zoho CRM capacities.',
	defaults: {
		name: 'zohoLibrary',
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: [
		{
			name: 'zohoLibraryApi',
			required: true,
		},
	],
	properties: ZohoLibraryProperties,
};

export class ZohoLibrary implements INodeType {
	description = description;

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const returnData: INodeExecutionData[] = [];

		const credentials = (await this.getCredentials('zohoLibraryApi').catch(
			(e) => e,
		)) as ZohoLibraryCredentials;
		const zoho = new ZohoCRM({
			clientId: credentials.clientId,
			clientSecret: credentials.clientSecret,
			refreshToken: credentials.refreshToken,
		});
		await zoho.authenticate();

		const items: INodeExecutionData[] = this.getInputData();
		for (let itemIndex: number = 0; itemIndex < items.length; itemIndex++) {
			try {
				const nodeParameters: any = {};
				Object.keys(this.getNode().parameters).forEach((key) => {
					nodeParameters[key] = this.getNodeParameter(key, itemIndex, '') as any;
				});
				nodeParameters.credentials = credentials;

				const response = await zoho.emails.sendEmail({
					moduleName: nodeParameters['moduleName'],
					recordId: nodeParameters['recordId'],
					from: {
						userName: nodeParameters['from'].split(',')[0],
						email: nodeParameters['from'].split(',')[1],
					},
					to: [
						{
							userName: nodeParameters['to'].split(',')[0],
							email: nodeParameters['to'].split(',')[1],
						},
					],
					orgEmail: nodeParameters['orgEmail'],
					templateId: nodeParameters['templateId'],
					scheduledTime: nodeParameters['scheduledTime'],
				});

				returnData.push({
					json: response.data,
				});
			} catch (error) {
				if (this.continueOnFail()) {
					items.push({ json: this.getInputData(itemIndex)[0].json, error, pairedItem: itemIndex });
				} else {
					if (error.context) {
						error.context.itemIndex = itemIndex;
						throw error;
					}
					throw new NodeOperationError(this.getNode(), error, {
						itemIndex,
					});
				}
			}
		}

		return this.prepareOutputData(returnData);
	}
}
