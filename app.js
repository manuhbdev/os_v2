import { system } from './system/state/state.js';
import {
  load_file_system,
  create_default_file_system,
  TreeNode,
} from './system/data/file_system.js';
import { load_users } from './system/user_management/users.js';
// pages
import { show_loading_OS } from './system/ui/pages/page_loading_os.js';
import { show_user_selection } from './system/ui/pages/page_user_selection.js';
import { batteryStatus } from './system/io/device/battery.device.js';
import { system_storage } from './system/io/storage/storage.js';

async function boot_OS() {
  show_loading_OS();

  system.file_system = await load_file_system();
  system.users = await load_users();
  system.device.battery = batteryStatus;
  //
  system_storage.save_fs();
  system_storage.save_users();

  //
  setTimeout(() => {
    console.log('⚙️ system', system);
    show_user_selection();
  }, 1.5 * 1000);
}

//
document.addEventListener('DOMContentLoaded', boot_OS);
