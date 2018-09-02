const PERSIST_DATA_TTL = 3600000; //in ms
const LIVE_DATA_TTL = 5000; //in ms

var store = {
  // 'SELECT * FROM XYZ': {
  //   timestamp: 123092384,
  //   ttl: LIVE_DATA_TTL,
  //   data: results
  // }
};

function getTimestamp() {
  return + new Date();
}

function hasCache(key) {
  return !!store[key];
}

function hasVaidCache(key) {
  return !!store[key] && !isExpired(key);
}

function forceUpdateCache(key, data) {
  setCache(key, data, ttl);
}

function updateCache(key, data, ttl) {
  if(!hasCache(key) || isExpired(key)) {
    setCache(key, data, ttl);
  }
}

function getCache(key) {
  return store[key].data;
}

function setCache(key, data, ttl) {
  store[key] = {
    timestamp: getTimestamp(),
    ttl: ttl,
    data: data
  };
}

function deleteCache(key) {
  delete store[key];
}

function isExpired(key) {
  if(!hasCache(key))
    return true;
  let data = store[key];
  if(getTimestamp() - data.timestamp > data.ttl)
    return true;
  return false;
}

module.exports = {
  PERSIST_DATA_TTL,
  LIVE_DATA_TTL,
  hasCache,
  hasVaidCache,
  forceUpdateCache,
  getCache,
  updateCache,
  deleteCache
}
