'use client';

import React from "react";
import { useAppSelector } from '@/lib/store';

const UserStats = () => {
    const { users, currentUser, isLoggedIn } = useAppSelector((state) => state.user);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border">
            <h3 className="text-xl font-bold mb-4 dark:text-black">User Statistics</h3>

            <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded">
                    <div className="text-2xl font-bold text-blue-600">{users.length}</div>
                    <div className="text-sm text-gray-600">Total Users</div>
                </div>

                <div className="text-center p-4 bg-green-50 rounded">
                    <div className="text-2xl font-bold text-green-600">
                        {isLoggedIn ? '1' : '0'}
                    </div>
                    <div className="text-sm text-gray-600">Online Users</div>
                </div>
            </div>

            {isLoggedIn && currentUser && (
                <div className="mt-4 p-4 bg-yellow-50 rounded">
                    <h4 className="font-semibold text-yellow-800 mb-2">Current Session</h4>
                    <p className="text-sm text-yellow-700">
                        Logged in as: <strong>{currentUser.name}</strong>
                    </p>
                    <p className="text-sm text-yellow-700">
                        Email: {currentUser.email}
                    </p>
                </div>
            )}

            <div className="mt-4 text-xs text-gray-500">
                <p>This component automaticlly updates when:</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                    <li>Users are added/removed</li>
                    <li>Login/Logout status changes</li>
                    <li>Any user data is modified</li>
                </ul>
            </div>
        </div>
    )
};

export default UserStats;