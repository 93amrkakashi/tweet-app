import React from 'react'
import { useUsers } from '../../../../hooks/users'
import Avtar from '../../Avtar'


export function User({user}) {
  return(
    <div >
    <Avtar size={"70px"} user={user} />
    <h2>{user?.username}</h2>
    
    </div>
  )
}



function Users() {

  const { users, isLoading } = useUsers()
  if(isLoading) return "loading"
  // console.log(users)
  return (
    <div clsssName="users">
      {users?.map((user) => <User  key={Math.random} user={user}/>)}
    
    </div>
  )
}

export default Users