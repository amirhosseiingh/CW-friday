export function getDataFromLocalStorage(name) {
  let users = localStorage.getItem(name);
  return JSON.parse(users);
}
