import { login } from '../../security/auth.js';
import { system } from '../../state/state.js';
import { div } from '../../utils.js';
import { VIEWS } from '../ui_models.js';
import { change_view_state } from '../ui_service.js';

function create_user_card(user) {
  const user_card = div({ class_name: 'user' });
  user_card.innerHTML = `
        <div class="avatar"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
      </svg></div>
        <p class="username">${user.username}</p>
        <button class="user_login">iniciar sesion</button>
    `;
  return user_card;
}

function create_view() {
  document.body.innerHTML = ``;
  system.users.list.forEach((user) => {
    const user_card = create_user_card(user);
    const btn = user_card.querySelector('button');
    btn.onclick = () => login(user.username);
    //
    document.body.appendChild(user_card);
  });
}
export function show_user_selection() {
  change_view_state(VIEWS.USER_SELECTION);
  create_view();
}
