'use client';
import React from 'react';
import { useTheme } from 'next-themes';

const ThemToggle = () => {
	const { theme, setTheme, systemTheme } = useTheme();
	const effective = theme === 'system' ? systemTheme : theme;

  return (
    <>
		<button className="px-3 py-2 rounded border text-sm bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100"
		onClick={() => setTheme(effective === 'dark' ? 'light' : 'dark')}
		>
			Toggle {effective === 'dark' ? 'Light' : 'Dark'}
		</button>
		</>
  );
};

export default ThemToggle;