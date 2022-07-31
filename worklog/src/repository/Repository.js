import {LocalStorageRepository} from "./LocalStorageRepository.js";

export const Repository = {
  //__\\
  create: (storageObject) => {
    LocalStorageRepository.create(storageObject);
  },

  read: (storageObject) => {
    return LocalStorageRepository.read(storageObject);
  },

  readAll: () => {
    return LocalStorageRepository.readAll();
  },

  update: (storageObject) => {
    LocalStorageRepository.update(storageObject);
  },

  remove: (storageObject) => {
    LocalStorageRepository.remove(storageObject);
  },

  clear: () => {
    LocalStorageRepository.clear();
  },

  generateId: () => {
    return LocalStorageRepository.generateId();
  },
};
