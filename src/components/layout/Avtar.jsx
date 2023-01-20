import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../../hooks/users';
import { main } from '../../utils/routes'
import { useAuth } from "./../../hooks/auth";

function Avtar({user,size}) {

  // const {user, isLoading} = useAuth()
  // if (isLoading) {
  //   return "loading ......."
  // }
  // const{user}= user


  // const { user, isLoading }= useUser(uid)
  // console.log(user);
  // if(isLoading) return "loading ..."
  // console.log(user);



  // // const Avatar = user?.Avtar
  // // console.log(user)
  // console.log(user.avtar);
  return (
    <div>
      <Link to={`/profile/${user?.id}`}>
        <img style={{width:size,height:size, borderRadius:"50%"}} src={user?.avatar?user?.avatar :"https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="} alt="" />
      </Link>
    </div>
  )
}

export default Avtar
