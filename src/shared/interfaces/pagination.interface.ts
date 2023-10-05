export interface IPagination<T> {
	pageCount: number;
  totalItemCount: number;
  pageNumber: number;
  pageSize: 0,
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  data: T[]
}