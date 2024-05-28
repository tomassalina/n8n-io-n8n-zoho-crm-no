export type RecordOperation =
	| 'getRecords'
	| 'getSpecificRecord'
	| 'searchRecords'
	| 'createRecords'
	| 'updateRecord'
	| 'bulkUpdateRecords'
	| 'upsertRecords'
	| 'deleteRecords'
	| 'getDeletedRecords'
	| 'getCountInModule'
	| 'getTimeline';

interface GlobalFields {
	accessToken: string;
	moduleName: string;
}

export interface GetRecordsFields extends GlobalFields {
	fields: string;
	getRecordsParameters: {
		ids?: string;
		page?: number;
		perPage?: number;
		pageToken?: string;
		sortOrder?: 'asc' | 'desc';
		sortBy?: 'id' | 'Created_Time' | 'Modified_Time';
		accessToken?: string;
	};
}

export interface GetSpecificRecordFields extends GlobalFields {
	recordId: string;
	fields?: string;
}

export interface SearchRecordsFields extends GlobalFields {
	searchRecordsParameters: {
		criteria?: string; // '{ criteria: [] }'
		email?: string;
		phone?: string;
		word?: string;
		fields?: string;
		page?: number;
		perPage?: number;
		accessToken?: string;
	};
}

export interface CreateRecordFields extends GlobalFields {
	createRecordsData: string; // '{ records: [] }'
}

export interface UpdateRecordFields extends GlobalFields {
	recordId: string;
	updateRecordData: string; // '{ }'
}

export interface BulkUpdateRecordsFields extends GlobalFields {
	bulkUpdateRecordsData: string; // '{ records: Array<{id: string, [key: string]: any}> }'
}

export interface UpsertRecordsFields extends GlobalFields {
	upsertRecords: string; // '{ records: Array<object> }'
}

export interface DeleteRecordsFields extends GlobalFields {
	ids: string;
}

export interface GetDeletedRecordsFields extends GlobalFields {
	getDeletedRecordsParameters: {
		type?: 'all' | 'recycle' | 'permanent';
		page?: number;
		perPage?: number;
	};
}

export interface GetCountInModuleFields extends GlobalFields {
	getCountInModuleParameters: {
		criteria?: string; // '{ criteria: [] }';
		email?: string;
		phone?: string;
		word?: string;
	};
}

export interface GetTimelineFields extends GlobalFields {
	recordId: string;
	perPage: number;
	pageToken: string;
}

export type PossibleRecordFields =
	| GetRecordsFields
	| GetSpecificRecordFields
	| SearchRecordsFields
	| CreateRecordFields
	| UpdateRecordFields
	| BulkUpdateRecordsFields
	| UpsertRecordsFields
	| DeleteRecordsFields
	| GetDeletedRecordsFields
	| GetCountInModuleFields
	| GetTimelineFields;
