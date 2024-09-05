import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, editingUser }) => {
  const [user, setUser] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser({ name: '', email: '', phone: '' });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser(user);
    } else {
      addUser(user);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-md bg-white rounded-md">
        <h1 className='flex justify-center items-center font-semibold text-black-300  text-xl'>User managment </h1>
      <h2 className="text-lg font-semibold mb-4">
        {editingUser ? 'Edit User' : 'Add User'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Name:</label>
          <input
            className="w-full bg-blue-100 text-black m-1 rounded font-bold px-3 py-2"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            className="w-full bg-blue-100 text-black m-1 rounded font-bold px-3 py-2"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone:</label>
          <input
            className="w-full bg-blue-100 text-black m-1 rounded font-bold px-3 py-2"
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          {editingUser ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
