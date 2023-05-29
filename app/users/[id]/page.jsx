// "use client"
// import { useParams } from 'next/navigation'

// export default function aUser() {

//   const params = useParams()
//   console.log(params)

//   return (
//     <div>puser details </div>
//   )
// }


async function getUser(id) {
 // console.log(id)
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  return data.data
  // return {
  //   test: "hello world"
  // }
}

export default async function aUser({params}) {
  const user = await getUser(params.id)
  console.log(user)

  return (
    <>
      <div>
        {/* { JSON.stringify(data)} */}
        <h1>User Details</h1>
        <div>
          <img src={user.avatar} alt={user.name} />
          <div>
            <h3>{user.first_name} {user.last_name}</h3>
            <h4>{user.id}</h4>
            <p>{user.email}</p>
          </div>
        </div>

      </div>
    </>
  )
}