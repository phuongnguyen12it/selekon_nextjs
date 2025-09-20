'use client';
import React from 'react'
import { useTranslation } from "react-i18next";

const HomeContent = () => {
const { t, i18n } = useTranslation();

console.log('i18n instance:', i18n);
console.log('current language:', i18n.language);
console.log('is initialized:', i18n.isInitialized);
console.log('available resources:', i18n.getResourceBundle('en', 'translation'));
console.log('trying to get welcome:', t("welcome"));
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
        <h1 className="text-2xl font-bold">{t("welcome")}</h1>
        <p className="text-gray-600">Current language: {i18n.language}</p>
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
        <p className="text-sm text-gray-500">{t("language")}</p>
      </div>
  )
}

export default HomeContent