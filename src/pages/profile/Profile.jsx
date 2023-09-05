import React from 'react'

function Profile({user}) {
  return (
    <div>
        <img  src={user.coverPic}/>
        <img src={user.profilePic}/>
       
        <h1>{user.mood[0]}</h1>
        <h1>{user.followers}</h1>
        <h1>{user.following}</h1>
    </div>
  )
}

export default Profile