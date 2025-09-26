'use client';

import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { addUser, deleteUser, updateUser } from '@/lib/store/slices/userSlice';

const UserList = () => {
    const { users, currentUser } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const [newUserName, setNewUserName] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');

    const handleAddUser = () => {
        if (newUserName && newUserEmail) {
            dispatch(addUser({
                name: newUserName,
                email: newUserEmail,
                avatar: '👤'
            }));
            setNewUserName('');
            setNewUserEmail('');
        }
    }

    const handleDeleteUser = (id: string) => {
        dispatch(deleteUser(id));
    }

    const handleUpdateUser = (id: string, name: string) => {
        dispatch(updateUser({id, updates: {name}}));
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h3 className="text-xl font-bold mb-4 dark:text-black">User Management</h3>
            
            {/* Add new user form */}
            <div className="mb-6 p-4 bg-gray-50 rounded">
                <h4 className="font-semibold mb-3">Add New User</h4>
                <div className="space-y-2">
                    <input type="text" 
                    placeholder="name"
                    value={newUserName}
                    onChange={(e) => {setNewUserName(e.target.value)}}
                    className="w-full px-3 py-2 border rounded" />
                    <input type="email" 
                    placeholder="email"
                    onChange={(e) => {setNewUserEmail(e.target.value)}}
                    className="w-fill px-3 py-2 border rounded" />
                    <button 
                    onClick={handleAddUser}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                        Add User
                    </button>
                </div>
            </div>

            {/* Users list */}
            <div className="space-y-2">
                <h4 className="font-semibold">All Users ({users.length})</h4>
                {users.map((user) => (
                    <div 
                    key={user.id}
                    className={`flex item-center justify-between p-3 rounded border ${
                        currentUser?.id === user.id ? 'bg-blue-50 border-blue-200' : 'bg-gray-50'
                    }`}
                    >
                        <div className="flex items-center space-x-3">
                            <span className="text-xl">{user.avatar}</span>
                            <div>
                                <p className="font-medium">{user.name}</p>
                                <p className="text-sm text-gray-600">{user.email}</p>
                                {currentUser?.id === user.id && (
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                        Current User
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <button 
                            onClick={() => handleUpdateUser(user.id, user.name + ' (Updated)')}
                            className="px-2 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600">
                                Update
                            </button>
                            <button 
                            onClick={() => handleDeleteUser(user.id)}
                            className="px-2 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default UserList;