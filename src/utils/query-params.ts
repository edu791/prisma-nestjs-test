import { ListQueryDto } from '../list-query-params.dto';

export function buildListQueryParams(query: ListQueryDto): any {
  const findManyArgs: any = {};
  if (query.sort) {
    findManyArgs.orderBy = {
      [query.sort.replace('-', '')]: query.sort.includes('-') ? 'desc' : 'asc',
    };
  }

  if (query.limit) {
    findManyArgs.take = query.limit;
  }

  if (query.page) {
    findManyArgs.skip = query.page * query.limit;
  }

  return findManyArgs;
}
