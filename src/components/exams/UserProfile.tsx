'use client';

import React from "react";
import { useAppSelector, useAppDispatch } from "@/lib/store";
import { login, logout } from '@/lib/store/slices/userSlice';
import listUserState from '@/mocks/users/listUsersState.json'

const UserProfile = () => {
    const { currentUser, isLoggedIn } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const handleLogin = () => {
        const mockUser = listUserState[0];
        dispatch(login(mockUser));
    }

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h3 className="text-xl font-bold mb-4 dark:text-black">User Profile</h3>
            {isLoggedIn && currentUser ? (
             <div className="space-y-3">
                <div className="flex items-center space-x-3">
                    <span className="text-2xl">{currentUser.avatar}</span>
                    <div>
                        <p className="font-semibold">{currentUser.name}</p>
                        <p className="text-sm text-gray-600">{currentUser.email}</p>
                    </div>
                </div>
                <button 
                onClick={handleLogout}
                className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Logout
                </button>
             </div>   
            ): (
                <div className="text-center">
                    <p className="text-gray-500 dark:text-black mb-4">Not logged in</p>
                    <button 
                    onClick={handleLogin}
                    className="px-4 y-2 bg-blue-500 text-white dark:text-black rounded hover:bg-blue-600">
                        Login as John
                    </button>
                </div>
            )}
        </div>
    )
}

export default UserProfile;