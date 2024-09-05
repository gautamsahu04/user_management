import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/Userlist';
import UserForm from './components/Userform';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const addUser = (user) => {
    axios.post('https://jsonplaceholder.typicode.com/users', user)
      .then(response => setUsers([...users, response.data]))
      .catch(error => console.error('Error adding user:', error));
  };

  const updateUser = (user) => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user)
      .then(response => {
        setUsers(users.map(u => (u.id === user.id ? response.data : u)));
        setEditingUser(null);
      })
      .catch(error => console.error('Error updating user:', error));
  };

  const deleteUser = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div>
      {/* <h1>User Management</h1> */}
      <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} />
      <UserList users={users} setEditingUser={setEditingUser} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
