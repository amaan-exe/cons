import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);

        if (!darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <motion.button
            onClick={toggleDarkMode}
            className="fixed bottom-8 right-8 z-50 bg-white dark:bg-secondary-800 p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group border-2 border-secondary-200 dark:border-secondary-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle dark mode"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
            <div className="relative w-8 h-8">
                {/* Sun Icon */}
                <motion.svg
                    className="absolute inset-0 w-8 h-8 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ opacity: darkMode ? 0 : 1, rotate: darkMode ? 180 : 0 }}
                    animate={{ opacity: darkMode ? 0 : 1, rotate: darkMode ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                    />
                </motion.svg>

                {/* Moon Icon */}
                <motion.svg
                    className="absolute inset-0 w-8 h-8 text-indigo-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ opacity: darkMode ? 1 : 0, rotate: darkMode ? 0 : -180 }}
                    animate={{ opacity: darkMode ? 1 : 0, rotate: darkMode ? 0 : -180 }}
                    transition={{ duration: 0.3 }}
                >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </motion.svg>
            </div>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-secondary-900 dark:bg-white text-white dark:text-secondary-900 text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
                <div className="absolute top-full right-4 w-2 h-2 bg-secondary-900 dark:bg-white transform rotate-45 -mt-1"></div>
            </div>
        </motion.button>
    );
};

export default DarkModeToggle;
