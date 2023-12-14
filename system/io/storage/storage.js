import { system } from '../../state/state.js';
import { idb } from './indexed_db.storage.js';

const KEYS = {
  FILE_SYSTEM: 'FILE_SYSTEM',
  USERS: 'USERS',
};
export const system_storage = {
  save: function (data) {
    idb.updateData(data);
  },
  load: function (key) {
    return idb.getData(key);
    return localStorage.getItem(key);
    return sessionStorage.getItem(key);
  },
  load_fs: function () {
    const key = KEYS.FILE_SYSTEM;
    return idb.getData(key);
    return localStorage.getItem(key);
    return sessionStorage.getItem(key);
  },
  load_users: function () {
    const key = KEYS.USERS;
    return idb.getData(key);
    return localStorage.getItem(key);
    return sessionStorage.getItem(key);
  },
  save_fs() {
    system.file_system.idb = KEYS.FILE_SYSTEM;
    this.save(system.file_system);
  },
  save_users() {
    system.users.idb = KEYS.USERS;
    this.save(system.users);
  },
};
