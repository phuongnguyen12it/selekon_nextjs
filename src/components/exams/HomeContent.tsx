'use client';
import React from 'react'
import { useTranslation } from "react-i18next";
import ReduxDemo from './ReduxDemo';
import UserProfile from './UserProfile';
import UserList from './UserList';
import UserStats from './UserStats';

const HomeContent = () => {
const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* i18n Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">{t("welcome")}</h1>
          <p className="text-gray-600 mb-4">Current language: {i18n.language}</p>
          <div className="space-x-2">
            <button 
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => i18n.changeLanguage("en")}
            >
              English
            </button>
            <button 
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => i18n.changeLanguage("vi")}
            >
              Tiếng Việt
            </button>
          </div>
        </div>

        {/* Redux Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">State Management Demo</h2>
          <ReduxDemo />
        </div>

        {/* Multi-Component State Shareing Demo */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Redux State Shareing Between Components
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <UserProfile />
            <UserList />
            <UserStats />
          </div>
        </div>

        {/* Combined Demo */}
        <div className="text-center text-sm text-gray-500">
          <p>i18n + Redux Toolkit + Next.js App Router</p>
        </div>

      </div>
    </div>
  )
}

export default HomeContent