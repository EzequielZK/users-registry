import { parseCookies, setCookie } from "nookies";

export default function editUser(id, userData) {
  const cookie = parseCookies();
  console.log({userData,id})

  const users = cookie.users ? JSON.parse(cookie.users) : [];
  const indexToEdit = users.map((item) => item.id).indexOf(id);
  let selectedUser = users[indexToEdit];
  console.log({ selectedUser });
  selectedUser = { ...selectedUser, ...userData };

  users.splice(indexToEdit, 1, selectedUser);
  console.log({ selectedUser, users });
  const stringUsers = JSON.stringify(users);

  setCookie(null, "users", stringUsers, {
    maxAge: 60 * 60 * 24 * 1, //1 dia
  });

  return users;
}
