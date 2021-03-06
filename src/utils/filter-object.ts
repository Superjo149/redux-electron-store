/*
  Given an source object and a filter shape, remove all leaf elements in the shape
  from the source.

  Example:
  filterObject({'a': 1, 'b':{'c': {}}}, {'b': {'c': true}})
  will return {'a': 1, 'b': {}}.

  The value of the leaf elment has to be true to be ignored
*/

import isObject from 'lodash/isObject';
import keys from 'lodash/keys';
import { DeletedObjects } from './object-difference';

export function filterObject(source: any, filter: DeletedObjects | boolean) {
  if (!source || filter === true) return {};
  let filtered: DeletedObjects = {};
  if (isFilterObject(filter)) {
    keys(source).forEach((key) => {
      if (isObject(filter[key])) {
        filtered[key] = filterObject(source[key], filter[key]);
      } else if (filter[key] && filter[key] !== true) {
        throw new Error(`Values in the filter must either be another object or 'true' \n Filter given: ${JSON.stringify(filter)}`);
      } else if (filter[key] !== true) {
        filtered[key] = source[key];
      }
    });
  }
  return filtered;
};

export const isFilterObject = (o: any): o is object => isObject(o)
