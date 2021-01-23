import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const User = ({ match }) => {
    
   // const { userId } = match.params;
    
    const { userId } = useParams();

    const user = useSelector((state) => {

      const u = state.users.find((user) => user.id === userId);
      console.log(u);

      return u;
    }

    
  );
  if (!user) {
    return (
      <section>
        <h2>user not found!</h2>
      </section>
    );
  }

  return (
    <section>
        <h3>{userId}</h3>
        <p>First Name: {user.username}</p>
        <p>Last Name: {user.description}</p>
        <p>Email: {user.email}</p>
    </section>
  )
}

export default  User;