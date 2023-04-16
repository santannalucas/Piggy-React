import React, { useState } from "react";
import useFetch from "../../../useFetch";

const UserCreate = () => {
    const {data: roles, isLoading, error} = useFetch('admin/roles')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role_id, setRoleID] = useState('');

    return (
        <div className="create">
        
          <h2>New User</h2>
        {error && <div> { error } </div>}
        {isLoading && <div> Loading... </div>}
        {roles && 
            <form>
          
            <label>Name:</label>
            <input
                type='text'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
        
            <label>Email:</label>
            <input
                type='text'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            ></input>

            <label>Role:</label>
            <select
                value={role_id}
                onChange={(e) => setRoleID(e.target.value)}
            >
            {roles.map(role => (
            <option key={role[0]} value={role[0]}>{role[1]}</option>     ))}
            </select>

        <button>Create User</button>
      </form>}
    </div>
)
}
   
export default UserCreate;
