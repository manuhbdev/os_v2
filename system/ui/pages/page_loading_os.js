import { VIEWS } from '../ui_models.js';
import { change_view_state } from '../ui_service.js';

function create_view() {
  document.body.innerHTML = `loading...`;
}
export function show_loading_OS() {
  change_view_state(VIEWS.LOADING_OS);
  create_view();
}
