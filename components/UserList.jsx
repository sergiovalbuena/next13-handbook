"use client"
import { useRouter } from "next/navigation"

export default function UserList({ users }) {
  
  const router = useRouter()

  return (
          <ul>
      {
          users.map((user) => (
            <li key={user.id}
              onClick={() => {
                console.log(user.id)
                router.push(`/users/${user.id}`)
            }}
            >
            <div>
                <h5>{user.id} {user.first_name} { user.last_name}</h5>
              <p>{user.email}</p>
              </div>
              <img src={user.avatar} alt={user.first_name} />
            </li>
          ))
        }
      </ul>
  )
}
