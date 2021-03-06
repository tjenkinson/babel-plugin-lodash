import _ from 'lodash';

function clear(store) {
  toArray.cache.clear();
}

function clearDeep(store) {
  clear(store);
  store.__data__.clear();
}

function findEntry(map, iteratee) {
  return _.find(toArray(map), entry => iteratee(entry[1], entry[0], map));
}

const toArray = _.memoize(_.toArray);

/*----------------------------------------------------------------------------*/

export default class MapCache {
  constructor(values) {
    this.__data__ = new Map(values);
  }

  clear() {
    clearDeep(this);
    return this;
  }

  delete(key) {
    clear(this);
    return this.__data__.delete(key);
  }

  find(iteratee) {
    return _.nth(findEntry(this.__data__, iteratee), 1);
  }

  findKey(iteratee) {
    return _.first(findEntry(this.__data__, iteratee));
  }

  get(key) {
    return this.__data__.get(key);
  }

  has(key) {
    return this.__data__.has(key);
  }

  set(key, value) {
    clear(this);
    this.__data__.set(key, value);
    return this;
  }

  get [Symbol.iterator]() {
    return this.__data__[Symbol.iterator]();
  }
};
