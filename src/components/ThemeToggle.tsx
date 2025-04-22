import { useEffect, useState } from 'react';

function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem('theme') === 'dark' ||
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

        setDark(isDark);
        document.documentElement.classList.toggle('dark', isDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = !dark;
        setDark(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', newTheme);
    };

    return (
        <label
            htmlFor="AcceptConditions"
            className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors dark:bg-gray-600"
        >
            <input
                type="checkbox"
                id="AcceptConditions"
                className="peer sr-only"
                onChange={toggleTheme}
                checked={dark}
                readOnly
            />

            <span
                className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"
            ></span>
        </label>
    );
}

export default ThemeToggle;
