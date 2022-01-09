import { parseCookies, setCookie } from "nookies";

export default function saveUser(user) {
  const cookie = parseCookies();

  const users = cookie.users ? JSON.parse(cookie.users) : [];
  console.log({ savedUsers: users });
  if (users.length) {
    const lastLength = users.length - 1;

    const lastUser = users[lastLength];
    users.push({ id: lastUser.id + 1, ...user });
  } else {
    users.push({ id: 1, ...user });
  }

  console.log({ newUsers: users });

  const stringUsers = JSON.stringify(users);

  setCookie(null, "users", stringUsers, {
    maxAge: 60 * 60 * 24 * 1, //1 dia
  });
}
