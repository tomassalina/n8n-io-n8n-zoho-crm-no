import { ZohoCRM } from 'zoho-library';

import {
	RecordOperation,
	GetRecordsFields,
	GetSpecificRecordFields,
	SearchRecordsFields,
	CreateRecordFields,
	UpdateRecordFields,
	BulkUpdateRecordsFields,
	UpsertRecordsFields,
	DeleteRecordsFields,
	GetDeletedRecordsFields,
	GetCountInModuleFields,
	GetTimelineFields,
	PossibleRecordFields,
} from './type';

const getRecords = async (zoho: ZohoCRM, fields: GetRecordsFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			fields: fields.fields.split(','),
			ids: fields.getRecordsParameters.ids?.split(','),
			page: fields.getRecordsParameters.page,
			perPage: fields.getRecordsParameters.perPage,
			pageToken: fields.getRecordsParameters.pageToken,
			sortOrder: fields.getRecordsParameters.sortOrder,
			sortBy: fields.getRecordsParameters.sortBy,
		};
		const response = await zoho.records.getAll(options);

		return response.data;
	} catch (err) {
		return { errMessage: err.message };
	}
};
const getSpecificRecord = async (zoho: ZohoCRM, fields: GetSpecificRecordFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			recordId: fields.recordId,
			fields: fields.fields ? fields.fields?.split(',') : undefined,
		};
		const response = await zoho.records.getOne(options);

		return response.data;
	} catch (err) {
		return { errMessage: err.message };
	}
};
const searchRecords = async (zoho: ZohoCRM, fields: SearchRecordsFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			criteria: fields.searchRecordsParameters.criteria
				? JSON.parse(fields.searchRecordsParameters.criteria)['criteria']
				: undefined,
			email: fields.searchRecordsParameters.email,
			phone: fields.searchRecordsParameters.phone,
			word: fields.searchRecordsParameters.word,
			fields: fields.searchRecordsParameters.fields
				? fields.searchRecordsParameters.fields.split(',')
				: undefined,
			page: fields.searchRecordsParameters.page,
			perPage: fields.searchRecordsParameters.perPage,
		};
		const response = await zoho.records.search(options);

		return response.data;
	} catch (err) {
		return { errMessage: err.message };
	}
};
const createRecord = async (zoho: ZohoCRM, fields: CreateRecordFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			data: fields.createRecordsData ? JSON.parse(fields.createRecordsData)['records'] : undefined,
		};
		const response = await zoho.records.create(options);

		return response.data;
	} catch (err) {
		return { errMessage: err.message };
	}
};
const updateRecord = async (zoho: ZohoCRM, fields: UpdateRecordFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			recordId: fields.recordId,
			data: fields.updateRecordData ? JSON.parse(fields.updateRecordData) : undefined,
		};
		const response = await zoho.records.update(options);

		return response.data;
	} catch (err) {
		return { errMessage: err.message };
	}
};
const bulkUpdateRecords = async (zoho: ZohoCRM, fields: BulkUpdateRecordsFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			data: fields.bulkUpdateRecordsData
				? JSON.parse(fields.bulkUpdateRecordsData)['records']
				: undefined,
		};
		const response = await zoho.records.bulkUpdate(options);

		return response.data;
	} catch (err) {
		return { errMessage: err.message };
	}
};
const upsertRecords = async (zoho: ZohoCRM, fields: UpsertRecordsFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			data: fields.upsertRecords ? JSON.parse(fields.upsertRecords)['records'] : undefined,
		};
		const response = await zoho.records.upsert(options);

		return response.data;
	} catch (err) {
		return { errMessage: err.message };
	}
};
const deleteRecords = async (zoho: ZohoCRM, fields: DeleteRecordsFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			ids: fields.ids.split(','),
		};
		const response = await zoho.records.delete(options);

		return response.data;
	} catch (err) {
		return { errMessage: err.message };
	}
};
const getDeletedRecords = async (zoho: ZohoCRM, fields: GetDeletedRecordsFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			type: fields.getDeletedRecordsParameters.type,
			page: fields.getDeletedRecordsParameters.page,
			perPage: fields.getDeletedRecordsParameters.perPage,
		};
		const response = await zoho.records.getDeleted(options);

		return response.data;
	} catch (err) {
		return { errMessage: err.message };
	}
};
const getCountInModule = async (zoho: ZohoCRM, fields: GetCountInModuleFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			criteria: fields.getCountInModuleParameters.criteria
				? JSON.parse(fields.getCountInModuleParameters.criteria)['criteria']
				: undefined,
			email: fields.getCountInModuleParameters.email,
			phone: fields.getCountInModuleParameters.phone,
			word: fields.getCountInModuleParameters.word,
		};
		const response = await zoho.records.getCountInModule(options);

		return response.data;
	} catch (err) {
		return { errMessage: err.message };
	}
};
const getTimeline = async (zoho: ZohoCRM, fields: GetTimelineFields) => {
	try {
		const options = {
			accessToken: fields.accessToken,
			moduleName: fields.moduleName,
			recordId: fields.recordId,
			perPage: fields.perPage,
			pageToken: fields.pageToken,
		};
		const response = await zoho.records.getTimeline(options);

		return response.data;
	} catch (err) {
		return { errMessage: err.message };
	}
};

export interface HandleRecordExecutionParams {
	zoho: ZohoCRM;
	operation: RecordOperation;
	fields: PossibleRecordFields;
}
export const handleRecordExecution = async ({
	zoho,
	operation,
	fields,
}: HandleRecordExecutionParams) => {
	switch (operation) {
		case 'getRecords':
			return await getRecords(zoho, fields as GetRecordsFields);
		case 'getSpecificRecord':
			return await getSpecificRecord(zoho, fields as GetSpecificRecordFields);
		case 'searchRecords':
			return await searchRecords(zoho, fields as SearchRecordsFields);
		case 'createRecords':
			return await createRecord(zoho, fields as CreateRecordFields);
		case 'updateRecord':
			return await updateRecord(zoho, fields as UpdateRecordFields);
		case 'bulkUpdateRecords':
			return await bulkUpdateRecords(zoho, fields as BulkUpdateRecordsFields);
		case 'upsertRecords':
			return await upsertRecords(zoho, fields as UpsertRecordsFields);
		case 'deleteRecords':
			return await deleteRecords(zoho, fields as DeleteRecordsFields);
		case 'getDeletedRecords':
			return await getDeletedRecords(zoho, fields as GetDeletedRecordsFields);
		case 'getCountInModule':
			return await getCountInModule(zoho, fields as GetCountInModuleFields);
		case 'getTimeline':
			return await getTimeline(zoho, fields as GetTimelineFields);
		default:
			return { errMessage: `The operation '${operation}' is not supported in Zoho Library yet` };
	}
};
