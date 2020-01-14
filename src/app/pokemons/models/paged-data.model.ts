export interface PagedData<Pokemon> {
  data: Pokemon[];
  limit: number;
  offset: number;
}
