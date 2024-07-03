interface CacheResolver<T> {
  (key: string, ...args: any): Promise<T>;
}

interface CacheItem {
  value: any;
}
const localStorage = {
  store: new Map(),
  getItem(key: string) {
    return this.store.get(key);
  },
  setItem(key: string, val: string) {
    this.store.set(key, val);
  },
};
type Cache = { [key: string]: CacheItem };

const cacheKey = "__cache__";
const cache: Cache = JSON.parse(localStorage.getItem(cacheKey) || "{}");

export const withCache = <T>(
  callback: (key: string, ...args: any) => Promise<T>
): CacheResolver<T> => {
  async function runFuncAndSave(key: string, ...args: any): Promise<T> {
    const result = await callback(key, ...args);
    cache[key] = { value: result };
    localStorage.setItem(cacheKey, JSON.stringify(cache));
    return result;
  }

  async function cacheResolver(key: string, ...args: any): Promise<T> {
    const cachedValue = cache[key];

    if (cachedValue) {
      return cachedValue.value;
    }

    return runFuncAndSave(key, ...args);
  }

  return cacheResolver;
};

export const updateCache = <T>(key: string, data: T): void => {
  cache[key] = { value: data };
  localStorage.setItem(cacheKey, JSON.stringify(cache));
};

export default withCache;
