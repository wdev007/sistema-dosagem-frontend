export interface ISensor {
	id: string;
	name: string;
	description: string;
	isActive: boolean;
	runDataCollectionEveryInMinutes: number;
	createdAt: string;
	updatedAt: string;
}
