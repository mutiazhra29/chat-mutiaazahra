'use client';

import LollipopIcon from '@/components/LollipopIcon';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 border-b border-[#f4dce4] dark:border-[#493344] bg-[#fff8f1]/90 dark:bg-[#211923]/90 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-br from-[#ffd9e7] to-[#f3a6c1] p-2 rounded-xl text-[#7b3b58] shadow-md shadow-pink-200/60 dark:shadow-none">
            <LollipopIcon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none text-[#493743] dark:text-[#fff1f4]">
              About Mutia
            </h1>
            <p className="text-xs text-[#9b7889] dark:text-[#c7aebe]">
              teman ngobrol ceria
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="px-3 py-1.5 rounded-lg border border-[#ecd2dd] dark:border-[#594153] hover:bg-[#fceaf0] dark:hover:bg-[#392a38] transition-colors text-[#704c60] dark:text-[#f1dce7] flex items-center justify-center"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} sm:mr-1.5`} />
            <span className="hidden sm:inline text-xs font-medium">{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>
          <button
            className="px-3 py-1.5 rounded-lg border border-[#ecd2dd] dark:border-[#594153] hover:bg-[#fceaf0] dark:hover:bg-[#392a38] transition-colors text-[#704c60] dark:text-[#f1dce7] flex items-center justify-center"
            title="API Status"
          >
            <i className="fas fa-circle text-green-500 sm:mr-1.5" style={{ fontSize: '0.65rem' }}></i>
            <span className="hidden sm:inline text-xs font-medium">Live</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
