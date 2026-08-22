import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useSelector } from 'react-redux';

type Props = {};

type ThemeState = {
  theme: {
    mode: 'light' | 'dark';
  };
};

const ComponentLayout = ({}: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { mode } = useSelector((state: ThemeState) => state.theme);

  const isDark = mode === 'dark';

  const components = [
    'Button',
    'Card',
    'Modal',
    'Input',
    'Navbar',
    'Carousel',
    'Tooltip',
    'Layout',
  ];

  const handleNavigate = (item: string) => {
    navigate(item.toLowerCase());

    // Close mobile sidebar after navigation
    setSidebarOpen(false);
  };

  return (
    <div
      className={`
        flex
        h-[calc(100vh-4rem)]
        w-full
        overflow-hidden
        transition-colors
        duration-300

        bg-(--bg-color) text-(--text-color)
      `}
    >
      {/* ================================================= */}
      {/* MOBILE OVERLAY */}
      {/* ================================================= */}

      {sidebarOpen && (
        <div
          className="
            fixed
            inset-0
            z-30
            bg-black/40
            backdrop-blur-sm
            md:hidden
          "
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ================================================= */}
      {/* SIDEBAR */}
      {/* ================================================= */}

      <aside
        className={`
          fixed
          left-0
          top-16
          z-40

          flex
          h-[calc(100vh-4rem)]
          w-64
          shrink-0
          flex-col

          border-r
          p-6

          transform
          transition-transform
          duration-300
          ease-in-out

          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}

          md:translate-x-0

          ${
            isDark
              ? 'border-(--border-color) bg-(--surface-color)'
              : 'border-(--border-color) bg-(--surface-color)'
          }
        `}
      >
        {/* ================================================= */}
        {/* SIDEBAR HEADER */}
        {/* ================================================= */}

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-md font-bold">Components</h2>

            <p
              className={`
                mt-1
                text-xs
                text-(--text-faint)
              `}
            >
              UI component library
            </p>
          </div>

          {/* Mobile close */}

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className={`
              rounded-lg
              p-2
              transition
              md:hidden

              ${
                isDark
                  ? 'text-white/50 hover:bg-white/10 hover:text-white'
                  : 'text-gray-400 hover:bg-gray-100 hover:text-gray-900'
              }
            `}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        {/* ================================================= */}
        {/* COMPONENT LIST */}
        {/* ================================================= */}

        <nav className="flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-1">
            {components.map((item) => {
              const itemPath = `/components/${item.toLowerCase()}`;

              const isActive = location.pathname === itemPath;

              return (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => handleNavigate(item)}
                    className={`
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      rounded-lg
                      px-3
                      py-2.5
                      text-left
                      text-sm
                      transition-all
                      duration-200
                      ease-in-out

                      ${
                        isActive
                          ? isDark
                            ? 'bg-(--primary-color)/10 text-(--primary-color)'
                            : 'bg-(--primary-color)/10 text-(--primary-color)'
                          : isDark
                            ? 'text-(--text-faint) hover:bg-(--surface-soft) hover:text-(--text-color)'
                            : 'text-(--text-faint) hover:bg-(--surface-soft) hover:text-(--text-color)'
                      }
                    `}
                  >
                    <span className={isActive ? 'font-medium' : ''}>
                      {item}
                    </span>

                    {isActive && (
                      <ChevronRight
                        size={15}
                        className={
                          isDark
                            ? 'text-(--primary-color)'
                            : 'text-(--primary-color)'
                        }
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <main
        className={`
          min-w-0
          h-[calc(100vh-4rem)]
          flex-1
          overflow-y-auto
          overflow-x-hidden

          bg-(--bg-color)
          md:ml-64
        `}
      >
        {/* ================================================= */}
        {/* MOBILE MENU BUTTON */}
        {/* ================================================= */}

        <div className="px-5 pt-5 sm:px-6 md:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen((prev) => !prev)}
            className={`
              flex
              items-center
              gap-2
              rounded-lg
              border
              px-3
              py-2
              text-sm
              font-medium
              transition

              ${
                isDark
                  ? 'border-white/10 bg-white/3 text-white/70 hover:bg-white/8 hover:text-white'
                  : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }
            `}
            aria-label="Toggle component menu"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}

            <span>{sidebarOpen ? 'Close' : 'Components'}</span>
          </button>
        </div>

        {/* ================================================= */}
        {/* OUTLET */}
        {/* ================================================= */}

        <div className="min-w-0 p-5 sm:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default ComponentLayout;
