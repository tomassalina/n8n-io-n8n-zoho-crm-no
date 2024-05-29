/* eslint-disable n8n-nodes-base/node-class-description-icon-not-svg */
import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeOperationError,
} from 'n8n-workflow';

import { ZohoLibraryCredentials } from '../../credentials/ZohoLibraryApi.credentials';
import { ZohoLibraryProperties } from './ZohoLibrary.node.properties';
import { handleResources } from './resources/handleResources';

const description: INodeTypeDescription = {
	displayName: 'Zoho Library',
	name: 'zohoLibrary',
	icon: 'file:zohocrm.logo.png',
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

		const items: INodeExecutionData[] = this.getInputData();
		for (let itemIndex: number = 0; itemIndex < items.length; itemIndex++) {
			try {
				const nodeParameters: any = {};
				Object.keys(this.getNode().parameters).forEach((key) => {
					nodeParameters[key] = this.getNodeParameter(key, itemIndex, '') as any;
				});
				nodeParameters.credentials = credentials;

				const response = await handleResources({
					resource: nodeParameters['resource'],
					operation: nodeParameters['operation'],
					credentials,
					fields: nodeParameters,
				});

				if (response.errMessage)
					throw new NodeOperationError(this.getNode(), response.errMessage, {
						itemIndex,
					});

				if (response.binary) {
					returnData.push({
						json: response.json,
						binary: response.binary,
					});
				} else {
					returnData.push({
						json: response,
					});
				}
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
