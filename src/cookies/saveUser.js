import { parseCookies, setCookie } from "nookies";

export default function saveUser(user) {
  const cookie = parseCookies();
console.log(cookie)
  const users = cookie.users ? JSON.parse(cookie.users) : [];
  users.push(user);

  //   console.log({ cookie: JSON.parse(cookie.users) });

  const stringUsers = JSON.stringify(users);

  setCookie(null, "users", stringUsers, {
    maxAge: 60 * 60 * 24 * 1, //1 dia
  });
}
