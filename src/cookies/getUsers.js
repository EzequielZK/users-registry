import { parseCookies } from "nookies";

export default function getUsers(id) {
  const cookie = parseCookies();

  const users = cookie.users ? JSON.parse(cookie.users) : [];
  if(!!id){
    const indexToGet = users.map((item) => item.id).indexOf(id);
    return users[indexToGet];
  }
  return users;
}
