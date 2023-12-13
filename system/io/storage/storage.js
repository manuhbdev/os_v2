import { system } from '../../state/state.js';
import { idb } from './indexed_db.storage.js';

export const system_storage = {
  save: function (data) {
    idb.updateData(data);
  },
  load: function (key) {
    return idb.getData(key);
    return localStorage.getItem(key);
    return sessionStorage.getItem(key);
  },
  save_fs() {
    this.save(system.file_system);
  },
  save_users() {
    this.save(system.users);
  },
};
