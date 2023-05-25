import UserList from "@/components/UserList";
import { Image } from "next/image";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
 // console.log(data)
  return data.data
}



export default async function Users() {
  const users = await fetchUsers();
  return (
    <>
      <div>user page</div>
      <UserList users={users} />
    </>
  )
}
