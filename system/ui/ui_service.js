import { system } from '../state/state.js';

export function change_view_state(new_view_name) {
  system.ui.view = new_view_name;
  document.body.classList = '';
  document.body.classList.add(new_view_name);
}
