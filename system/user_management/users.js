import { system_storage } from '../io/storage/storage.js';
import { system } from '../state/state.js';

export async function load_users() {
  let users = null;
  try {
    const stored_users = await system_storage.load_users();
    if (!stored_users) {
      console.warn('[users]', 'not found');
      users = get_users_from_directory(system.file_system);
    } else {
      console.log('[users]', 'found', stored_users);
      users = stored_users;
    }
  } catch (error) {
    users = get_users_from_directory(system.file_system);
  }

  return users;
}

function get_users_from_directory(file_system) {
  const root = file_system;
  const home = root.children.find((node) => node.name === 'home');
  const users = home.children.map((node) => ({
    username: node.name,
    home_dir: node,
    desktop_dir: node.children.find((node) => node.name === 'Desktop'),
    is_admin: node.name === 'admin',
    is_logged_in: false,
  }));

  return {
    idb: 'users',
    list: users,
    current: null,
  };
}
