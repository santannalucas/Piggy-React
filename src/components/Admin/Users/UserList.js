import React from "react";

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <div className="user-preview" key={user.id} >
          <h2>{ user.email }</h2>
          <p className="list-details">{ user.name }</p>
        </div>
      ))}
    </div>
  );
}
 
export default UserList;