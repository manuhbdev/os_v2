let initial_state = {
  file_system: {},
  users: {
    idb: 'users',
    list: [],
    current: null,
  },
  device: {
    battery: {},
  },
  router: {},
  programs: [],
  ui: {
    view: null,
    desktop_icons: [],
    windows: [],
  },
};
export let system = initial_state;
export function reset_ui() {
  system.ui.desktop_icons = [];
  system.ui.windows = [];
}
