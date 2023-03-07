import React from "react";
import useFetch from "../../../useFetch";
import UserList from "./UserList";

const Users = () => {
  const {data: users, isLoading, error} = useFetch('users')

  return (
    <div className="users">
        <h1>Users</h1>
        {error && <div> { error } </div>}
        {isLoading && <div> Loading... </div>}
        {users && <UserList users={users} />}
    </div>
  );
}
 
export default Users;