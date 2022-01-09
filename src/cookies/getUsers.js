import { parseCookies } from "nookies";

export default function getUsers() {
  const cookie = parseCookies();

  const users = cookie.users ? JSON.parse(cookie.users) : [];
  return users;
}
