'use client';

import { useTranslation } from 'react-i18next';

export default function ExampleTranslation() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">{t('welcome')}</h2>
      <p className="mb-4">{t('description')}</p>
      
      <div className="space-x-2">
        <button 
          onClick={() => changeLanguage('en')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          English
        </button>
        <button 
          onClick={() => changeLanguage('vi')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Tiếng Việt
        </button>
      </div>
      
      <p className="mt-4 text-sm text-gray-600">
        Current language: {i18n.language}
      </p>
    </div>
  );
}
