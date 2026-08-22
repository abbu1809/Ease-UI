import React from 'react';
import { cn } from '@/libs/utils';

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ sidebar, header, children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'grid min-h-[220px] grid-cols-[120px_1fr] grid-rows-[48px_1fr] gap-2',
        className
      )}
      {...props}
    >
      {sidebar && (
        <aside className="row-span-2 rounded-lg bg-indigo-500/10 p-3">
          {sidebar}
        </aside>
      )}
      <header className="rounded-lg bg-indigo-500/15 p-3">{header}</header>
      <main className="rounded-lg bg-gray-100 p-4 dark:bg-white/10">
        {children}
      </main>
    </div>
  )
);

Layout.displayName = 'Layout';
export { Layout };
