module.exports = function getCache(maxSize) {
    const cache = new Map();
    changedIds = [];
  
    return {
      setCacheChunk(value) {
        if (Array.isArray(value)) {
          value.forEach(item => this.addToCache(item));
        } else {
          this.addToCache(value);
        }
      },
  
      changeItem(newData) {
        if (Array.isArray(newData)) {
          newData.forEach(item => this.changeCache(item));
        } else {
          this.changeCache(newData);
        }
      },
  
      getCacheItemById(id) {
        if (cache.has(id)) {
            const value = cache.get(id);
            cache.delete(id);
            cache.set(id, value);
            return value;
        }
      },
  
      getData() {
        console.log(Array.from(cache.values()))
        return Array.from(cache.values());
      },
  
      addToCache(item) {
        const id = changedIds.findIndex((idC) => idC === item.id);
        if(id !== -1) {
            if (cache.has(item.id) ) {
                cache.delete(item.id);
            }
            changedIds.splice(id, 1);
        }
        if (cache.has(item.id)) {
            cache.delete(item.id);
        } else if (cache.size >= maxSize + changedIds.length) {    
                let firstKey;       
                const cacheKeys = Array.from(cache.keys());
                for (let i = 0; i < cache.size; i++) {
                    firstKey = cacheKeys[i];
                    const idFirst = changedIds.findIndex(idC => idC === firstKey);
                    if (idFirst === -1) {
                        cache.delete(firstKey);
                        break;
                    }
                }
        }
        cache.set(item.id, item);
        if (cache.size > maxSize + changedIds.length) {
            const firstKey = cache.keys().next().value;
            cache.delete(firstKey);
        }
      },

      changeCache(item) {
        if (cache.has(item.id)) {
            const id = changedIds.findIndex((idC) => idC === item.id);
            if (cache.size > maxSize + changedIds.length) {
                const firstKey = cache.keys().next().value;
                cache.delete(firstKey);
            }
            if(id === -1) {
                changedIds.push(item.id);
            } 
            cache.set(item.id, item); 
            if (cache.size > maxSize + changedIds.length) {
                const firstKey = cache.keys().next().value;
                cache.delete(firstKey);
            }
        }
      }
    };
}