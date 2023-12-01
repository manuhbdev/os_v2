export function get_users(file_system) {
  const root = file_system;
  const home = root.children.find((node) => node.name === 'home');
  const users = home.children.map((node) => ({
    username: node.name,
    home_dir: node,
    desktop_dir: node.children.find((node) => node.name === 'Desktop'),
    is_admin: node.name === 'admin',
    is_logged_in: false,
  }));

  return users;
}
