import { reset_ui, system } from '../state/state.js';
import { show_user_desktop } from '../ui/pages/page_user_desktop.js';
import { show_user_selection } from '../ui/pages/page_user_selection.js';

export function login(username, pwd = '') {
  const valid_users = [
    username === 'guest' && pwd === '',
    username === 'admin' && pwd === '',
  ];
  const is_valid = valid_users.some((cond) => cond === true);
  if (is_valid) {
    const user = system.users.list.find((u) => u.username === username);
    user.is_logged_in = true;
    system.users.current = user;
    console.log('✅user', user);
    show_user_desktop(user);
  } else {
    console.warn('invalid_pwd');
  }
}

export function logout() {
  system.users.current.is_logged_in = false;
  reset_ui();
  show_user_selection();
  console.log({ system });
}
