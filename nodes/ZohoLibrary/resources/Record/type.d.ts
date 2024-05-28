export type RecordOperation =
	| 'getRecords'
	| 'getSpecificRecord'
	| 'searchRecords'
	| 'createRecord'
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
		sortBy?: 'id' | 'Created_Time' | 'Updated_Time';
		accessToken?: string;
	};
}

export interface GetSpecificRecordFields extends GlobalFields {
	recordId: string;
	fields?: string;
}

export interface SearchRecordsFields extends GlobalFields {
	searchRecordsParameters: {
		criteria?: {
			criteria: Array<string, Array<string>>;
		};
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
	data: object;
}

export interface UpdateRecordFields extends GlobalFields {
	recordId: string;
	data: object;
}

export interface BulkUpdateRecordsFields extends GlobalFields {
	recordsData: {
		data: Array<object>;
	};
}

export interface UpsertRecordsFields extends GlobalFields {
	recordsData: {
		data: Array<object>;
	};
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
		criteria?: {
			criteria: Array<string, Array<string>>;
		};
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
