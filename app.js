import { system } from './system/state/state.js';
import {
  load_file_system,
  create_file_system,
} from './system/data/file_system.js';
import { get_users } from './system/user_management/users.js';
// pages
import { show_loading_OS } from './system/ui/pages/page_loading_os.js';
import { show_user_selection } from './system/ui/pages/page_user_selection.js';
import { batteryStatus } from './system/io/device/battery.device.js';

async function boot_OS() {
  show_loading_OS();
  system.file_system = load_file_system() || create_file_system();
  system.users.list = get_users(system.file_system);
  system.device.battery = batteryStatus;
  //

  setTimeout(() => {
    console.log('⚙️ system', system);

    show_user_selection();
  }, 1.5 * 1000);
}

//
document.addEventListener('DOMContentLoaded', boot_OS);
