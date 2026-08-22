import { toggleTheme } from '@/features/ThemeSlice';
import { Moon, Search, Sun } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );
  console.log('this is theme->', mode);

  return (
    <nav
      className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b px-5 sm:px-8"
      style={{
        background: 'var(--surface-color)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="flex items-center gap-5 sm:gap-10">
        <h1
          onClick={() => navigate('/')}
          className="cursor-pointer text-2xl font-bold tracking-[-1px]"
          style={{ color: 'var(--primary-color)' }}
        >
          EaseUi
        </h1>

        <div
          className="hidden h-12 items-center rounded-full px-4 sm:flex"
          style={{ background: 'var(--surface-soft)' }}
        >
          <Search size={18} style={{ color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder="Search components"
            className="ml-2 w-44 bg-transparent text-sm outline-none sm:w-64"
            style={{ color: 'var(--text-color)' }}
          />
        </div>
      </div>

      <ul
        className="hidden items-center gap-5 text-sm font-semibold md:flex"
        style={{ color: 'var(--text-muted)' }}
      >
        <li
          onClick={() => navigate('components')}
          className="cursor-pointer hover:text-[var(--text-color)]"
        >
          Components
        </li>
        <li className="cursor-pointer hover:text-[var(--text-color)]">About</li>
        <li className="cursor-pointer hover:text-[var(--text-color)]">
          Templates
        </li>
        {mode === 'dark' && (
          <li
            className="cursor-pointer rounded-full p-2 hover:bg-[var(--surface-soft)]"
            onClick={() => dispatch(toggleTheme())}
          >
            <Sun size={20} className="text-yellow-400" />
          </li>
        )}
        {mode === 'light' && (
          <li
            className="cursor-pointer rounded-full p-2 hover:bg-[var(--surface-soft)]"
            onClick={() => dispatch(toggleTheme())}
          >
            <Moon size={20} className="text-gray-600 dark:text-gray-400" />
          </li>
        )}
      </ul>

      {/* Mobile Hamburger */}
      <button
        aria-label="Open menu"
        className="md:hidden"
        style={{ color: 'var(--text-color)' }}
      >
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
