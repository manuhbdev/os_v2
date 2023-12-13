import { system } from '../../state/state.js';
import { idb } from './indexed_db.storage.js';

export const system_storage = {
  save: function (key, data) {
    idb.updateData(key, data);
  },
  load: function (key) {
    return idb.getData(key);
  },
  save_fs() {
    this.save('fs', system.file_system);
  },
  save_users() {
    this.save('users', system.users);
  },
};
