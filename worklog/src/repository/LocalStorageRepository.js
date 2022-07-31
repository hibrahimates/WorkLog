const uniqueIdKey = "uniqueID";

export const LocalStorageRepository = {
  //__\\
  create: (storageObject) => {
    localStorage.setItem(storageObject.id, JSON.stringify(storageObject));
  },

  read: (storageObject) => {
    let readObject = localStorage.getItem(storageObject.id);
    return JSON.parse(readObject);
  },

  readAll: () => {
    var values = [];
    var keys = Object.keys(localStorage);
    var i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }
    return values;
  },

  update: (storageObject) => {
    var value = this.read(storageObject.id);
    if (value != null) {
      localStorage.setItem(storageObject.id, JSON.stringify(storageObject));
    } else {
      console.log(storageObject.id + " Object is not exist");
    }
  },

  remove: (storageObject) => {
    localStorage.removeItem(storageObject.id);
  },

  clear: () => {
    localStorage.clear();
  },

  generateId: () => {
    var uniqueId = localStorage.getItem(uniqueIdKey);
    console.log("__________________" + uniqueId);
    if (uniqueId != null) {
      uniqueId = parseInt(uniqueId) + 1;
    } else {
      uniqueId = 1;
    }
    localStorage.setItem(uniqueIdKey, uniqueId);
    return uniqueId;
  },
};
