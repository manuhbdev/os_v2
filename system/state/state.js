export let system = {
  file_system: {},
  users: {
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

export function reset_ui() {
  system.ui.desktop_icons = [];
  system.ui.windows = [];
}
