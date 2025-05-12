import { Icon } from '@iconify/react';
import { useState } from 'react';

const initTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);
  return initialTheme === 'dark';
};

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(() => initTheme());
  const handleSwitchTheme = () => {
    const root = document.documentElement;
    const newTheme = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDark((prev) => !prev);
  };
  return (
    <button
      name="theme-switch"
      aria-label="Switch Theme"
      className="hover:text-accent cursor-pointer hover:scale-110 max-sm:hidden"
      onClick={handleSwitchTheme}
    >
      <Icon icon={isDark ? 'tabler:moon' : 'tabler:sun'} fontSize={20} />
    </button>
  );
};
export default ToggleTheme;
