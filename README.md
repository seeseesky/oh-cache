# Oh! Cache [WIP]
This is a simple NodeJS library to enable data caching in your project.

## Example
```js
const oc = require('oh-cache');
const { PERSIST_DATA_TTL, LIVE_DATA_TTL } = oc;

function getData(key) {
  if(oc.hasVaidCache(key))
    return oc.getCache(key);
  getDataFromDB(function(results) {
    oc.updateCache(key, results, PERSIST_DATA_TTL);
    return oc.getCache(key);
  });
}
```

## Install
`npm install oh-cache --save`

## Features
- Lightweight
- Simple key/value mapping to handle your variables cache
- TTL (Time To Live) can be configurated by users

## Cache entry structure
```
{
    timestamp: 123092384,
    ttl: LIVE_DATA_TTL,
    data: Object
}
```

## API
- `hasCache(key)`: To check whether cache with key `key` exists
- `hasVaidCache(key)`: To check whether cache with key `key`, which is not expired yet, exists
- `getCache(key)`: Get data from cache entry with key `key`
- `updateCache(key, data, ttl)`: Add/Update cache entry if it is expired (`ttl` to specify the Time To Live of the entry)
- `forceUpdateCache(key, data, ttl)`: Add/Update cache entry even it may not expired (`ttl` to specify the Time To Live of the entry)
- `deleteCache(key)`: Delete cache entry with key `key`

## Default TTLs
- `PERSIST_DATA_TTL`: 3600 seconds
- `LIVE_DATA_TTL`: 5 seconds

### TODO
- Determine TTL automatically

Feel free to contribute this project if you are interested ❤
