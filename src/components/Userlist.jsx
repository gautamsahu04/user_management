import React from 'react';

const UserList = ({ users, setEditingUser, deleteUser }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 shadow-md bg-white rounded-md">
      <h2 className="text-lg font-semibold mb-4">User List</h2>
      <table className="min-w-full bg-white table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 bg-gray-200 text-gray-700">Name</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-200 text-gray-700">Email</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-200 text-gray-700">Phone</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-200 text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="text-center">
              <td className="px-4 py-2 border border-gray-300">{user.name}</td>
              <td className="px-4 py-2 border border-gray-300">{user.email}</td>
              <td className="px-4 py-2 border border-gray-300">{user.phone}</td>
              <td className="px-4 py-2 border border-gray-300">
                <button
                  className="bg-green-500 text-white font-semibold px-3 py-1 rounded mr-2 hover:bg-green-600 transition-colors"
                  onClick={() => setEditingUser(user)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white font-semibold px-3 py-1 rounded hover:bg-red-600 transition-colors"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
