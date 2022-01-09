import { parseCookies, setCookie } from "nookies";

export default function deleteUser(id) {
  const cookie = parseCookies();

  const users = cookie.users ? JSON.parse(cookie.users) : [];
  const indexToRemove = users.map((item) => item.id).indexOf(id);
  users.splice(indexToRemove, 1);
  console.log({ users });
  const stringUsers = JSON.stringify(users);

  setCookie(null, "users", stringUsers, {
    maxAge: 60 * 60 * 24 * 1, //1 dia
  });

  return users;
}
